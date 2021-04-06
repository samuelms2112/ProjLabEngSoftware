<template>
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>Ola Mundo</h1>
      <ol class="breadcrumb">
        <li>
          <a href="/"><i class="fa fa-home"></i> Home</a>
        </li>
        <li class="active">Fornecedores</li>
      </ol>
    </section>

    <!-- Main content -->
    <section class="content container-fluid">
      <div class="box">
        <div class="box-header">
          <h3 class="box-title">Lista</h3>

          <div class="box-body no-padding">
            <table class="table table-striped table-hover">
              <thead>
                <tr>
                  <th>Razão Social</th>
                  <th>Nome Fantasia</th>
                  <th>E-mail</th>
                  <th>Documento</th>
                  <th>Tipo de Pessoa</th>
                  <th style="min-width: 134px;">Ações</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="fornecedor of fornecedores" :key="fornecedor.id">
                  <td>{{ fornecedor.nome }}</td>
                  <td>{{ fornecedor.nomeFantasia }}</td>
                  <td>{{ fornecedor.email }}</td>
                  <td>{{ fornecedor.documento }}</td>
                  <td>{{ fornecedor.tipoPessoa }}</td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-xs btn-info btn-update"
                      data-toggle="modal"
                      data-target="#modal-update"
                    >
                      <i class="fa fa-pencil"></i> Editar</button
                    >&nbsp;<button
                      type="button"
                      class="btn btn-xs btn-danger btn-delete"
                    >
                      <i class="fa fa-trash"></i> Excluir
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Fornecedor from "../services/fornecedor";

export default {
  data() {
    return {
      fornecedores: [],
    };
  },
  mounted() {
    Fornecedor.listar().then((res) => {
      this.fornecedores = res.data;
      console.log("samuel");
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
