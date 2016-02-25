package com.toledo.usuario.dao;

import java.io.Serializable;

import javax.ejb.Stateless;

import com.toledo.dao.DAO;
import com.toledo.usuario.model.Usuario;


@Stateless
public class UsuarioDao extends DAO<Usuario> implements Serializable {
	private static final long serialVersionUID = -2964701180845133362L;

	public UsuarioDao() {
		super(Usuario.class);
	}
	
}