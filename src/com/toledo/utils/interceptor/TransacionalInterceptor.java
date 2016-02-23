package com.toledo.utils.interceptor;

import javax.inject.Inject;
import javax.interceptor.AroundInvoke;
import javax.interceptor.Interceptor;
import javax.interceptor.InvocationContext;
import javax.persistence.EntityManager;

import com.toledo.utils.annotations.Transacional;

/**
 * Interceptor transacional
 * @author Marcos Toledo | 19/02/2016
 */
@Interceptor
@Transacional
public class TransacionalInterceptor {
	
	@Inject
	private EntityManager entityManager;
	
	@AroundInvoke
	public Object intercept(InvocationContext ctx) {
		Object resultado = null;
		try {
			entityManager.joinTransaction();
			resultado = ctx.proceed();
		} catch (Exception e) {
			
		}
		return resultado;
	}
}
