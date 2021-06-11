<template>
  <div id="les" :style="tamanho" class="content-wrapper">
    <section class="content-header">
      <ol class="breadcrumb">
        <li>
          <router-link to="/home"><i class="fa fa-home"></i> Home</router-link>
        </li>
        <li class="active">Produto</li>
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
                  <th>Código</th>
                  <th>Nome</th>
                  <th>EAN</th>
                  <th>Código do grupo</th>
                  <th>Preço</th>
                  <th style="min-width: 134px;">Produto ações</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="produto of produtos" :key="produto.id">
                  <td>{{ produto.id }}</td>
                  <td>{{ produto.nome }}</td>
                  <td>{{ produto.ean }}</td>
                  <td :id="produto.grupo_id">{{ produto.grupo }}</td>
                  <td>{{ produto.preco }}</td>
                  <td>
                    <button
                      @click="editarB(produto)"
                      type="button"
                      class="Editar btn btn-xs btn-info btn-update"
                      data-toggle="modal"
                      data-target="#modal-update"
                    >
                      <i class="fa fa-pencil"></i> Editar</button
                    >&nbsp;
                    <button
                      @click="deleteF(produto)"
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
                <label for="inputId">id</label>
                <input type="text" readonly="readonly" class="form-control" id="inputId" name="id" v-model="produtoE.id">
              </div>
              <div class="form-group">
                <label for="inputNome">Nome</label>
                <input type="text" class="form-control" id="inputNome" name="nome" v-model="produtoE.nome">
              </div>
              <div class="form-group">
                <label for="inputEan">EAN</label>
                <textarea class="form-control" id="inputEan" name="ean" v-model="produtoE.ean"></textarea>
              </div>
              <div class="form-group">
                <label for="inputGrupoId">Grupo</label>
                <select v-model="produtoE.grupo_id" class="form-control" id="inputGrupoId" name="grupo_id">
                    <option disabled value="">Escolha um item</option>
                    <option v-for="grupo of grupos" :selected="grupo.id == produtoE.grupo_id" :key="grupo.id" :value="grupo.id">{{grupo.nome}}</option>
                </select>
              </div>
              <div class="form-group">
                <label for="inputPreco">Preço</label>
                <input type="flot" class="form-control" id="inputPreco" name="preco" v-model="produtoE.preco">
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" id="FecharModalE" class="btn btn-default pull-left" data-dismiss="modal">Cancelar</button>
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
              <h4 class="modal-title">Novo Produto </h4>
            </div>
            <div class="modal-body">
              <div class="form-group">
                <label for="inputId">id</label>
                <input type="text" readonly="readonly" class="form-control" id="inputId" name="id" v-model="produtoS.id">
              </div>
              <div class="form-group">
                <label for="inputRazaoSocial">Nome</label>
                <input type="text" class="form-control" id="inputRs" name="rs" v-model="produtoS.nome">
              </div>
              <div class="form-group">
                <label for="inputEan">EAN</label>
                <textarea class="form-control" id="inputEan" name="ean" v-model="produtoS.ean"></textarea>
              </div>
              <div class="form-group">
                 <label for="inputGrupoId">Grupo</label>
                <select v-model="produtoS.grupo_id" class="form-control" id="inputGrupoId" name="grupo_id">
                    <option disabled value="">Escolha um item</option>
                    <option v-for="grupo of grupos" :key="grupo.id" :value="grupo.id">{{grupo.nome}}</option>
                </select>
              </div>
              <div class="form-group">
                <label for="inputPreco">Preço</label>
                <input type="preco" class="form-control" id="inputPreco" name="preco" v-model="produtoS.preco">
              </div>
              <hr>
            </div>
            <div class="modal-footer">
              <button type="button" id="FecharModalS" class="btn btn-default pull-left" data-dismiss="modal">Cancelar</button>
              <button type="submit" class="btn btn-success">Salvar</button>
            </div>
          </form>
        </div>
      </div>
</div>


  </div>
</template>



<script>
import Produto from "../services/produto";
import Grupo from "../services/grupo";

export default {
  data() {
    return {
      tamanho: '' ,
    produtoE:{
      id: '',
      nome: '',
      ean: '',
      grupo_id: '',
      grupo: '',
      preco: ''
    },
    produtoS:{
      nome: '',
      ean: '',
      grupo_id: '',
      preco: ''
    },
    produto:{
      id: '',
      nome: '',
      ean: '',
      grupo_id: '',
      preco: ''
    },
      produtos: [],
      grupos: []
    };
    
  },
  created: function() {
    this.AjustarTamanho()
    this.listar()
    this.listarGrupos()
  },

  methods:{

    listar(){
        Produto.listar().then((res) => {
          this.produtos = res.data;
          console.log(this.produtos)
      });
    },
    
    listarGrupos(){
        Grupo.listar().then((res) => {
          this.grupos = res.data;
      });
    },
    
    pesquisarGrupo(idGrupo){
        Grupo.pesquisa(idGrupo).then((res) => {
          this.grupos = res.data;
      });
    },

    editarB(produto){
      this.produtoE = produto
     },

     editar(){
        Produto.editar(this.produtoE, this.produtoE.id).then( res => {
        this.produtoE = {}
        alert(res.data.message);
        this.listar()
        var botoes = document.getElementById("FecharModalE");
        botoes.click();
      })
      

     },

    salvar(){

      Produto.salvar(this.produtoS).then( res => {
        this.produtoS = {}
        alert(res.data.message);
        this.listar()
        var botoes = document.getElementById("FecharModalS");
        botoes.click();
      })      
    },

    deleteF(produto){
        this.produtoE = produto
        Produto.delete(this.produtoE.id).then( res => {
        this.produtoE = {}
        alert(res.data.message);
        this.listar()
      })
     },

     mais(Produto){

       this.$router.push("produto/"+Produto.id)
     },

    AjustarTamanho() {
            var h = window.innerHeight-100; 
            this.tamanho = "min-height:"+ h + "px";
        }

    
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
