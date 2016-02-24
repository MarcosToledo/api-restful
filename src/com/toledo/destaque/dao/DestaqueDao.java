package com.toledo.destaque.dao;

import java.io.Serializable;

import javax.ejb.Stateless;

import com.toledo.dao.DAO;
import com.toledo.destaque.model.Destaque;


@Stateless
public class DestaqueDao extends DAO<Destaque> implements Serializable {
	private static final long serialVersionUID = 4561926533153611881L;
	
	public DestaqueDao() {
		super(Destaque.class);
	}
}
