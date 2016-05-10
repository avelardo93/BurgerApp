CREATE DATABASE burgers_db;
USE `burgers_db`;


CREATE TABLE `burgers` (
	`id` INT AUTO_INCREMENT NOT NULL,
	`burger_name` VARCHAR(50) NOT NULL,
	`devoured` BOOLEAN,
	`date` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

	PRIMARY KEY ( `id` ) );

SHOW COLUMNS from burgers;