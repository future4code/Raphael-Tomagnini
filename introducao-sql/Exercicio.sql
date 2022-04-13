use `joy-419948-raphael-tomagnini`;

# Exercicio 1

CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

# Varchar : Strings de no máximo Número de caracteres
# DATE : Representa uma data

DESCRIBE Actor;
# Descreve toda a estrutura que a tabela foi criada.

SHOW databases; # Foi apresentada as informações da base de dados
SHOW TABLES # Foi apresentada o nome da tabela



