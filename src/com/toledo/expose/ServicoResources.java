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

import com.toledo.servico.dao.ServicoDao;
import com.toledo.servico.model.Servico;

@Path("/console/servicos")
@RequestScoped
public class ServicoResources implements Serializable {
	private static final long serialVersionUID = 4971020141032483033L;

	@Inject
	private ServicoDao servicoDao;
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Servico> buscarTodos() {
		return servicoDao.findAll();
	}
	
	@GET
	@Path("{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Servico buscarPorId(@PathParam("id") String id) {
		return servicoDao.findById(Integer.parseInt(id));
	}
	
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	public Response cadastrar(Servico servico){
		servicoDao.save(servico);
		return Response.ok(servico, MediaType.APPLICATION_JSON).build();
	}
	
	@PUT
	@Path("{id}")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response alterar(@PathParam("id") String id, Servico servico) {
		servico.setId(Integer.parseInt(id));
		servicoDao.update(servico);
		return Response.ok(servico, MediaType.APPLICATION_JSON).build();
	}
	
	@DELETE
	@Path("{id}")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response remover(@PathParam("id") String id) {
		servicoDao.delete(Integer.parseInt(id));
		return Response.ok().build();
	}
}
