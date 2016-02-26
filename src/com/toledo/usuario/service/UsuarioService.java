package com.toledo.usuario.service;

import java.io.IOException;
import java.io.Serializable;
import java.security.NoSuchAlgorithmException;
import java.security.spec.InvalidKeySpecException;
import java.util.List;

import javax.inject.Inject;

import org.jose4j.lang.JoseException;
import org.json.JSONObject;

import com.toledo.expose.utils.TokenAuthenticationGenerator;
import com.toledo.usuario.dao.UsuarioDAO;
import com.toledo.usuario.model.Usuario;

public class UsuarioService implements Serializable {
	private static final long serialVersionUID = -5672967131691293451L;

	@Inject
	private UsuarioDAO dao;
	
	public void save(Usuario usuario) {
		JSONObject usuarioJSON = new JSONObject();
		usuarioJSON.put("idUsuario", usuario.getId());
		usuarioJSON.put("username", usuario.getLogin());
		usuarioJSON.put("password", usuario.getSenha());
		
		try {
			usuario.setToken(TokenAuthenticationGenerator.createToken(usuarioJSON));
		} catch (JoseException | IOException | NoSuchAlgorithmException | InvalidKeySpecException e) {
			e.printStackTrace();
		}
		dao.save(usuario);
	}

	public void update(Usuario usuario) {
		dao.update(usuario);
	}

	public void remove(Usuario usuario) {
		dao.delete(usuario.getId(), Usuario.class);
	}

	public Usuario findById(int id) {
		return dao.findById(id);
	}

	public List<Usuario> findAll() {
		return dao.findAll();
	}

	public Usuario findUserByLoginPassword(String username, String password) {
		return dao.findUserByLoginPassword(username, password);
	}
	
}
