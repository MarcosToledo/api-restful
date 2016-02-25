package com.toledo.expose.filters;

import java.io.Serializable;

import javax.inject.Singleton;
import javax.ws.rs.WebApplicationException;
import javax.ws.rs.core.HttpHeaders;
import javax.ws.rs.core.Response;

import com.sun.jersey.spi.container.ContainerRequest;
import com.sun.jersey.spi.container.ContainerRequestFilter;

@Singleton
public class AuthenticationRequestFilter implements ContainerRequestFilter, Serializable {
	private static final long serialVersionUID = 4445896499895930967L;
	
	@Override
	public ContainerRequest filter(ContainerRequest request) {
		String nome = "marcos";
		if(!(nome.equals(request.getHeaderValue(HttpHeaders.AUTHORIZATION)))){
			throw new WebApplicationException(Response.Status.UNAUTHORIZED);
		}	
		return request;
	}
}
