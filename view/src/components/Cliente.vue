<template>
  <div id="les" :style="tamanho" class="content-wrapper">
    <section class="content-header">
      <ol class="breadcrumb">
        <li>
          <a href="/index.html"><i class="fa fa-home"></i> Home</a>
        </li>
        <li class="active">Cliente</li>
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
                  <th>Nome</th>
                  <th>E-mail</th>
                  <th>Documento</th>
                  <th>Data Nasc</th>
                  <th>Tipo de Pessoa</th>
                  <th style="min-width: 134px;">Ações</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="Cliente of Clientes" :key="Cliente.id">
                  <td>{{ Cliente.nome }}</td>
                  <td>{{ Cliente.email }}</td>
                  <td>{{ Cliente.documento }}</td>
                  <td>{{ Cliente.data_nasc }}</td>
                  <td>{{ Cliente.tipoPessoa }}</td>
                  <td>
                    <button
                      @click="editarB(Cliente)"
                      type="button"
                      class="Editar btn btn-xs btn-info btn-update"
                      data-toggle="modal"
                      data-target="#modal-update"
                    >
                      <i class="fa fa-pencil"></i> Editar</button
                    >&nbsp;
                    <button
                     @click="deletarB(Cliente)"
                      type="button"
                      class="btn btn-xs btn-danger btn-delete"
                    >
                      <i class="fa fa-trash"></i> Excluir
                    </button>
                    &nbsp;
                    <button
                    @click="mais(Cliente)"
                      type="button"
                      class="btn btn-xs btn btn-dark btn-delete"
                    >
                      <i class="fa fa-folder-open"></i> mais
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
                <input type="text" readonly="readonly" class="form-control" id="inputDoc" name="doc" v-model="ClienteE.documento">
              </div>
              <div class="form-group">
                <label for="inputRazaoSocial">Razão Social</label>
                <input type="text" class="form-control" id="inputRs" name="rs" v-model="ClienteE.nome">
              </div>
              <div class="form-group">
                <label for="inputEmail">E-mail</label>
                <input type="email" class="form-control" id="inputEmail" name="email" v-model="ClienteE.email">
              </div>
               <div class="form-group">
                <label for="inputNomeF">Data de fundação</label>
                <input type="date" class="form-control" id="inputNomeF" name="nf" v-model="ClienteE.data_nasc">
              </div>
              <div class="form-group">
                <label for="inputTp">Tipo de Pessoa</label>
                <input type="number" readonly="readonly" class="form-control" id="inputTp" name="tp" v-model="ClienteE.tipoPessoa">
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

<div class="modal fade" id="modal-create">
      <div class="modal-dialog">
        <div class="modal-content" style="border-top: 3px solid #00eb14;">
          <form method="post" @submit.prevent="salvar">
            <input type="hidden" name="id">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <h4 class="modal-title">Novo Cliente </h4>
            </div>
            <div class="modal-body">
              <div class="form-group">
                <label for="inputDoc">Documento</label>
                <input type="text" class="form-control" id="inputDoc" name="doc" v-model="ClienteS.documento">
              </div>
              <div class="form-group">
                <label for="inputRazaoSocial">Razão Social</label>
                <input type="text" class="form-control" id="inputRs" name="rs" v-model="ClienteS.nome">
              </div>
              <div class="form-group">
                <label for="inputNomeF">Data de fundação</label>
                <input type="date" class="form-control" id="inputNomeF" name="nf" v-model="ClienteS.data_nasc">
              </div>
              <div class="form-group">
                <label for="inputEmail">E-mail</label>
                <input type="email" class="form-control" id="inputEmail" name="email" v-model="ClienteS.email">
              </div>
              <div class="form-group">
                <label for="inputTp">Tipo de Pessoa</label>
                <select v-model="ClienteS.tipoPessoa" class="form-control" id="inputTp" name="tp">
                  <option disabled value="">Escolha um item</option>
                  <option value="0">PF</option>
                  <option value="1">PJ</option>
                </select>
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
import Cliente from "../services/cliente";


export default {
  data() {
    return {
      tamanho: '' ,
    ClienteE:{
      documento: '',
      nome: '',
      email: '',
      tipoPessoa: '',
      data_nasc: ''
    },
    ClienteS:{
      documento: '',
      nome: '',
      email: '',
      tipoPessoa: '',
      data_nasc: ''
    },
    cliente:{
      documento: '',
      nome: '',
      email: '',
      tipoPessoa: '',
      data_nasc: ''
    },
      Clientes: [],
    }
    ;
    
  },
  created: function() {
    this.AjustarTamanho()
    this.listar()
  },

  methods:{

    listar(){
        Cliente.listar().then((res) => {
          this.Clientes = res.data;
      });
    },

    deleteF(){
        Cliente.delete(this.ClienteE.documento).then( res => {
        this.ClienteE = {}
        alert(res.data.message);
        this.listar()
      }).console.error("oiiii");
     },

    editarB(Cliente){
      this.ClienteE = Cliente
     },

     deletarB(Cliente){
      this.ClienteE = Cliente
      this.deleteF();
     },

     mais(Cliente){

       this.$router.push("cliente/"+Cliente.documento)
     },

     editar(){
        Cliente.editar(this.ClienteE, this.ClienteE.documento).then( res => {
        this.ClienteE = {}
        alert(res.data.message);
        this.listar()
      })
     },

    salvar(){

      alert(this.ClienteS.data_nasc)
      Cliente.salvar(this.ClienteS).then( res => {
        this.ClienteS = {}
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
