package com.toledo.expose.utils.keys;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.security.spec.PKCS8EncodedKeySpec;
import java.security.spec.X509EncodedKeySpec;

import org.jose4j.jwk.RsaJsonWebKey;
import org.jose4j.jwk.RsaJwkGenerator;
import org.jose4j.lang.JoseException;


public class ApiRestKeyGenerator {
	
	/**
	 * Gera as chaves públicas da API REST
	 * @author Nicolas Ibanheiz | 11/09/2015
	 * @throws JoseException
	 * @throws IOException
	 * @throws AfterGenerateKeysListenerException 
	 */
	public void generateNewRestKeys() throws JoseException, IOException {
		RsaJsonWebKey rsaJsonWebKey = RsaJwkGenerator.generateJwk(2048);
		rsaJsonWebKey.setKeyId(KeyConstants.JWK_ID);
		
		X509EncodedKeySpec x509EncodedKeySpec = new X509EncodedKeySpec(rsaJsonWebKey.getKey().getEncoded());
		FileOutputStream fosPublic = new FileOutputStream(KeyConstants.PATH + File.separator + KeyConstants.PUBLIC_KEY);
		fosPublic.write(x509EncodedKeySpec.getEncoded());
		fosPublic.close();

		PKCS8EncodedKeySpec pkcs8EncodedKeySpec = new PKCS8EncodedKeySpec(rsaJsonWebKey.getPrivateKey().getEncoded());
		FileOutputStream fosPrivate = new FileOutputStream(KeyConstants.PATH + File.separator + KeyConstants.PRIVATE_KEY);
		fosPrivate.write(pkcs8EncodedKeySpec.getEncoded());
		fosPrivate.close();
		
		System.out.println("GERADAS NOVAS CHAVES PARA API REST");
		
	}
}
