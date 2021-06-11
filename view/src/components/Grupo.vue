<template>
  <div id="les" :style="tamanho" class="content-wrapper">
    <section class="content-header">
      <ol class="breadcrumb">
        <li>
          <router-link to="/home"><i class="fa fa-home"></i> Home</router-link>
        </li>
        <li class="active">Grupos</li>
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
                  <th style="min-width: 134px;">Ações</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="grupo of gruposV" :key="grupo.id">
                  <td>{{ grupo.id }}</td>
                  <td>{{ grupo.nome }}</td>
                  <td>
                    <button
                      @click="editarB(grupo)"
                      type="button"
                      class="Editar btn btn-xs btn-info btn-update"
                      data-toggle="modal"
                      data-target="#modal-update"
                    >
                      <i class="fa fa-pencil"></i> Editar</button
                    >
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
                <label for="inputDoc">Código</label>
                <input type="text" readonly="readonly" class="form-control" id="inputDoc" name="doc" v-model="grupoE.id">
              </div>
              <div class="form-group">
                <label for="inputRazaoSocial">Nome</label>
                <input type="text" class="form-control" id="inputRs" name="rs" v-model="grupoE.nome">
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
              <h4 class="modal-title">Novo Grupo </h4>
            </div>
            <div class="modal-body">
              <div class="form-group">
                <label for="inputRazaoSocial">Nome</label>
                <input type="text" class="form-control" id="inputRs" name="rs" v-model="grupoS.nome">
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
import Grupo from "../services/grupo";

export default {
  data() {
    return {
      tamanho: '' ,
    grupoE:{
      id: '',
      nome: ''
    },
    grupoS:{
      nome: ''
    },
    grupo:{
      id: '',
      nome: ''
    },
      gruposV: [],
    }
    ;
    
  },
  created: function() {
    this.AjustarTamanho()
    this.listar()
  },

  methods:{

    listar(){
        Grupo.listar().then((res) => {
          this.gruposV = res.data;
      });
    },

    editarB(grupo){
      this.grupoE = grupo
     },

     editar(){
        Grupo.editar(this.grupoE, this.grupoE.id).then( res => {
        this.grupoE = {}
        alert(res.data.message);
        this.listar()
      })
     },

    salvar(){

      Grupo.salvar(this.grupoS).then( res => {
        this.grupoS = {}
        alert(res.data.message);
        this.listar()
      })      
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
