<template>
  <div class="content-wrapper">
    <section class="content-header">
      <ol class="breadcrumb">
        <li>
          <a href="/index.html"><i class="fa fa-home"></i> Home</a>
        </li>
        <li class="active">Fornecedores</li>
      </ol>
    </section>

    <!-- Main content -->
    <section class="content container-fluid">
      <div class="box">
        <div class="box-header">
          <h3 class="box-title">Lista</h3>
          <a
            href="#"
            class="btn btn-xs pull-right btn-success"
            data-toggle="modal"
            data-target="#modal-create"
            ><i class="fa fa-plus"></i> Novo</a
          >
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
                      class="Editar btn btn-xs btn-info btn-update"
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

<div class="modal fade" id="modal-update">
      <div class="modal-dialog">
        <div class="modal-content" style="border-top: 3px solid #00c0ef;">
          <form method="post">
            <input type="hidden" name="id">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <h4 class="modal-title">Editar Menu</h4>
            </div>
            <div class="modal-body">
              <div class="form-group">
                <label for="inputDoc">Documento</label>
                <input type="text" readonly="readonly" class="form-control" id="inputDoc" name="doc">
              </div>
              <div class="form-group">
                <label for="inputRazaoSocial">Razão Social</label>
                <input type="text" class="form-control" id="inputRs" name="rs">
              </div>
              <div class="form-group">
                <label for="inputNomeF">Nome Fantasia</label>
                <textarea class="form-control" id="inputNomeF" name="nf"></textarea>
              </div>
              <div class="form-group">
                <label for="inputEmail">E-mail</label>
                <input type="number" class="form-control" id="inputEmail" name="email">
              </div>
              <div class="form-group">
                <label for="inputTp">Tipo de Pessoa</label>
                <input type="number" readonly="readonly" class="form-control" id="inputTp" name="tp">
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default pull-left" data-dismiss="modal">Cancelar</button>
              <button type="submit" class="btn btn-info">Salvar</button>
            </div>
          </form>
        </div>
      </div>
    </div>


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
  created: function() {
    Fornecedor.listar().then((res) => {
      this.fornecedores = res.data;
      console.log(res.data);
    });
  },
};
</script>

<script>
$(function() {
  $(document).on("click", ".Editar", function(e) {
    e.preventDefault;
    var tdobj = $(this)
      .closest("tr")
      .find("td");
    var rs = tdobj[0].innerHTML;
    var nf = tdobj[1].innerHTML;
    var email = tdobj[2].innerHTML;
    var doc = tdobj[3].innerHTML;
    var tp = tdobj[4].innerHTML;

    $("#inputDoc").val(doc);
    $("#inputRs").val(rs);
    $("#inputNomeF").val(nf);
    $("#inputEmail").val(email);
    $("#inputTp").val(tp);
  });
});
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
