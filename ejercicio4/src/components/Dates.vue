<template lang="html">

  <section class="src-components-dates">
    <h1>Usuarios</h1>

    <button class="btn btn-success" @click="getUsers()">GET API</button>
     <button class="btn btn-warning" @click="getUsersFetch()">GET Fetch</button>
      <button class="btn btn-secondary" @click="getUsersXMLHttpRequest()">GET XMLHttpRequest</button>

    <div class="media alert alert-warning mt-3" v-for="(user,index) in users" :key="index">
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
        url: 'https://609dbecb33eed800179570a4.mockapi.io/clientes',
        users: []
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
      },
      getUsersFetch(){
        fetch(this.url)
        .then(dates => dates.json())
        .then(resp =>{
          this.users = resp;
        })
        .catch(error => console.error(error))
      },
      getUsersXMLHttpRequest(){
        let xhr = new XMLHttpRequest;
        xhr.open('get',this.url)
        xhr.addEventListener('load', ()=>{
          if(xhr.status==200){
            let resp = JSON.parse(xhr.response)
            this.users = resp;
          }else{
            console.error(`Error en GET en status: ${xhr.status}`)
          }
        })
        xhr.addEventListener('error',e =>{
          console.error(`Error XMLHttpRequest: ${e}`)
        })
        xhr.send()
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
</style>
