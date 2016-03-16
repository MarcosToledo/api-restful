package com.toledo.produto.dao;

import java.io.Serializable;
import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.TypedQuery;

import com.toledo.dao.DAO;
import com.toledo.produto.model.Produto;

@Stateless
public class ProdutoDao extends DAO<Produto> implements Serializable {
	private static final long serialVersionUID = 4561926533153611881L;

	public ProdutoDao() {
		super(Produto.class);
	}
	
	public List<Produto> findByNumberPage(int min, int max) {
		List<Produto> listaProduto = null;
		try {
			String sql = "SELECT p FROM Produto p";
			TypedQuery<Produto> query = entityManager.createQuery(sql, Produto.class)
					.setFirstResult(min)
					.setMaxResults(max);
			listaProduto = query.getResultList();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return listaProduto;
	}
}
