show databases;
drop database college;
CREATE DATABASE IF NOT EXISTS college;

USE college;

CREATE TABLE teacher(
id INT PRIMARY KEY,
name VARCHAR(20) NOT NULL,
subject VARCHAR(20) NOT NULL,
salary INT NOT NULL
);

INSERT INTO teacher values(23,'ajay','math',50000),
(47,'bharat','english',60000),
(18,'chetan','chemistry',45000),
(9,'divya','physics',75000);

SELECT * FROM teacher;

SELECT * FROM teacher WHERE salary>55000;
ALTER TABLE teacher CHANGE salary ctc INT;
UPDATE teacher SET ctc=ctc+(0.25)*ctc;
ALTER TABLE teacher ADD COLUMN city varchar(20) DEFAULT 'gurgoan';
ALTER TABLE teacher DROP COLUMN ctc;  

CREATE TABLE student(
roll_no INT PRIMARY KEY,
name VARCHAR(20) NOT NULL,
city VARCHAR(20) NOT NULL,
marks INT NOT NULL
);

INSERT INTO student values(110,'adam','delhi',76),
(108,'bob','mumbai',65),
(124,'casey','pune',94),
(112,'duke','pune',80);

SELECT * FROM student;

SELECT * FROM student WHERE marks>75;
SELECT city FROM student ;
SELECT city,max(marks) FROM student GROUP BY city;
SELECT avg(marks) FROM student;
ALTER TABLE student ADD COLUMN grade VARCHAR(20);

SET SQL_SAFE_UPDATES=0;
UPDATE student SET grade='O' WHERE marks>80;
UPDATE student SET grade='A' WHERE marks BETWEEN 70 AND 80;
UPDATE student SET grade='B' WHERE marks BETWEEN 60 AND 70;