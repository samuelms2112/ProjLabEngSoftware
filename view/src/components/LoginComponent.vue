<template>
  <div class="login-box">
    <div class="login-logo">
      <a href="#"><b>Admin</b>Hcode</a>
    </div>
    <div class="login-box-body">
      <p class="login-box-msg">Acesso a Área Restrita</p>

      <form method="post" @submit.prevent="authenticate">
        <div class="form-group has-feedback">
          <input type="email" v-model="Login.email" class="form-control" placeholder="Email">
          <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
        </div>
        <div class="form-group has-feedback">
          <input type="password" v-model="Login.pass" class="form-control" placeholder="Senha">
          <span class="glyphicon glyphicon-lock form-control-feedback"></span>
        </div>
        <div class="row">
          <div class="col-xs-4">
            <button @click="authenticate()" class="btn btn-primary btn-block btn-flat">Entrar</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
    import Login from "../services/login";
    import store from '../store';

    export default {
        data() {
            return {
                Login : {
                    email: '',
                    pass: ''
                }
            };
        },

        methods:{
            authenticate(){
                Login.authenticate(this.Login).then((response) => {
                    if(response.status == 200) {
                      store.state.user.authenticated = true
                      localStorage.setItem('token', this.Login.email)
                    }

                    this.$router.push({ name: 'Fornecedor'})
                }).catch(() => {
                  store.state.user.authenticated = false
                    alert("Dados incorretos");
                });
            }
        }
    }
</script>

''