<template>

  <section class="src-components-usuarios">
    <div class="jumbotron">
      <h1>Usuarios</h1>
      <hr>

      <button class="btn btn-dark my-3 mr-3" @click="getUsuariosThen()">Usuarios con Then</button>  
      <button class="btn btn-dark my-3 mr-3" @click="getUsuariosAsync()">Usuarios con Async</button>   

   
     <div v-if="mostrarUsuarios.length" class="table">
        <table class="table table-dark">
         <tr>
            <th v-for="(col, index) in getCols" :key="index">{{col}}</th>
          </tr> 
          <tr v-for="(usuario, index) in mostrarUsuarios" :key="index">
            <td v-for="(col, index) in getCols" :key="index">{{usuario[col]}}</td>
          </tr>
        </table>
      </div>
      <h4 v-else class="alert alert-danger"> No hay Usuarios por mostrar </h4> 
    </div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-usuarios',
    props: [],
    mounted () {
    },
    data () {
      return {
       
      }
    },
    methods: {
      getUsuariosThen() {
          this.$store.dispatch('getUsuariosThen')
      },
      async getUsuariosAsync() {
         this.$store.dispatch('getUsuariosAsync')
      }
    },
    computed: {
    
    }
}


</script>

<style scoped lang="css">
  .src-components-usuarios {

  }
  .jumbotron{
    background-color: rgb(126, 199, 17);
    color: black;
  }
  hr{
    background-color: black;
  }
</style>
