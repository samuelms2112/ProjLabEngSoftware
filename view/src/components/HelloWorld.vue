<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Tarefa</th>
          <th>Desk</th>
          <th>Respo</th>
        </tr>
      </thead>
      <tbody id="listaProdutos">
         <tr v-for="item in lista" is="pd" :key="item.tarefa" :tarefa="item.tarefa" :descricao="item.descricao" :responsavel="item.responsavel"></tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Task from '../services/task'
import Vue from 'vue'

Vue.component('pd', {
  props: ['id', 'tarefa', 'descricao', 'responsavel'],
  template: '<tr><td>{{ id }}</td><td>{{ tarefa }}</td><td>{{ descricao }}</td><td>{{ responsavel }}</td></tr>'
});

var app = new Vue({
  el: '#listaProdutos',
  data: {
    lista: []
  }

});
export default {
  
  name: 'HelloWorld',
  props: {
    msg: String
  },

  // date(){
  //   return {
  //     lista: []
  //   }
  // },

  mounted(){
    Task.listar().then(res => {
      console.log(res.data)
      app.lista = res.data
      console.log("Lista -> :" + app.lista);
    });
  },
}
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
