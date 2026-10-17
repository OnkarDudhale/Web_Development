CREATE DATABASE IF NOT EXISTS instagram;

USE instagram;

CREATE TABLE user(
id INT PRIMARY KEY,
name VARCHAR(20),
email VARCHAR(30),
followers INT,
following INT
); 

SELECT * FROM user;

INSERT INTO user
VALUES (101,'onkar','onkar@gmail.com',1000,100),(102,'vishal','vishal@gmail.com',500,10);

SELECT * FROM user;

CREATE DATABASE IF NOT EXISTS class;
USE class;

CREATE TABLE student(
  stud_id INT PRIMARY KEY,
  stud_name VARCHAR(20) NOT NULL,
  teach_id INT ,
  FOREIGN KEY (teach_id) REFERENCES teacher(t_id)
); 

CREATE TABLE teacher(
   t_id INT PRIMARY KEY,
   t_name VARCHAR(20) NOT NULL,
   t_subject VARCHAR(20) NOT NULL
);

INSERT INTO student VALUES
(1,'onkar',101),(2,'vishal',102),(3,'abhi',103);

INSERT INTO teacher VALUES
(101,'unde','cs'),(102,'kawale','ds'),(103,'wamne','fsd');

SELECT * FROM student;
SELECT * FROM teacher;

use instagram;

CREATE TABLE user
(  
   id INT,
   age INT,
   name VARCHAR(20) NOT NULL,
   email VARCHAR(30) UNIQUE,
   followers INT DEFAULT 0,
   following INT,
   CONSTRAINT CHECK (age >= 13),
   PRIMARY KEY (id)
);

INSERT INTO user
(id,age,name,email,followers,following)
values(1,21,'onkar','onkar@gmail.com',1000,12),
(2,22,'vishal','vishal@gmail.com',2000,12),
(3,21,'abhi','abhi@gmail.com',3000,23);

INSERT INTO user
(id,age,name,email,followers,following)
values(4,17,'suraj','srj@gmail.com',500,80),
(5,18,'shreyes','shrey@gmail.com',9000,1200),
(6,19,'vedant','ved@gmail.com',30000,230);


-- WHERE clause
SELECT id,age FROM user WHERE name='abhi';
SELECT name,age,followers FROM user WHERE age>=18 AND followers>=1500;
SELECT name,age,followers FROM user WHERE age=21 OR followers>=1000; 

SELECT id,name,age FROM user WHERE followers BETWEEN 1000 AND 2000;
   
SELECT id,name,age,email FROM user WHERE email IN ('onkar@gmail.com','abhi@gmail.com'); 
SELECT id,name,followers FROM user WHERE name NOT IN ('onkar','abhi');

-- LIMIT
SELECT name FROM user WHERE age>=18 LIMIT 5;
SELECT * FROM user LIMIT 4;

-- ORDER BY
SELECT * FROM user ORDER BY age DESC;

-- Aggregate Functions
SELECT max(followers) FROM user;
SELECT min(followers) FROM user;
SELECT count(followers) FROM user WHERE followers>=2000;
SELECT sum(followers) FROM user;
SELECT avg(followers) FROM user;


-- GROUP BY
-- We can only select column_name which is GROUP BY

SELECT age,count(name)
FROM user GROUP BY age; 

-- HAVING Same as WHERE Clause but it apply on GROUP
SELECT name,max(followers)
FROM user GROUP BY name
HAVING max(followers) >=2000
ORDER BY name ASC;

-- UPDATE
UPDATE user SET followers=10000 WHERE name='shreyes';
SET SQL_SAFE_UPDATES=0;
SELECT * FROM user;

-- DELETE 
DELETE FROM user WHERE followers=10000; 

-- ALTER SCHEMA COLUMN
-- ADD
ALTER TABLE user ADD COLUMN city VARCHAR(20) DEFAULT 'pune' ;
UPDATE user SET city='mumbai' WHERE name='shreyes';

-- DROP
ALTER TABLE user DROP city;

-- RENAME table name
ALTER TABLE user RENAME instaUSER;
SELECT * FROM instaUser;

ALTER TABLE instaUser RENAME user; 

-- RENAME column name
ALTER TABLE user ADD COLUMN city VARCHAR(20) DEFAULT 'pune';
ALTER TABLE user CHANGE COLUMN city address varchar(20);
ALTER TABLE user DROP address;
select * from user;

-- Change datatype constraint
ALTER TABLE user MODIFY city varchar(10) NOT NULL;

-- TRUNCATE (empty table does not delete or remove whole from database like drop)
TRUNCATE table user;




