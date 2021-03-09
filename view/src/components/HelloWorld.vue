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
      <tbody>
         <tr v-for="task of lista" :key="task.id">
           <td>{{ task.id }}</td>
           <td>{{ task.tarefa }}</td>
           <td>{{ task.descricao }}</td>
           <td>{{ task.responsavel }}</td> 
         </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Task from '../services/task'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },

  date(){
    return {
      lista: []
    }
  },

  mounted(){
    Task.listar().then(res => {
      console.log(res.data)
      this.lista = res.data
    });
  }
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
