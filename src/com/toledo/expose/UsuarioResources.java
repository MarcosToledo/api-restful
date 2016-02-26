package com.toledo.expose;

import java.io.Serializable;
import java.util.List;

import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.toledo.usuario.model.Usuario;
import com.toledo.usuario.service.UsuarioService;

@Path("/usuarios")
@RequestScoped
public class UsuarioResources implements Serializable {
	private static final long serialVersionUID = 4971020141032483033L;
	
	@Inject
	private UsuarioService usuarioService;
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Usuario> buscarTodos() {
		return usuarioService.findAll();
	}
	
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	public Response cadastrar(Usuario usuario){
		usuarioService.save(usuario);
		return Response.ok(usuario, MediaType.APPLICATION_JSON).build();
	}
	
	@PUT
	@Path("{id}")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response alterar(@PathParam("id") String id, Usuario usuario) {
		usuario.setId(Integer.parseInt(id));
		usuarioService.update(usuario);
		return Response.ok(usuario, MediaType.APPLICATION_JSON).build();
	}
	
	@DELETE
	@Path("{id}")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response remover(@PathParam("id") String id, Usuario usuario) {
		usuarioService.remove(usuario);
		return Response.ok().build();
	}
}
