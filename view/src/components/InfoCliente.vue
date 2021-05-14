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
    <div class="group col-md-6">
      <label for="inputDoc">ID</label>
      <input type="text" readonly="readonly" class="form-control" placeholder="id" v-model="clienteP[0].id ">
    </div>
    <div class="group col-md-6">
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
            data-target="#modal-createE"
            ><i class="fa fa-plus"></i> Novo</a>
          <div class="box-body no-padding">
            <table class="table table-striped table-hover">
              <thead>
                <tr>
                  <th>Rua</th>
                  <th>Numero</th>
                  <th>Bairro</th>
                  <th>Complemento</th>
                  <th>Cidade</th>
                  <th>Estado</th>
                  <th style="min-width: 134px; text-align: center;">Ações</th>
                </tr>
              </thead>
              <tbody>
                  <tr v-for="Endereco of Enderecos" :key="Endereco.id">
                  <td>{{ Endereco.rua }}</td>
                  <td>{{ Endereco.numero }}</td>
                  <td>{{ Endereco.bairro }}</td>
                  <td>{{ Endereco.complemento }}</td>
                  <td>{{ Endereco.cidade }}</td>
                  <td>{{ Endereco.estado }}</td>
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
            data-target="#modal-createT"
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
                <!-- <tr v-for="Fornecedor of Fornecedores" :key="Fornecedores.id">
                  <td>{{ Cliente.nome }}</td>
                  <td>{{ Cliente.email }}</td>
                  <td>{{ Cliente.documento }}</td>
                  <td>{{ Cliente.tipoPessoa }}</td>
                  <td> -->
                    
                  <tr v-for="Fornecedor of Fornecedores" :key="Fornecedor.id">
                  <td>{{ Fornecedor.telefone }}</td>
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

<!-- <div class="modal fade" id="modal-update">
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
</div> -->

<div class="modal fade" id="modal-createE">
      <div class="modal-dialog">
        <div class="modal-content" style="border-top: 3px solid #00eb14;">
          <form method="post" @submit.prevent="salvarE">
            <input type="hidden" name="id">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <h4 class="modal-title">Novo Endereco </h4>
            </div>
            <div class="modal-body">
              <div class="form-group">
                <label for="inputTp">Rua</label>
                <input type="text" class="form-control" id="inputTp" name="tp" v-model="EnderecoN.rua">
              </div>
              <div class="form-group">
                <label for="inputTp">Numero</label>
                <input type="text" class="form-control" id="inputTp" name="tp" v-model="EnderecoN.numero">
              </div>
              <div class="form-group">
                <label for="inputTp">Bairro</label>
                <input type="text" class="form-control" id="inputTp" name="tp" v-model="EnderecoN.bairro">
              </div>
              <div class="form-group">
                <label for="inputTp">Complemento</label>
                <input type="text" class="form-control" id="inputTp" name="tp" v-model="EnderecoN.complemento">
              </div>
              <div class="form-group">
                <label for="inputTp">Cidade</label>
                <input type="text" class="form-control" id="inputTp" name="tp" v-model="EnderecoN.cidade">
              </div>
              <div class="form-group">
                <label for="inputTp">Estado</label>
                <input type="text" class="form-control" id="inputTp" name="tp" v-model="EnderecoN.estado">
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

<div class="modal fade" id="modal-createT">
      <div class="modal-dialog">
        <div class="modal-content" style="border-top: 3px solid #00eb14;">
          <form method="post" @submit.prevent="salvarT">
            <input type="hidden" name="id">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <h4 class="modal-title">Novo Telefone </h4>
            </div>
            <div class="modal-body">
              <div class="form-group">
                <label for="inputDoc">Telefone</label>
                <input type="text" class="form-control" id="inputTel" name="Telefone" v-model="TelefoneN.telefone">
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
import Telefone from "../services/telefone";
import Endereco from "../services/endereco";

export default {
  data() {
    return {
    idCli: this.$route.params.idCli,
    clienteP:[],

    TelefoneN:{
        telefone: ''
    },
    EnderecoN:{
        rua: '',
        numero: '',
        bairro: '',
        complemento: '',
        cidade: '',
        Estado: '',
    },
    Fornecedores:[],
    Enderecos:[]
    };
    
  },
  created: function() {
    this.pesquisa();
     this.listarT();
     this.listarE();
  },

  methods:{

    pesquisa(){
        Cliente.pesquisa(this.idCli).then((res) => {
          this.clienteP = res.data;
          console.log(this.clienteP[0])
      });
    },

    listarT(){
        
        Telefone.listar(this.idCli).then((res) => {       
          this.Fornecedores = res.data;
          console.log(this.Fornecedores)
      });
    },

    listarE(){
        
        Endereco.listar(this.idCli).then((res) => {       
          this.Enderecos = res.data;
          console.log(this.Fornecedores)
      });
    },

    salvarT(){

      Telefone.salvar(this.TelefoneN, this.idCli).then( res => {
        this.TelefoneN = {}
        alert(res.data.message);
        this.listarT()
      })
      
    },

    salvarE(){

      Endereco.salvar(this.EnderecoN, this.idCli).then( res => {
        this.EnderecoN = {}
        alert(res.data.message);
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
