-- creating the database

CREATE DATABASE fedora;

-- using the database
use fedora;

-- creating a table
CREATE TABLE juego (
    juegoId INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
    juegoName VARCHAR(50) NOT NULL,
    juegoDescription VARCHAR(200) NOT NULL,
    juegoPrice FLOAT(10) NOT NULL,
    juegoQuantity INT(2) NOT NULL,
    juegoImageUrl VARCHAR(255) NOT NULL
);


CREATE TABLE user (
    userId INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
    userName VARCHAR(50) NOT NULL,
    userPassword VARCHAR(50) NOT NULL
);

-- show tables
SHOW TABLES;

-- to describe the table
describe juego;
describe user;