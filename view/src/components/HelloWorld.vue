<template>
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>Ola Mundo</h1>
      <ol class="breadcrumb">
        <li>
          <a href="/"><i class="fa fa-home"></i> Home</a>
        </li>
        <li class="active">Ola Mundo</li>
      </ol>
    </section>

    <!-- Main content -->
    <section class="content container-fluid">
      <div class="box">
        <div class="box-header">
          <h3 class="box-title">Lista</h3>
        </div>
        <!-- /.box-header -->
        <div class="box-body no-padding">
          <table class="table table-striped table-hover">
            <thead>
              <tr>
                <th style="width: 10px">#</th>
                <th>NOME</th>
                <th>EMAIL</th>
                <th>DOCUMENTO</th>
                <th style="min-width: 75px">Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="fornecedor of fornecedores" :key="fornecedor.id">
                <td>1.</td>
                <td>{{ fornecedor.Nome }}</td>
                <td>{{ fornecedor.email }}</td>
                <td>{{ fornecedor.documento }}</td>
                <td>
                  <button
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
        <!-- /.box-body -->
      </div>
    </section>
    <!-- /.content -->
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
      console.log("samuel")
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
