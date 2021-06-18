<template>
  <div id="les" :style="tamanho" class="content-wrapper les">
    
    <section class="content-header">
      <ol class="breadcrumb">
        <li>
          <router-link to="/home"><i class="fa fa-home"></i> Home</router-link>
        </li>
         <li>
           Venda
        </li>
      </ol>
    </section>


<section class="content container-fluid" style="padding-top: 50px;" >
  <div class="box" >
  <div class="box-header">
      <h3 class="box-title">Venda</h3>
      <div class="box-body no-padding">
        
  <br>
  <a        
  href="#"
  class="btn btn-xs pull-left btn-success"
  style="margin-right:5px"
  ><i class="fa fa-plus"></i>Nova Venda</a>
  
  <a        
  href="#"
  class="btn btn-xs pull-left btn-danger"
  ><i class="fa fa-plus"></i>Cancelar</a>
      </div>
        <div class="row">
    <div class="group col-md-6">
      <label for="inputDoc">ESN</label>
      <input type="text" @keyup="this.onEsc" class="form-control" placeholder="ESN" >
    </div>
    <div class="group col-md-6">
      <label for="inputDoc">QTD</label>
      <input type="text"   class="form-control" placeholder="QTD" >
    </div>
    <div class="group col-md-6">
      <label for="inputDoc">ID</label>
      <input type="text" readonly="readonly" class="form-control" placeholder="ID" >
    </div>
    <div class="group col-md-6">
      <label for="inputDoc">Produto</label>
      <input type="text" readonly="readonly" class="form-control" placeholder="Produto" >
    </div>
    <div class="group col-md-6">
      <label for="inputDoc">Valor Un</label>
      <input type="text" readonly="readonly"  class="form-control" placeholder="Valor Un" >
    </div>
    <div class="group col-md-6">
      <label for="inputDoc">Valor Total</label>
      <input type="text" readonly="readonly"  class="form-control" placeholder="Valor Total" > 
    </div>
  </div>
  <br>
  <a        
  href="#"
  class="btn btn-xs pull-left btn-primary"
   style="margin-right:5px"
  ><i class="fa fa-plus"></i>ADD</a>
  <a        
  href="#"
  class="btn btn-xs pull-left btn-success"
  ><i class="fa fa-plus"></i>Finalizar</a>
  </div>
  </div>

</section>

     <section class="content container-fluid">
      <div class="box">
        <div class="box-header">
          <h3 class="box-title">Itens</h3>
          <div class="box-body no-padding">
            <table class="table table-striped table-hover">
              <thead>
                <tr>
                  <th >ESN</th>
                  <th >ID</th>
                  <th >Produto</th>
                  <th >Valor Un</th>
                  <th >QTD</th>
                  <th >Valor Total</th>
                  <th style="min-width: 134px; text-align: center;">Ações</th>
                </tr>
              </thead>
              <tbody>
                  <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td style="text-align: center;">
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
        </div>
      </div>
    </section>

  </div>
</template>



<script>
//import Produto from "../services/produto"
export default {
  data() {
    return {
      ProdutoP:{
        esn: ''
      },
      Produto:[],
    };
    
  },
  created: function() {
   this.AjustarTamanho();
   document.removeEventListener('keyup', this.onEsc)
  },

  beforeDestroy(){
    document.removeEventListener('keyup', this.onEsc)
  },

  methods:{

    
     AjustarTamanho() {
            var h = window.innerHeight-100; 
            this.tamanho = "min-height:"+ h + "px";
        },

      onEsc(e) {
      if (!e) e = window.event
      let keyCode = e.keyCode || e.which
      if (keyCode == '27') {
        console.log('Esc foi pressionado')
        console.log(e)
      } else {
        console.log(e);
      }
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

.content{
  min-height: initial;
}

</style>
