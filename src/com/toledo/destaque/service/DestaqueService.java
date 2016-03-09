package com.toledo.destaque.service;

import java.io.Serializable;
import java.util.List;

import javax.inject.Inject;

import com.toledo.destaque.dao.DestaqueDao;
import com.toledo.destaque.model.Destaque;

public class DestaqueService implements Serializable {
	private static final long serialVersionUID = 1174541220613994132L;

	@Inject
	private DestaqueDao dao;
	
	public void save(Destaque destaque) {
		dao.save(destaque);
	}

	public void update(Destaque destaque) {
		dao.update(destaque);
	}

	public void remove(String id) {
		dao.delete(Integer.parseInt(id));
	}

	public Destaque findById(int id) {
		return dao.findById(id);
	}

	public List<Destaque> findAll() {
		return dao.findAll();
	}
}
