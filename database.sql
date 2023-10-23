CREATE DATABASE useres;
USE useres;

CREATE TABLE user (
    id int NOT NULL AUTO_INCREMENT,
    name varchar(20) NOT NULL,
    pass varchar(20) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE msg (
    id int NOT NULL AUTO_INCREMENT,
    zprava varchar(255) NOT NULL,
    img BLOB not null,
    id_user int not null,
    PRIMARY KEY (id),
    FOREIGN KEY (id_user) REFERENCES user(id)
);
