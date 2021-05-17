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
    <section class="content container-fluid" style="padding-top: 50px;">
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
                      @click="editarB(fornecedor)"
                      type="button"
                      class="Editar btn btn-xs btn-info btn-update"
                      data-toggle="modal"
                      data-target="#modal-update"
                    >
                      <i class="fa fa-pencil"></i> Editar</button
                    >&nbsp;
                    <button
                      @click="deleteF(fornecedor)"
                      type="button"
                      class="btn btn-xs btn-danger btn-delete"
                    >
                      <i class="fa fa-trash"></i> Excluir
                    </button>
                    <button
                      type="button"
                      class="btn btn-xs btn-danger btn-delete"
                    >
                      <i class="fa fa-trash"></i> mais
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
          <form method="post" @submit.prevent="editar">
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
                <input type="text" readonly="readonly" class="form-control" id="inputDoc" name="doc" v-model="fornecedorE.documento">
              </div>
              <div class="form-group">
                <label for="inputRazaoSocial">Razão Social</label>
                <input type="text" class="form-control" id="inputRs" name="rs" v-model="fornecedorE.nome">
              </div>
              <div class="form-group">
                <label for="inputNomeF">Nome Fantasia</label>
                <textarea class="form-control" id="inputNomeF" name="nf" v-model="fornecedorE.nomeFantasia"></textarea>
              </div>
              <div class="form-group">
                <label for="inputEmail">E-mail</label>
                <input type="email" class="form-control" id="inputEmail" name="email" v-model="fornecedorE.email">
              </div>
              <div class="form-group">
                <label for="inputTp">Tipo de Pessoa</label>
                <input type="number" readonly="readonly" class="form-control" id="inputTp" name="tp" v-model="fornecedorE.tipoPessoa">
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

<div class="modal fade" id="modal-create" >
      <div class="modal-dialog">
        <div class="modal-content" style="border-top: 3px solid #00eb14;">
          <form method="post" @submit.prevent="salvar">
            <input type="hidden" name="id">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <h4 class="modal-title">Novo Fornecedor </h4>
            </div>
            <div class="modal-body">
              <div class="form-group">
                <label for="inputDoc">Documento</label>
                <input type="text" class="form-control" id="inputDoc" name="doc" v-model="fornecedorS.documento">
              </div>
              <div class="form-group">
                <label for="inputRazaoSocial">Razão Social</label>
                <input type="text" class="form-control" id="inputRs" name="rs" v-model="fornecedorS.nome">
              </div>
              <div class="form-group">
                <label for="inputNomeF">Nome Fantasia</label>
                <textarea class="form-control" id="inputNomeF" name="nf" v-model="fornecedorS.nomeFantasia"></textarea>
              </div>
              <div class="form-group">
                <label for="inputNomeF">Data de fundação</label>
                <input type="date" class="form-control" id="inputNomeF" name="nf" v-model="fornecedorS.dataFund">
              </div>
              <div class="form-group">
                <label for="inputEmail">E-mail</label>
                <input type="email" class="form-control" id="inputEmail" name="email" v-model="fornecedorS.email">
              </div>
              <div class="form-group">
                <label for="inputTp">Tipo de Pessoa</label>
                <select v-model="fornecedorS.tipoPessoa" class="form-control" id="inputTp" name="tp">
                  <option disabled value="">Escolha um item</option>
                  <option value="0">PF</option>
                  <option value="1">PJ</option>
                </select>
              </div>
              <hr>
              <div class="form-group">
                <label for="inputTp">Endereco</label>
              </div>
              <div class="form-group">
                <label for="inputTp">Rua</label>
                <input type="text" class="form-control" id="inputTp" name="tp" v-model="fornecedorS.rua">
              </div>
              <div class="form-group">
                <label for="inputTp">Numero</label>
                <input type="text" class="form-control" id="inputTp" name="tp" v-model="fornecedorS.numero">
              </div>
              <div class="form-group">
                <label for="inputTp">Bairro</label>
                <input type="text" class="form-control" id="inputTp" name="tp" v-model="fornecedorS.bairro">
              </div>
              <div class="form-group">
                <label for="inputTp">Complemento</label>
                <input type="text" class="form-control" id="inputTp" name="tp" v-model="fornecedorS.complemento">
              </div>
              <div class="form-group">
                <label for="inputTp">Cidade</label>
                <input type="text" class="form-control" id="inputTp" name="tp" v-model="fornecedorS.cidade">
              </div>
              <div class="form-group">
                <label for="inputTp">Estado</label>
                <input type="text" class="form-control" id="inputTp" name="tp" v-model="fornecedorS.Estado">
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default pull-left" data-dismiss="modal">Cancelar</button>
              <button type="submit" class="btn btn-success">Salvar</button>
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
    fornecedorE:{
      documento: '',
      nome: '',
      nomeFantasia: '',
      email: '',
    },
    fornecedorS:{
      documento: '',
      nome: '',
      nomeFantasia: '',
      dataFund: '',
      email: '',
      tipoPessoa: '',
      rua: '',
      numero: '',
      bairro: '',
      complemento: '',
      cidade: '',
      Estado: '',
    },
    fornecedor:{
      documento: '',
      nome: '',
      nomeFantasia: '',
      email: '',
      tipoPessoa: '',
    },
      fornecedores: [],
    }
    ;
    
  },
  created: function() {
    this.listar()
  },

  methods:{

    listar(){
        Fornecedor.listar().then((res) => {
          this.fornecedores = res.data;
      });
    },

    editarB(fornecedor){
      this.fornecedorE = fornecedor
     },

     editar(){
        Fornecedor.editar(this.fornecedorE, this.fornecedorE.documento).then( res => {
        this.fornecedorE = {}
        alert(res.data.message);
        this.listar()
      })
     },

    salvar(){

      Fornecedor.salvar(this.fornecedorS).then( res => {
        this.fornecedorS = {}
        alert(res.data.message);
        this.listar()
      })      
    },

    deleteF(fornecedor){
        this.fornecedorE = fornecedor
        Fornecedor.delete(this.fornecedorE.documento).then( res => {
        this.fornecedorE = {}
        alert(res.data.message);
        this.listar()
      })
     },

    
  }
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
