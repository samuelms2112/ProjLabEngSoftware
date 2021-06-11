<template>
  <div id="les" :style="tamanho" class="content-wrapper">
    <section class="content-header">
      <ol class="breadcrumb">
         <li class="active">Home</li>
      </ol>
    </section>

    <!-- Main content -->
    <section class="content container-fluid" style="padding-top: 50px;">
              <h1 style="    text-align: center;">Seja Bem vindo</h1>
    </section>

  </div>
</template>



<script>

export default {
  data() {
    return {
     
    };
    
  },
  created: function() {
    this.AjustarTamanho()
  },

  methods:{

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
