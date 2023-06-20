-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: storeproject
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `address`
--

DROP TABLE IF EXISTS `address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `address` (
  `id` int NOT NULL AUTO_INCREMENT,
  `address` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `postcode` varchar(255) DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKda8tuywtf0gb6sedwk7la1pgi` (`user_id`),
  CONSTRAINT `FKda8tuywtf0gb6sedwk7la1pgi` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `address`
--

LOCK TABLES `address` WRITE;
/*!40000 ALTER TABLE `address` DISABLE KEYS */;
INSERT INTO `address` VALUES (19,'bl12','sofiaaasdasdaaaa','1234',2),(20,'bsasdl12','rumqnasdasdadevo','12sdd34',2),(21,'bsasdl12','aaaaaaaarumqnasdasdadevo','12sdd34',2),(24,'suii','pleven','1234',5),(25,'suissi','sofian','1784',5);
/*!40000 ALTER TABLE `address` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart` (
  `id` int NOT NULL AUTO_INCREMENT,
  `price` float NOT NULL,
  `product_description` varchar(255) DEFAULT NULL,
  `product_name` varchar(255) DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKl70asp4l4w0jmbm1tqyofho4o` (`user_id`),
  CONSTRAINT `FKl70asp4l4w0jmbm1tqyofho4o` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
INSERT INTO `cart` VALUES (2,52.99,'Summer shirt','gucci shirt',5);
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `file_data`
--

DROP TABLE IF EXISTS `file_data`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `file_data` (
  `id` int NOT NULL AUTO_INCREMENT,
  `file_path` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `product_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKqyo6fb6rom18lwda7mghqndky` (`product_id`),
  CONSTRAINT `FKqyo6fb6rom18lwda7mghqndky` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `file_data`
--

LOCK TABLES `file_data` WRITE;
/*!40000 ALTER TABLE `file_data` DISABLE KEYS */;
INSERT INTO `file_data` VALUES (1,'C:/Users/Hristian/Desktop/react code/Store Project/01-starting-project/public/images/c58d431f-207b-4e34-a935-5f3beb35f3f9dsadasd (1).jpg','c58d431f-207b-4e34-a935-5f3beb35f3f9dsadasd (1).jpg','image/jpeg',2),(2,'C:/Users/Hristian/Desktop/react code/Store Project/01-starting-project/public/images/6ea53378-0b9f-4be6-b272-4ef02c9e7d06dsadasd (2).jpg','6ea53378-0b9f-4be6-b272-4ef02c9e7d06dsadasd (2).jpg','image/jpeg',2),(3,'C:/Users/Hristian/Desktop/react code/Store Project/01-starting-project/public/images/98838e26-38e9-496f-9b77-55613cc6cc34fasfasfafs.jpg','98838e26-38e9-496f-9b77-55613cc6cc34fasfasfafs.jpg','image/jpeg',3),(4,'C:/Users/Hristian/Desktop/react code/Store Project/01-starting-project/public/images/d01ba4e9-fde7-45c7-b6e0-18dc88bbd757unnamed (2).jpg','d01ba4e9-fde7-45c7-b6e0-18dc88bbd757unnamed (2).jpg','image/jpeg',3),(5,'C:/Users/Hristian/Desktop/react code/Store Project/01-starting-project/public/images/47b7fd3e-b787-4094-9dbb-12d852199ca4asdad.jpg','47b7fd3e-b787-4094-9dbb-12d852199ca4asdad.jpg','image/jpeg',4),(6,'C:/Users/Hristian/Desktop/react code/Store Project/01-starting-project/public/images/daa0c8ce-47bd-4417-9238-f3ef62a60196dasda (1).jpg','daa0c8ce-47bd-4417-9238-f3ef62a60196dasda (1).jpg','image/jpeg',4),(7,'C:/Users/Hristian/Desktop/react code/Store Project/01-starting-project/public/images/847a86fe-3ec4-4ec2-b4ce-a988549b58eesadasd.jpg','847a86fe-3ec4-4ec2-b4ce-a988549b58eesadasd.jpg','image/jpeg',5),(8,'C:/Users/Hristian/Desktop/react code/Store Project/01-starting-project/public/images/e33f5a1a-e1d1-4fb8-beda-10f000c20d1fdasda (2).jpg','e33f5a1a-e1d1-4fb8-beda-10f000c20d1fdasda (2).jpg','image/jpeg',5),(11,'C:/Users/Hristian/Desktop/Full-stack-shop-project/client/public/images/989015af-fcd7-4c09-88f9-69f360b3552eunnamed.jpg','989015af-fcd7-4c09-88f9-69f360b3552eunnamed.jpg','image/jpeg',6),(12,'C:/Users/Hristian/Desktop/Full-stack-shop-project/client/public/images/75b14c2c-c297-4110-8c89-e3961dbd2980unnamed (1).jpg','75b14c2c-c297-4110-8c89-e3961dbd2980unnamed (1).jpg','image/jpeg',6);
/*!40000 ALTER TABLE `file_data` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `brand` varchar(255) DEFAULT NULL,
  `color` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `for_children` bit(1) NOT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `material` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `price` float NOT NULL,
  `type_of_product` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (2,'nike','Black','The Nike Dri-FIT T-Shirt delivers a soft feel, sweat-wicking performance and a great range of motion.',_binary '\0','Male','Cotton','Nike T-shirt',54.99,'T-shirt'),(3,'nike','Blue','Very nice T-shirt',_binary '\0','Male','Cotton','Nike T-shirt',59.99,'T-shirt'),(4,'nike','White','Very nice T-shirt',_binary '\0','Male','Cotton','Nike T-shirt',79.99,'T-shirt'),(5,'nike','Green','Very nice T-shirt',_binary '\0','Male','Cotton','Nike T-shirt',79.99,'T-shirt'),(6,'nike','back','',_binary '\0','male','cotton','Nike T-shirt',79.99,'Trousers');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student`
--

DROP TABLE IF EXISTS `student`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `student` (
  `id` int NOT NULL AUTO_INCREMENT,
  `address` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student`
--

LOCK TABLES `student` WRITE;
/*!40000 ALTER TABLE `student` DISABLE KEYS */;
INSERT INTO `student` VALUES (1,'Sui Street','Ivan'),(2,'Sui Str','sulooooooooooooo'),(3,'Sui Street','sulio'),(4,'Sui Str','sulo');
/*!40000 ALTER TABLE `student` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_ob8kqyqqgmefl0aco34akdtpe` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (2,'ivan@gmail.com','123545678','admin'),(5,'sulio@gmail.com','123545678','admin');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-20  3:06:02
