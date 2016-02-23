package com.toledo.utils.annotations;

import static java.lang.annotation.RetentionPolicy.RUNTIME;

import java.lang.annotation.Retention;

import javax.interceptor.InterceptorBinding;

@InterceptorBinding
@Retention(RUNTIME)
public @interface Transacional {

}