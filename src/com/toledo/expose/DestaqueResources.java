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

import com.toledo.destaque.dao.DestaqueDao;
import com.toledo.destaque.model.Destaque;

@Path("/destaques")
@RequestScoped
public class DestaqueResources implements Serializable {
	private static final long serialVersionUID = 4437809454854639562L;
	
	@Inject
	private DestaqueDao destaqueDao;
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Destaque> buscarTodos() {
		return destaqueDao.findAll();
	}
	
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	public Response cadastrar(Destaque destaque){
		destaqueDao.save(destaque);
		return Response.ok(destaque, MediaType.APPLICATION_JSON).build();
	}
	@PUT
	@Path("{id}")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response alterar(@PathParam("id") String id, Destaque destaque) {
		destaque.setId(Integer.parseInt(id));
		destaqueDao.update(destaque);
		return Response.ok(destaque, MediaType.APPLICATION_JSON).build();
	}
	
	@DELETE
	@Path("{id}")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response remover(@PathParam("id") String id) {
		destaqueDao.delete(Integer.parseInt(id), Destaque.class);
		return Response.ok().build();
	}
}
