CREATE DATABASE IF NOT EXISTS projeto;
USE projeto;

CREATE TABLE pessoa(
	id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
	documento VARCHAR(20) UNIQUE NOT NULL,
   nome VARCHAR(225) NOT NULL,
   nomeFantasia VARCHAR(225),
   data_nasc VARCHAR(12) NOT NULL,
   email VARCHAR(225) NOT NULL,
   tipoPessoa boolean NOT NULL, /*--> Fisica ou Juritica <--*/
   tipoCadastro boolean not null, /*--> Cliente ou Fornecedor <--*/
   status boolean not null
);

CREATE TABLE contato(
	id int primary key auto_increment not null,
   telefone varchar(30) not null,
   idPessoa int not null,
   constraint foreign key FK_ID_P_C (idPessoa) references pessoa(id)
);

CREATE TABLE endereco(
	id int primary key auto_increment not null,
    rua varchar(30) not null,
    numero varchar(30) not null,
    bairro varchar(30) not null,
    complemento varchar(30) not null,
    cidade varchar(30) not null,
    estado varchar(2) not null,
    idPessoa int not null,
    constraint foreign key FK_ID_P_E (idPessoa) references pessoa(id)
);

CREATE TABLE grupo (
    `id` BIGINT(20) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(40) NOT NULL
);

CREATE TABLE subgrupo (
    `id` BIGINT(20) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(40) NOT NULL,
    `isfracioned` BIT COMMENT '0 inteiro \n 1 fracionado'

    /*FK GRUPO*/

);

CREATE TABLE pedido (
    `id` BIGINT(20) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    `fornecedor_id` BIGINT(20) UNSIGNED NOT NULL,
    `datacompra` DATETIME DEFAULT CURRENT_TIMESTAMP,
    `valortotal` DECIMAL(15,2) NOT NULL 
    /*fk fornecedor*/
);

CREATE TABLE labengprod (
    `id` BIGINT(20) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `ean`  VARCHAR(13),
    `grupo_id` BIGINT(20) UNSIGNED,
    `subgrupo_id` BIGINT(20) UNSIGNED,
    `preco` DECIMAL(15,2) NOT NULL,
    `estoque_id` BIGINT(20) UNSIGNED NOT NULL,

    FOREIGN KEY (grupo_id) REFERENCES grupo(id),
    FOREIGN KEY (subgrupo_id) REFERENCES subgrupo(id),
    FULLTEXT (`name`),
    FULLTEXT (`ean`)
);

CREATE TABLE estoque (
    `id` BIGINT(20) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    `prod_id` BIGINT(20) UNSIGNED NOT NULL,
    -- Definir regra se produto e fracionado ou inteiro
    `qtde` DECIMAL(10,2), FOREIGN KEY (prod_id) REFERENCES labengprod(id)
);

-- Relacionamento N pra N fornecedor produto
CREATE TABLE fornecedorprod (
    `id` BIGINT(20) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    `prod_id` BIGINT(20) UNSIGNED NOT NULL,
    `fornecedor_id` BIGINT(20) UNSIGNED NOT NULL,
    `creation_time` DATETIME DEFAULT CURRENT_TIMESTAMP,
    `modification_time` DATETIME ON UPDATE CURRENT_TIMESTAMP
);