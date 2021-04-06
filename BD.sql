CREATE DATABASE projeto;
USE projeto;

create table pessoa(
	id int primary key auto_increment not null,
	documento varchar(20) unique not null,
    nome varchar(225) not null,
    nomeFantasia varchar(225)
    data_nasc varchar(12) not null,
    email varchar(225) not null,
    tipoPessoa boolean not null, /*--> Fisica ou Juritica <--*/
    tipoCadastro boolean not null /*--> Cliente ou Fornecedor <--*/
);

create table contato(
	id int primary key auto_increment not null,
    telefone varchar(30) not null,
    idPessoa int not null,
    constraint foreign key FK_ID_P_C (idPessoa) references pessoa(id)
);

create table endereco(
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

