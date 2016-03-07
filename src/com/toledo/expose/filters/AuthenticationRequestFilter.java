package com.toledo.expose.filters;

import java.io.Serializable;

import javax.inject.Inject;
import javax.inject.Singleton;
import javax.ws.rs.WebApplicationException;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import org.json.JSONObject;

import com.sun.jersey.spi.container.ContainerRequest;
import com.sun.jersey.spi.container.ContainerRequestFilter;
import com.toledo.expose.utils.TokenAuthenticationGenerator;
import com.toledo.usuario.model.Usuario;
import com.toledo.usuario.service.UsuarioService;

@Singleton
public class AuthenticationRequestFilter implements ContainerRequestFilter, Serializable {
	private static final long serialVersionUID = 4445896499895930967L;

	@Inject
	private UsuarioService usuarioService;
	
	@Override
	public ContainerRequest filter(ContainerRequest request) {
		String token = request.getHeaderValue("authorization");
		String usuario = null;
		
		if (request.getPath().equals("site/produtos") 
				|| request.getPath().equals("console/usuarios/logar") 
				|| request.getPath().equals("site/destaques") 
				|| request.getPath().equals("site/servicos")) {
			return request;
		}
		
		try {
			usuario = TokenAuthenticationGenerator.getUserJsonFromToken(token);
		} catch (Exception e) {
			if (e.getMessage().contains("JWS signature is invalid")) {
				System.out.println("Token inválido");
			}
			throw new WebApplicationException(Response.Status.UNAUTHORIZED);
		}
		
		if (usuario != null) {
			JSONObject usuarioJSON = new JSONObject(usuario);
			String username = usuarioJSON.get("username").toString();
			String password = usuarioJSON.get("password").toString();
			Usuario usuarioEcontrado = usuarioService.findUserByLoginPassword(username, password);

			if (usuarioEcontrado != null) {
				return request;
			}
		}
		if (token == null || token.isEmpty()) {
			throw new WebApplicationException(Status.UNAUTHORIZED);
		}
		
		return request;
	}
}
