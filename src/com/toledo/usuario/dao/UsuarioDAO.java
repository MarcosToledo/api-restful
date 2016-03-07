package com.toledo.usuario.dao;

import java.io.Serializable;

import javax.ejb.Stateless;
import javax.persistence.NoResultException;
import javax.persistence.Query;

import com.toledo.dao.DAO;
import com.toledo.usuario.model.Usuario;

@Stateless
public class UsuarioDAO extends DAO<Usuario> implements Serializable {
	private static final long serialVersionUID = -2964701180845133362L;

	public UsuarioDAO() {
		super(Usuario.class);
	}

	public Usuario findUserByLoginPassword(String username, String password) {
		Usuario usuario = null;

		try {
			String hql = "SELECT u FROM Usuario u WHERE u.login = :login AND u.senha = :senha";
			Query query = entityManager.createQuery(hql);
			query.setParameter("login", username);
			query.setParameter("senha", password);
			
			usuario = (Usuario) query.getSingleResult();
		} catch (NoResultException e) {
			return usuario;
		} catch (Exception er) {
			er.printStackTrace();
		}
		return usuario;		
	}
}