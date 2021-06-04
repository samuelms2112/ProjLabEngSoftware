<template>
  <div id="app">
    <div class="wrapper">

    <!-- Main Header -->
    <header v-if="isSessionLogged" class="main-header">

      <!-- Logo -->
      <a href="index.html" class="logo">
        <!-- mini logo for sidebar mini 50x50 pixels -->
        <span class="logo-mini">HCODE</span>
        <!-- logo for regular state and mobile devices -->
        <span class="logo-lg">HCODE</span>
      </a>

      <!-- Header Navbar -->
      <nav class="navbar navbar-static-top" role="navigation">
        <!-- Sidebar toggle button-->
        <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
          <span class="sr-only">Toggle navigation</span>
        </a>
        <!-- Navbar Right Menu -->
        <div class="navbar-custom-menu">
          <ul class="nav navbar-nav">
            <!-- User Account Menu -->
            <li class="dropdown user user-menu">
              <!-- Menu Toggle Button -->
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                <!-- The user image in the navbar-->
                <img src="dist/img/avatar5.png" class="user-image" alt="User Image">
                <!-- hidden-xs hides the username on small devices so only the image appears. -->
                <span class="hidden-xs">Fulano Junior</span>
              </a>
              <ul class="dropdown-menu">
                <!-- The user image in the menu -->
                <li class="user-header">
                  <img src="dist/img/avatar5.png" class="img-circle" alt="User Image">
                  <p>
                    User
                    <small>user@hcode.com.br</small>
                  </p>
                </li>
                <!-- Menu Footer-->
                <li class="user-footer">
                  <div class="pull-left">
                    <a href="#" class="btn btn-default btn-flat">Perfil</a>
                  </div>
                  <div class="pull-right">
                    <a href="#" class="btn btn-default btn-flat">Sair</a>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    <!-- Left side column. contains the logo and sidebar -->
    <aside v-if="isSessionLogged" class="main-sidebar">

      <!-- sidebar: style can be found in sidebar.less -->
      <section class="sidebar">

        <!-- Sidebar user panel (optional) -->
        <div class="user-panel">
          <div class="pull-left image">
            <img src="dist/img/avatar5.png" class="img-circle" alt="User Image">
          </div>
          <div class="pull-left info">
            <p>User</p>
            <!-- Status -->
            <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
          </div>
        </div>

        <!-- Sidebar Menu -->
        <ul class="sidebar-menu" data-widget="tree">
          <li class="header">MENU</li>
          <!-- Optionally, you can add icons to the links -->
          <li class="active" id="Inicial" v-on:click="click('Inicial')">
            <router-link to="/telainicial">
              <i class="fa fa-home"></i>
              <span>Tela Inicial</span>
            </router-link>
          </li>
          <li id="Fornecedores" v-on:click="click('Fornecedores')">
            <router-link to="/fornecedor">
              <i class="fa fa-cutlery"></i>
              <span>Fornecedores</span>
            </router-link>
          </li>
          <li>
              <router-link to="/cliente">
              <i class="fa fa-calendar-check-o"></i>
              <span>Clientes</span>
            </router-link>
          </li>
          <li>
            <a href="contacts.html">
              <i class="fa fa-comments"></i>
              <span>XXX</span>
            </a>
          </li>
          <li>
            <a href="users.html">
              <i class="fa fa-users"></i>
              <span>XXX</span>
            </a>
          </li>
          <li>
            <a href="emails.html">
              <i class="fa fa-envelope"></i>
              <span>XXX</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-sign-out"></i>
              <span @click="logout()">Logout</span>
            </a>
          </li>
        </ul>
        <!-- /.sidebar-menu -->
      </section>
      <!-- /.sidebar -->
    </aside>

    <!-- Content Wrapper. Contains page content -->
      <router-view></router-view>
    <!-- /.content-wrapper -->

    <!-- Main Footer -->
    <footer v-if="isSessionLogged" class="main-footer">
      <!-- To the right -->
      <div class="pull-right hidden-xs">
        <a target="_blank" href="https://www.hcode.com.br">Hcode</a>
      </div>
      <!-- Default to the left -->
      Projeto
    </footer>

  </div>
  </div>
</template>

<script>
  import store from './store';

  export default {
    name: 'App',
    computed: {
      isSessionLogged: function () {
        return store.state.user.authenticated;
      }
    },
    methods:{
      click(e){
        e.classList.add("active")
      },
      logout() {
        if(confirm("Deseja realmente sair?")) {
          store.state.user.authenticated = false
          this.$router.push({ name: 'Login'})
        } 
      }
    }
  }
</script>

<style>
</style>
