-- MySQL dump 10.13  Distrib 5.6.28, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: api_restful
-- ------------------------------------------------------
-- Server version	5.6.28-0ubuntu0.15.10.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `destaque`
--

DROP TABLE IF EXISTS `destaque`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `destaque` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(100) DEFAULT NULL,
  `descricao` text,
  `imagem` varchar(100) DEFAULT NULL,
  `data_cadastro` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `status` bit(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `destaque`
--

LOCK TABLES `destaque` WRITE;
/*!40000 ALTER TABLE `destaque` DISABLE KEYS */;
INSERT INTO `destaque` VALUES (1,'Novo consolo do Sex Shop do Juca','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non lobortis mi. Maecenas non interdum tortor. Phasellus et augue lacinia, luctus mauris eget, interdum dui. Aliquam erat volutpat','banner-top.jpg','2016-02-22 14:19:00',''),(8,'Teste','Teste','Teste','2016-03-02 22:06:29','\0');
/*!40000 ALTER TABLE `destaque` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `produto`
--

DROP TABLE IF EXISTS `produto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `produto` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(100) DEFAULT NULL,
  `imagem` varchar(100) DEFAULT NULL,
  `descricao` text,
  `data_cadastro` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `status` bit(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produto`
--

LOCK TABLES `produto` WRITE;
/*!40000 ALTER TABLE `produto` DISABLE KEYS */;
INSERT INTO `produto` VALUES (1,'Anel Peniano do Juca','produto-um.jpg','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non lobortis mi. Maecenas non interdum tortor. Phasellus et augue lacinia, luctus mauris eget, interdum dui. Aliquam erat volutpat','2016-02-22 14:21:33',''),(2,'Boneca inflável do Juca','produto-dois.jpg','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non lobortis mi. Maecenas non interdum tortor. Phasellus et augue lacinia, luctus mauris eget, interdum dui. Aliquam erat volutpat','2016-02-22 14:23:45',''),(3,'Óleo anestésico do Juca','produto-tres.jpg','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non lobortis mi. Maecenas non interdum tortor. Phasellus et augue lacinia, luctus mauris eget, interdum dui. Aliquam erat volutpat','2016-02-22 14:24:48','');
/*!40000 ALTER TABLE `produto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `servico`
--

DROP TABLE IF EXISTS `servico`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `servico` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(100) DEFAULT NULL,
  `imagem` varchar(100) DEFAULT NULL,
  `descricao` text,
  `data_cadastro` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `status` bit(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `servico`
--

LOCK TABLES `servico` WRITE;
/*!40000 ALTER TABLE `servico` DISABLE KEYS */;
INSERT INTO `servico` VALUES (1,'Visita a domicílio','servico-um.jpg','Lorem ipsum dolor sit amet, consectetur. adipiscing elit. Curabitur non lobortis mi.adipiscing elit. Curabitur non lobortis mi.adipiscing elit. Curabitur non lobortis mi. Maecenas non interdum tortor. Phasellus et augue lacinia, luctus mauris eget, interdum dui. Aliquam erat volutpat.Lorem ipsum dolor sit amet, consectetur. adipiscing elit. Curabitur non lobortis mi.adipiscing elit. Curabitur non lobortis mi.adipiscing elit. Curabitur non lobortis mi. Maecenas non interdum tortor. Phasellus et augue lacinia, luctus mauris eget, interdum dui. Aliquam erat volutpat','2016-03-03 16:25:45',''),(2,'Messagem do Juca','servico-dois.jpg','Lorem ipsum dolor sit amet, consectetur. adipiscing elit. Curabitur non lobortis mi.adipiscing elit. Curabitur non lobortis mi.adipiscing elit. Curabitur non lobortis mi. Maecenas non interdum tortor. Phasellus et augue lacinia, luctus mauris eget, interdum dui. Aliquam erat volutpat.Lorem ipsum dolor sit amet, consectetur. adipiscing elit. Curabitur non lobortis mi.adipiscing elit. Curabitur non lobortis mi.adipiscing elit. Curabitur non lobortis mi. Maecenas non interdum tortor. Phasellus et augue lacinia, luctus mauris eget, interdum dui. Aliquam erat volutpat','2016-02-22 14:27:10','');
/*!40000 ALTER TABLE `servico` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuario` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) DEFAULT NULL,
  `login` varchar(100) DEFAULT NULL,
  `senha` varchar(100) DEFAULT NULL,
  `token` varchar(1000) DEFAULT NULL,
  `data_cadastro` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `status` bit(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (4,'vanderson','vanderson','123456','eyJraWQiOiJqb3ZlZ2V0bG9nIiwiYWxnIjoiUlMyNTYifQ.eyJpc3MiOiJBUEktUkVTVEZVTCIsImF1ZCI6IlNFWC1TSE9QLUpVQ0EiLCJleHAiOjE0NTkxNDQ2OTQsImp0aSI6InJ3R2l5T0ZuMG1lQUNtUjdtdEcwb1EiLCJpYXQiOjE0NTY1MTY2OTQsIm5iZiI6MTQ1NjUxNjU3NCwic3ViIjoiVXNlciBBdXRoZW50aWNhdGlvbiIsInVzZXIiOlsie1widXNlcm5hbWVcIjpcInZhbmRlcnNvblwiLFwiaWRVc3VhcmlvXCI6MCxcInBhc3N3b3JkXCI6XCIxMjM0NTZcIn0iXX0.fNExWs0AsZWylnvwQi2IJsu4enQuyitABt65Rl_WGS9aBHlG_tEyaA4XZqvhnZ0UQScJgxQ2D0fzsZvKz6pTk4roUe2YSPImCUNwnBOt98VFRVXKYd7BQDnqa3Eh9Gv9PR1W_unl9XEQB0MOWxDI2d0CRe7rLKWhbH29kK6HJwAhEvJqQbIlQh6jeoNU4N09KGCdMUFmZI-ZeMk-xFxCB2vFXA7FCUul13AYCHxeWzOD1gDzlVJFcvJnWFMXQEke5zAGZJ0Cm7cZuwLBw78Vp2xvYxzau5vdhUDtOyAG1FgCixNLZyJ3614E_jRkeBAY0wW9E02fkLvw7mI4mWDupA','2016-02-26 19:58:19','');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-03-04 18:17:14
