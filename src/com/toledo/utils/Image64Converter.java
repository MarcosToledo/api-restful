package com.toledo.utils;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;

import sun.misc.BASE64Decoder;

public class Image64Converter {

	/**
	 * base64 codificação de decodificação de Imagem, e salve - o no diretório especificado
	 * 
	 * @param base64 fotografia de Base64
	 * @return
	 */
	public static void decodeBase64ToImage(String base64, String path, String imgName) {
		BASE64Decoder decoder = new BASE64Decoder();
		try {
			FileOutputStream write = new FileOutputStream(new File(path + imgName));
			System.out.println(path+imgName);
			byte[] decoderBytes = decoder.decodeBuffer(base64);
			write.write(decoderBytes);
			write.close();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	public static void main(String args[]) throws IOException {
		String imgstr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAMZJREFUWIXt1c0JwkAQQOFH8KikHAuxAsE+tBwPNuA5EexKDyrEMDuZnygoO7Cn7PC+SxL442mBXXT5BNwKxxq/Pu8fvg0Yxl/HjYgCpHgIEQFocTfCC7DEXQgPwBM3I6yASPwNsZiSKNMCZ2Ad3N9rDzOvYWnvKF1uzN4PTQVUQAVUQAU0PP5K4+/2RtkZ370AqyxEQliOFHf9jDKIXoinAB5EKZ4GWBA9sFT20wANMRWfDSAhOkN8VsAQYY3PDgDYOuK/N3cGTuqJIUvx/QAAAABJRU5ErkJggg==";
		String path = "/home/nicolas/Downloads";
		String nomeImagem = "/teste.png";
		decodeBase64ToImage(imgstr, path, nomeImagem);
	}
}