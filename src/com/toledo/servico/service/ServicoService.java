package com.toledo.servico.service;

import java.io.Serializable;
import java.util.List;

import javax.inject.Inject;

import com.toledo.servico.dao.ServicoDao;
import com.toledo.servico.model.Servico;

public class ServicoService implements Serializable {
	private static final long serialVersionUID = 1174541220613994132L;

	@Inject
	private ServicoDao dao;
	
	public void save(Servico servico) {
		dao.save(servico);
	}

	public void update(Servico servico) {
		
	}

	public void remove(Servico servico) {
		dao.delete(servico.getId(), Servico.class);
	}

	public Servico findById(int id) {
		return dao.findById(id);
	}

	public List<Servico> findAll() {
		return dao.findAll();
	}


}
