CREATE DATABASE IF NOT EXISTS projeto;
USE projeto;

CREATE TABLE pessoa (
   id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
   documento VARCHAR(20) UNIQUE NOT NULL,
   nome VARCHAR(225) NOT NULL,
   nomeFantasia VARCHAR(225),
   data_nasc DATE NOT NULL,
   email VARCHAR(225) NOT NULL,
   tipoPessoa boolean NOT NULL COMMENT 'Fisica ou Juritica',
   tipoCadastro boolean NOT NULL COMMENT 'Cliente ou Fornecedor',
   status boolean NOT NULL DEFAULT 1 COMMENT '1 false \n 0 Pessoa deletada'
);

CREATE TABLE `login` (
   id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
   nome VARCHAR(100) NOT NULL,
   email VARCHAR(225) NOT NULL,
   senha VARCHAR(400) NOT NULL,
   `admin` boolean NOT NULL DEFAULT 0,
   `apagado` boolean NOT NULL DEFAULT 0 COMMENT '0 Login ativado \n 1 Login desativado',
   CONSTRAINT UNIQUE email
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
   `nome` VARCHAR(40) NOT NULL
);

CREATE TABLE subgrupo (
   `id` BIGINT(20) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
   `nome` VARCHAR(40) NOT NULL,
   `fracionado` BOOLEAN COMMENT '0 inteiro \n 1 fracionado'
);

CREATE TABLE pedido (
    `id` BIGINT(20) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    `datacompra` DATETIME DEFAULT CURRENT_TIMESTAMP,
    `valortotal` DECIMAL(15,2) NOT NULL 
    `fornecedor_id` BIGINT(20) UNSIGNED NOT NULL,
    FOREIGN KEY (compra_iten_id) REFERENCES compraitens(id)
);

CREATE TABLE produto001 (
   `id` BIGINT(20) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
   `nome` VARCHAR(100) NOT NULL,
   `ean`  VARCHAR(13),
   `grupo_id` BIGINT(20) UNSIGNED,
   `subgrupo_id` BIGINT(20) UNSIGNED,
   `preco` DECIMAL(15,2) NOT NULL,
   `estoque_id` BIGINT(20) UNSIGNED NOT NULL,
   `apagado` boolean NOT NULL DEFAULT 0 COMMENT '0 false \n 1 Produto deletado',

   FOREIGN KEY (grupo_id) REFERENCES grupo(id),
   FOREIGN KEY (subgrupo_id) REFERENCES subgrupo(id),
   FULLTEXT (`nome`),
   FULLTEXT (`ean`)
);

CREATE TABLE compraitens (
   `id` BIGINT(20) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
   `prod_id` BIGINT(20) UNSIGNED NOT NULL,
   `compra_id` BIGINT(20) UNSIGNED NOT NULL,
   `qtde` DECIMAL(10,2), FOREIGN KEY (prod_id) REFERENCES produto001(id)
);

CREATE TABLE compra (
   `id` BIGINT(20) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
   `fornecedor_id` BIGINT(20) UNSIGNED NOT NULL,
   `datacompra` DATETIME DEFAULT CURRENT_TIMESTAMP,
   `compra_iten_id` BIGINT(20) UNSIGNED NOT NULL,
   `valorpago` DECIMAL(15,2) NOT NULL,
   FOREIGN KEY (compra_iten_id) REFERENCES compraitens(id)
);

CREATE TABLE vendaitens (
   `id` BIGINT(20) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
   `prod_id` BIGINT(20) UNSIGNED NOT NULL,
   `venda_id` BIGINT(20) UNSIGNED NOT NULL,
   `qtde` DECIMAL(10,2),
	FOREIGN KEY (prod_id) REFERENCES produto001(id)
);

CREATE TABLE venda (
   `id` BIGINT(20) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
   `pessoa_id` INT NOT NULL,
   `datacompra` DATETIME DEFAULT CURRENT_TIMESTAMP,
   `venda_iten_id` BIGINT(20) UNSIGNED NOT NULL,
   `valorpago` DECIMAL(15,2) NOT NULL,
   FOREIGN KEY (venda_iten_id) REFERENCES vendaitens(id),
   FOREIGN KEY (pessoa_id) REFERENCES pessoa(id)
);

CREATE TABLE estoque (
   `id` BIGINT(20) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
   `prod_id` BIGINT(20) UNSIGNED NOT NULL,
   -- Definir regra se produto e fracionado ou inteiro
   `qtde` DECIMAL(10,2), FOREIGN KEY (prod_id) REFERENCES produto001(id)
);

-- Relacionamento N pra N fornecedor produto
CREATE TABLE fornecedorprod (
   `id` BIGINT(20) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
   `prod_id` BIGINT(20) UNSIGNED NOT NULL,
   `fornecedor_id` BIGINT(20) UNSIGNED NOT NULL,
   `data_criacao` DATETIME DEFAULT CURRENT_TIMESTAMP,
   `ultima_atualizacao` DATETIME ON UPDATE CURRENT_TIMESTAMP
);