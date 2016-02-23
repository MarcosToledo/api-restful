package com.toledo.produto.service;

import java.io.Serializable;
import java.util.List;

import javax.inject.Inject;

import com.toledo.produto.dao.ProdutoDao;
import com.toledo.produto.model.Produto;

public class ProdutoService implements Serializable {
	private static final long serialVersionUID = -7440884540362240408L;
	
	@Inject
	private ProdutoDao dao;
	
	public void save(Produto produto) {
		dao.save(produto);
	}

	public void update(Produto produto) {
		
	}

	public void remove(Produto produto) {
		dao.delete(produto.getId(), Produto.class);
	}

	public Produto findById(int id) {
		return dao.findById(id);
	}

	public List<Produto> findAll() {
		return dao.findAll();
	}


}
