package com.toledo.produto.dao;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.ejb.Stateless;

import com.toledo.dao.DAO;
import com.toledo.produto.model.Produto;

@Stateless
public class ProdutoDao extends DAO<Produto> implements Serializable {
	private static final long serialVersionUID = 4561926533153611881L;

	public ProdutoDao() {
		super(Produto.class);
	}

	public List<Produto> findByNumberPage(int parseInt) {
		List<Produto> listaProduto = new ArrayList<>();
		try {
			String sql = "select * from produto limit 5,10";
		} catch (Exception e) {
			e.printStackTrace();
		}
		return listaProduto;
	}
}
