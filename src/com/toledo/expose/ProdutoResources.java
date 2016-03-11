package com.toledo.expose;

import java.io.Serializable;
import java.util.List;

import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.toledo.produto.dao.ProdutoDao;
import com.toledo.produto.model.Produto;

@Path("/console/produtos")
@RequestScoped
public class ProdutoResources implements Serializable {
	private static final long serialVersionUID = -8662991551417752419L;
	
	@Inject
	private ProdutoDao produtoDao;
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Produto> buscarTodos() {
		return produtoDao.findAll();
	}
	
	@GET
	@Path("{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Produto buscarPorId(@PathParam("id") String id) {
		return produtoDao.findById(Integer.parseInt(id));
	}
	
	@GET
	@Path("{numeroPagina}")
	@Produces(MediaType.APPLICATION_JSON)
	public List<Produto> buscarPorPagina(@PathParam("numeroPagina") String numeroPagina) {
		return produtoDao.findByNumberPage(Integer.parseInt(numeroPagina));
	}
	
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	public Response cadastrar(Produto produto){
		produtoDao.save(produto);
		return Response.ok(produto, MediaType.APPLICATION_JSON).build();
	}
	
	@PUT
	@Path("{id}")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response alterar(@PathParam("id") String id, Produto produto) {
		produto.setId(Integer.parseInt(id));
		produtoDao.update(produto);
		return Response.ok(produto, MediaType.APPLICATION_JSON).build();
	}
	
	@DELETE
	@Path("{id}")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response remover(@PathParam("id") String id) {
		produtoDao.delete(Integer.parseInt(id));
		return Response.ok().build();
	}
}
