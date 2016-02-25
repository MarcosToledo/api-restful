package com.toledo.usuario.service;

import java.io.Serializable;
import java.util.List;

import javax.inject.Inject;

import com.toledo.usuario.dao.UsuarioDao;
import com.toledo.usuario.model.Usuario;

public class UsuarioService implements Serializable {
	private static final long serialVersionUID = -5672967131691293451L;

	@Inject
	private UsuarioDao dao;
	
	public void save(Usuario usuario) {
		dao.save(usuario);
	}

	public void update(Usuario usuario) {
		
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
}
