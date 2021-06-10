<template lang="html">

  <section class="src-components-dates">
    <h1>Usuarios</h1>

    <button class="btn btn-success" @click="getUsers()">GET API</button>
    <br/>
    <div v-if="this.users.length==0" class="alert alert-danger" role="alert">
      No hay usuarios registrados.
    </div>
      <div v-else class="media alert alert-warning mt-3" v-for="(user,index) in users" :key="index">
        <div class="media-body ml-4">
            <h4>Usuario {{user.id}}</h4>
            <br/>
            <p>Nombre: <b>{{user.nombre}}</b></p>
            <p>Apellido: <b>{{user.apellido}}</b></p>
            <p>Email: <b>{{user.email}}</b></p>
        </div>
      </div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'dates',
    props: [],
    mounted () {

    },
    data () {
      return {
        url: 'https://609dbecb33eed800179570a4.mockapi.io/usuarios',
        users:0
      }
    },
    methods: {
      async getUsers(){
        try {
          let res = await this.axios.get(this.url)
          this.users = res.data;
        } catch (error) {
          console.error(error);
        }
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .dates {

  }
  hr{
    background-color:#123;
  }
  button{
    margin-right: 5px;
  }
  .alert{
    margin-top:10px;
    margin-left:50%;
    right:25%;
    text-align:center;
  }
</style>
