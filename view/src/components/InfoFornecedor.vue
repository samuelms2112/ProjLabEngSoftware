<template>

  <div id="les" class="content-wrapper les">
    
    <section class="content-header">
      <ol class="breadcrumb">
        <li>
          <a href="/index.html"><i class="fa fa-home"></i> Home</a>
        </li>
        <li class="active">Fornecedor</li>
      </ol>
    </section>


<section class="content container-fluid" style="padding-top: 50px;" >
  <div class="box" >
  <div class="box-header">
      <h3 class="box-title">Dados do Fornecedor</h3>
      <div class="box-body no-padding">
  <br>
        <div class="row">
    <div class="group col-md-6">
      <label for="inputDoc">ID</label>
      <input type="text" readonly="readonly" class="form-control" placeholder="id" v-model="FornecedorP[0].id ">
    </div>
    <div class="group col-md-6">
      <label for="inputDoc">Documento</label>
      <input type="text" readonly="readonly" class="form-control" placeholder="Documento" v-model="FornecedorP[0].documento">
    </div>
    <div class="group col-md-6">
      <label for="inputDoc">Nome</label>
      <input type="text" readonly="readonly" class="form-control" placeholder="Nome" v-model="FornecedorP[0].nome">
    </div>
    <div class="group col-md-6">
      <label for="inputDoc">Nome Fantasia</label>
      <input type="text" readonly="readonly" class="form-control" placeholder="Nome" v-model="FornecedorP[0].nomeFantasia">
    </div>
    <div class="group col-md-6">
      <label for="inputDoc">Email</label>
      <input type="text" readonly="readonly" class="form-control" placeholder="Email" v-model="FornecedorP[0].email">
    </div>
    <div class="group col-md-6">
      <label for="inputDoc">Data Nasc</label>
      <input type="text" readonly="readonly" class="form-control" placeholder="nasc" v-model="FornecedorP[0].data_nasc"> 
    </div>
    <div class="group col-md-6">
      <label for="inputDoc">Tipo Pessoa</label>
      <input type="text" readonly="readonly" class="form-control" placeholder="pessoa" v-model="FornecedorP[0].tipoPessoa">
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
                      @click="editarBE(Endereco)"
                      type="button"
                      class="Editar btn btn-xs btn-info btn-update"
                      data-toggle="modal"
                      data-target="#modal-updateE"
                    >
                      <i class="fa fa-pencil"></i> Editar</button
                    >&nbsp;
                    <button
                     @click="deletarBE(Endereco)"
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
                  <td>{{ Fornecedor.nome }}</td>
                  <td>{{ Fornecedor.email }}</td>
                  <td>{{ Fornecedor.documento }}</td>
                  <td>{{ Fornecedor.tipoPessoa }}</td>
                  <td> -->
                    
                  <tr v-for="Fornecedor of Fornecedores" :key="Fornecedor.id">
                  <td>{{ Fornecedor.telefone }}</td>
                  <td style="text-align: center;">
                    <button
                      @click="editarBT(Fornecedor)"
                      type="button"
                      class="Editar btn btn-xs btn-info btn-update"
                      data-toggle="modal"
                      data-target="#modal-updateT"
                    >
                      <i class="fa fa-pencil"></i> Editar</button
                    >&nbsp;
                    <button
                     @click="deletarBT(Fornecedor)"
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
                <input type="text" readonly="readonly" class="form-control" id="inputDoc" name="doc" v-model="FornecedorE.documento">
              </div>
              <div class="form-group">
                <label for="inputRazaoSocial">Razão Social</label>
                <input type="text" class="form-control" id="inputRs" name="rs" v-model="FornecedorE.nome">
              </div>
              <div class="form-group">
                <label for="inputEmail">E-mail</label>
                <input type="email" class="form-control" id="inputEmail" name="email" v-model="FornecedorE.email">
              </div>
              <div class="form-group">
                <label for="inputTp">Tipo de Pessoa</label>
                <input type="number" readonly="readonly" class="form-control" id="inputTp" name="tp" v-model="FornecedorE.tipoPessoa">
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

<div class="modal fade" id="modal-updateE">
      <div class="modal-dialog">
        <div class="modal-content" style="border-top: 3px solid #00c0ef;">
          <form method="post" @submit.prevent="editarE()">
            <input type="hidden" name="id">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <h4 class="modal-title">Editar Endereco </h4>
            </div>
            <div class="modal-body">
              <div class="form-group">
                <label for="inputTp">Rua</label>
                <input type="text" class="form-control" id="inputTp" name="tp" v-model="EnderecoE.rua">
              </div>
              <div class="form-group">
                <label for="inputTp">Numero</label>
                <input type="text" class="form-control" id="inputTp" name="tp" v-model="EnderecoE.numero">
              </div>
              <div class="form-group">
                <label for="inputTp">Bairro</label>
                <input type="text" class="form-control" id="inputTp" name="tp" v-model="EnderecoE.bairro">
              </div>
              <div class="form-group">
                <label for="inputTp">Complemento</label>
                <input type="text" class="form-control" id="inputTp" name="tp" v-model="EnderecoE.complemento">
              </div>
              <div class="form-group">
                <label for="inputTp">Cidade</label>
                <input type="text" class="form-control" id="inputTp" name="tp" v-model="EnderecoE.cidade">
              </div>
              <div class="form-group">
                <label for="inputTp">Estado</label>
                <input type="text" class="form-control" id="inputTp" name="tp" v-model="EnderecoE.estado">
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

<div class="modal fade" id="modal-updateT">
      <div class="modal-dialog">
        <div class="modal-content" style="border-top: 3px solid #00eb14;">
          <form method="post" @submit.prevent="editarT">
            <input type="hidden" name="id">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <h4 class="modal-title">Editar Telefone </h4>
            </div>
            <div class="modal-body">
              <div class="form-group">
                <label for="inputDoc">Telefone</label>
                <input type="text" class="form-control" id="inputTel" name="Telefone" v-model="TelefoneE.telefone">
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
import Telefone from "../services/telefone";
import Endereco from "../services/endereco";

export default {
  data() {
    return {
    idFor: this.$route.params.idFor,
    FornecedorP:[],

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
    Enderecos:[],
    EnderecoE:{
        id: '',
        rua: '',
        numero: '',
        bairro: '',
        complemento: '',
        cidade: '',
        Estado: '',
    },
     TelefoneE:{
        id:'',
        telefone: ''
    },
    };
    
  },
  created: function() {
    this.pesquisa();
    this.listarT();
    this.listarE();
  },

  methods:{

    pesquisa(){
        Fornecedor.pesquisa(this.idFor).then((res) => {
          this.FornecedorP = res.data;
          console.log(this.FornecedorP[0])
      });
    },

    listarT(){
        
        Telefone.listar(this.idFor).then((res) => {       
          this.Fornecedores = res.data;
          console.log(this.Fornecedores)
      });
    },

    listarE(){
        
        Endereco.listar(this.idFor).then((res) => {       
          this.Enderecos = res.data;
          console.log(this.Fornecedores)
      });
    },

    salvarT(){

      Telefone.salvar(this.TelefoneN, this.idFor).then( res => {
        this.TelefoneN = {}
        alert(res.data.message);
        this.listarT()
      })
      
    },

    salvarE(){

      Endereco.salvar(this.EnderecoN, this.idFor).then( res => {
        this.EnderecoN = {}
        alert(res.data.message);
        this.listarE();
      })
      
    },

    editarBE(endereco){
      this.EnderecoE = endereco
     },

     editarE(){
      Endereco.editar(this.EnderecoE, this.idFor, this.EnderecoE.id).then( res => {
        this.EnderecoE = {}
        alert(res.data.message);
        this.listarE();
      })
     },

     editarBT(telefone){
      this.TelefoneE = telefone
     },

     editarT(){
      Telefone.editar(this.TelefoneE, this.idFor, this.TelefoneE.id).then( res => {
        this.TelefoneE = {}
        alert(res.data.message);
        this.listarT();
      })
     },

     deleteE(){
        Endereco.delete(this.idFor, this.EnderecoE.id).then( res => {
        this.EnderecoE = {}
        alert(res.data.message);
        this.listarE()
      }).console.error("oiiii");
     },

     deletarBE(enderecoE){
      this.EnderecoE = enderecoE
      this.deleteE();
     },

     deleteT(){
        Telefone.delete(this.idFor, this.TelefoneE.id).then( res => {
        this.TelefoneE = {}
        alert(res.data.message);
        this.listarT()
      }).console.error("oiiii");
     },

     deletarBT(telefoneE){
      this.TelefoneE = telefoneE
      this.deleteT();
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
