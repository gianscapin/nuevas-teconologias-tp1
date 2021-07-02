<template>
  <section class="src-components-formulario">
    <div class="jumbotron">
      <h2>Formulario</h2>
      <hr>

      <vue-form :state="formState" @submit.prevent="enviar()">
          
          <!-- Campo Nombre -->
          <validate tag="div">
              
              <label for="nombre">Nombre</label>
              <input type="text"
                    id="nombre"
                    name="nombre"
                    class="form-control"
                    autocomplete="off"
                    v-model.trim="formData.nombre"
                    required
                    :minlength="nombreLengthMin"
                    :maxlength="nombreLengthMax"
                    no-espacios
              >
              <field-messages name="nombre" show="$dirty">
                <div slot="no-espacios" class="alert alert-danger mt-1">No se permiten espacios intermedios</div>
                <div slot="required" class="alert alert-danger mt-1">Campo Requerido</div>
                <div slot="minlength" class="alert alert-danger mt-1">Se requiere como minimo {{nombreLengthMin}} caracteres.</div>
                <div v-if="formData.nombre.length == nombreLengthMax" class="alert alert-warning mt-1"> Este campo debe tener como maximo {{nombreLengthMax}} caracteres.</div>
              </field-messages>
          </validate> 
          <br>

          <!-- Campo Edad --> 
          <validate tag="div">
              <label for="edad">Edad</label>
              <input type="number"
                    id="edad"
                    name="edad"
                    class="form-control"
                    autocomplete="off"
                    v-model="formData.edad"
                    :min="edadMin"
                    :max="edadMax"
                    required
              >
              <field-messages name="edad" show="$dirty">
                <div slot="required" class="alert alert-danger mt-1">Campo Requerido</div>
                <div slot="min" class="alert alert-danger mt-2">La edad mínima es de {{edadMin}} años</div>            
                <div slot="max" class="alert alert-danger mt-2">La edad máxima permitida es de {{edadMax}} años</div>      
              </field-messages>
          </validate>  
          <br>
          
          <!-- Campo Email --> 
          <validate tag="div">
            <label for="email">Email</label>
            <input type="email"
                  id="email"
                  name="email"
                  class="form-control"
                  autocomplete="off"
                  v-model.trim="formData.email"
                  required
            >
            <field-messages name="email" show="$dirty">
                <div slot="required" class="alert alert-danger mt-1">Campo Requerido</div>
                <div slot="email" class="alert alert-danger mt-1">Email invalido</div>
            </field-messages>
          </validate>
          <br>
        
          <button class="btn btn-success my-3" :disabled="formState.$invalid" type="submit">Enviar</button>
      </vue-form>

    </div>  

  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-formulario',
    props: [],
    mounted () {
      this.$store.dispatch('getUsuarios')
    },
    data () {
      return {
        formData: this.getInicialData(),
        formState: {},
        nombreLengthMin : 3,
        nombreLengthMax : 15,
        edadMin : 18,
        edadMax : 120
      }
    },
    methods: {
      getInicialData() {
        return {
          nombre: '',
          apellido: '',
          edad: '',
          email: ''
        }
      },
      async enviar(){
        let usuario = {
          nombre: this.formData.nombre,
          edad: this.formData.edad,
          email: this.formData.email
        };
        
        this.$store.dispatch('enviarUsuario', usuario)

        this.formData =this.getInicialData();
        this.formState._reset();
      }
    },
    computed: {

    }
  }  
</script>

<style scoped lang="css">
  .src-components-formulario {

  }

  .jumbotron{
    background: #d2dfed; /* Old browsers */
    background: -moz-linear-gradient(left,  #d2dfed 0%, #c8d7eb 15%, #a6c0e3 34%, #a6c0e3 34%, #bed0ea 48%, #afc7e8 60%, #bad0ef 72%, #99b5db 88%, #799bc8 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(left,  #d2dfed 0%,#c8d7eb 15%,#a6c0e3 34%,#a6c0e3 34%,#bed0ea 48%,#afc7e8 60%,#bad0ef 72%,#99b5db 88%,#799bc8 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to right,  #d2dfed 0%,#c8d7eb 15%,#a6c0e3 34%,#a6c0e3 34%,#bed0ea 48%,#afc7e8 60%,#bad0ef 72%,#99b5db 88%,#799bc8 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#d2dfed', endColorstr='#799bc8',GradientType=1 ); /* IE6-9 */

    color: black;
  }

  hr{
    background-color: black;
  }

</style>


