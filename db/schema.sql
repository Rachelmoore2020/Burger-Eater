DROP DATABASE IF EXISTS burgers_DB;
CREATE database burgers_DB;

USE burgers_DB;

CREATE TABLE burgers (
  id INT NOT NULL ,
  burger_name VARCHAR(30) NOT NULL,
  devoured boolean,
  PRIMARY KEY (id)
);

