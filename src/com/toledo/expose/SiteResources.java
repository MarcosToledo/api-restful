package com.toledo.expose;

import java.io.Serializable;
import java.util.List;

import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.toledo.destaque.model.Destaque;
import com.toledo.destaque.service.DestaqueService;
import com.toledo.produto.dao.ProdutoDao;
import com.toledo.produto.model.Produto;
import com.toledo.servico.dao.ServicoDao;
import com.toledo.servico.model.Servico;

@Path("/site")
@RequestScoped
public class SiteResources implements Serializable {
	private static final long serialVersionUID = -9070881802024886983L;
	
	@Inject
	private DestaqueService destaqueService;
	@Inject
	private ProdutoDao produtoDao;
	@Inject
	private ServicoDao servicoDao;
	
	@Path("/destaques")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Destaque> buscarDestaques() {
		return destaqueService.findAll();
	}
	
	@Path("/produtos")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Produto> buscarProdutos() {
		return produtoDao.findAll();
	}
	
	@Path("/servicos")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Servico> buscarServicos() {
		return servicoDao.findAll();
	}
}