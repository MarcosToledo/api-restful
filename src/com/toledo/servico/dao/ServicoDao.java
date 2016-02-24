package com.toledo.servico.dao;

import java.io.Serializable;

import javax.ejb.Stateless;

import com.toledo.dao.DAO;
import com.toledo.servico.model.Servico;


@Stateless
public class ServicoDao extends DAO<Servico> implements Serializable {
	private static final long serialVersionUID = 4561926533153611881L;
	
	public ServicoDao() {
		super(Servico.class);
	}
}
