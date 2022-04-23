use `joy-419948-raphael-tomagnini`;

SET SQL_SAFE_UPDATES = 0;

CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);


# Exercicio 1
# a) Deleta a coluna salário da tabela actor
# b) Alterando o gender sex para aceitar 6 strings
# c) Alterando novamente na tabela actor para gender aceitar 255 strings
# d) ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

# Exercicio 2

# a)
UPDATE Actor
SET 
	name = "Johhny Depp",
	birth_date = "1963-06-09"
WHERE id = "003";

# b)
UPDATE Actor
SET name = "JULIANA PAES"
WHERE name = "Juliana Paes";

UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PAES";

# C)
UPDATE Actor
SET 
name = "Angelina Jolie",
birth_date = "1975-06-04",
salary = 900000,
gender = "female"
WHERE id = "005";

# d)
UPDATE Actor
SET 
name = "Michael Jackson",
birth_date = "1958-08-29",
salary = 700000,
gender = "male"
WHERE id = "0000000";
# Não encontrei erro. Tentei inserir um id que não existia, ele passou mas observo que alteração nao foi feita.

# Exercício 3
# a)
DELETE FROM Actor WHERE name = "Fernanda Montenegro";

# b)
DELETE FROM Actor
WHERE
	gender = "male" AND
	salary > 1000000;
    