<template>

  <div class="content-wrapper les">
    
    <section class="content-header">
      <ol class="breadcrumb">
        <li>
          <a href="/index.html"><i class="fa fa-home"></i> Home</a>
        </li>
        <li class="active">Cliente</li>
      </ol>
    </section>


<section class="content container-fluid" style="padding-top: 50px;" >
  <div class="box" >
  <div class="box-header">
      <h3 class="box-title">Dados do Cliente</h3>
      <div class="box-body no-padding">
  <br>
        <div class="row">
    <div class="group col-md-4">
      <label for="inputDoc">ID</label>
      <input type="text" readonly="readonly" class="form-control" placeholder="id" v-model="clienteP[0].id ">
    </div>
    <div class="group col-md-8">
      <label for="inputDoc">Documento</label>
      <input type="text" readonly="readonly" class="form-control" placeholder="Documento" v-model="clienteP[0].documento">
    </div>
    <div class="group col-md-6">
      <label for="inputDoc">Nome</label>
      <input type="text" readonly="readonly" class="form-control" placeholder="Nome" v-model="clienteP[0].nome">
    </div>
    <div class="group col-md-6">
      <label for="inputDoc">Email</label>
      <input type="text" readonly="readonly" class="form-control" placeholder="Email" v-model="clienteP[0].email">
    </div>
    <div class="group col-md-6">
      <label for="inputDoc">Data Nasc</label>
      <input type="text" readonly="readonly" class="form-control" placeholder="nasc" v-model="clienteP[0].data_nasc"> 
    </div>
    <div class="group col-md-6">
      <label for="inputDoc">Tipo Pessoa</label>
      <input type="text" readonly="readonly" class="form-control" placeholder="pessoa" v-model="clienteP[0].tipoPessoa">
    </div>
  </div>
      </div>
  </div>
  </div>

</section>

    <!-- Main content -->
    <section class="content container-fluid">
      <div class="box">
        <div class="box-header">
          <h3 class="box-title">Endereço</h3>
          <a
            href="#"
            class="btn btn-xs pull-right btn-success"
            data-toggle="modal"
            data-target="#modal-create"
            ><i class="fa fa-plus"></i> Novo</a>
          <div class="box-body no-padding">
            <table class="table table-striped table-hover">
              <thead>
                <tr>
                  <th>Rua</th>
                  <th>Numero</th>
                  <th>Complemento</th>
                  <th>Cidade</th>
                  <th>Estado</th>
                  <th style="min-width: 134px; text-align: center;">Ações</th>
                </tr>
              </thead>
              <tbody>
                <!-- <tr v-for="Cliente of Clientes" :key="Cliente.id">
                  <td>{{ Cliente.nome }}</td>
                  <td>{{ Cliente.email }}</td>
                  <td>{{ Cliente.documento }}</td>
                  <td>{{ Cliente.tipoPessoa }}</td>
                  <td> -->
                    
                  <tr>
                  <td>Rua</td>
                  <td>Numero</td>
                  <td>Complemento</td>
                  <td>Cidade</td>
                  <td>Estado</td>
                  <td style="text-align: center;">
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
                    
                    
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>

     <section class="content container-fluid">
      <div class="box">
        <div class="box-header">
          <h3 class="box-title">Telefone</h3>
          <a
            href="#"
            class="btn btn-xs pull-right btn-success"
            data-toggle="modal"
            data-target="#modal-create"
            ><i class="fa fa-plus"></i> Novo</a>
          <div class="box-body no-padding">
            <table class="table table-striped table-hover">
              <thead>
                <tr>
                  <th >telefone</th>
                  <th style="min-width: 134px; text-align: center;">Ações</th>
                </tr>
              </thead>
              <tbody>
                <!-- <tr v-for="Cliente of Clientes" :key="Cliente.id">
                  <td>{{ Cliente.nome }}</td>
                  <td>{{ Cliente.email }}</td>
                  <td>{{ Cliente.documento }}</td>
                  <td>{{ Cliente.tipoPessoa }}</td>
                  <td> -->
                    
                  <tr>
                  <td>telefone</td>
                  <td style="text-align: center;">
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
                <input type="date" class="form-control" id="inputNomeF" name="nf" v-model="ClienteS.dataFund">
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
    idCli: this.$route.params.idCli,
    ClienteE:{
      documento: '',
      nome: '',
      email: '',
      tipoPessoa: ''
    },
    ClienteS:{
      documento: '',
      nome: '',
      dataFund: '',
      email: '',
      tipoPessoa: ''
    },
    cliente:{
      documento: '',
      nome: '',
      email: '',
      tipoPessoa: '',
    },
      Clientes: [],
    


    clienteP:[],
    };
    
  },
  created: function() {
    this.listar()
    this.pesquisa()
  },

  methods:{

    
    listar(){
        Cliente.listar().then((res) => {
          this.Clientes = res.data;
      });
    },

    pesquisa(){
        Cliente.pesquisa(this.idCli).then((res) => {
          this.clienteP = res.data;
          console.log(this.clienteP[0])
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

     editar(){
        Cliente.editar(this.ClienteE, this.ClienteE.documento).then( res => {
        this.ClienteE = {}
        alert(res.data.message);
        this.listar()
      })
     },

    salvar(){

      Cliente.salvar(this.ClienteS).then( res => {
        this.ClienteS = {}
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

.content{
  min-height: initial;
}

</style>
