package com.toledo.servico.dao;

import java.io.Serializable;
import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.TypedQuery;

import com.toledo.dao.DAO;
import com.toledo.servico.model.Servico;


@Stateless
public class ServicoDao extends DAO<Servico> implements Serializable {
	private static final long serialVersionUID = 4561926533153611881L;
	
	public ServicoDao() {
		super(Servico.class);
	}
	
	public List<Servico> findByNumberPage(int min, int max) {
		List<Servico> listaProduto = null;
		try {
			String sql = "SELECT s FROM Servico s";
			TypedQuery<Servico> query = entityManager.createQuery(sql, Servico.class)
					.setFirstResult(min)
					.setMaxResults(max);
			listaProduto = query.getResultList();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return listaProduto;
	}
}
