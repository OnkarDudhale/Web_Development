CREATE DATABASE college;

USE college;

CREATE TABLE student(
rollNo INT,
name VARCHAR(20),
age INT
);

INSERT INTO student VALUES
(101,'vishal',22),
(102,'onkar',21);

SELECT * FROM student;

SHOW DATABASES;

CREATE TABLE IF NOT EXISTS student;

CREATE DATABASE IF NOT EXISTS college;

USE college;
SHOW TABLES;


