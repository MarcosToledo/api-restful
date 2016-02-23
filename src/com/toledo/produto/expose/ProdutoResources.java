package com.toledo.produto.expose;

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

@Path("/produtos")
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
		produtoDao.update(produto);
		return Response.ok(produto, MediaType.APPLICATION_JSON).build();
	}
	
	@DELETE
	@Path("{id}")
	public Response remover(@PathParam("id") String id, Class<Produto> produto) {
		produtoDao.delete(id, produto);
		return Response.ok().build();
	}
}
