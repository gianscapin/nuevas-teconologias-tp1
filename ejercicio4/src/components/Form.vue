<template lang="html">

  <section class="src-components-form">
    <div class="jumbotron">
      <div class="form-group">
        <label for="nombre">Nombre</label>
        <input type="text" name="nombre" id="nombre" class="form-control" placeholder="Indique su nombre" autocomplete="off" :minlength="nombreLengthMin" :maxlength="nombreLengthMax" required>

        <!-- mensajes de validación -->
          <field-messages name="nombre" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>            
            <div slot="no-espacios" class="alert alert-danger mt-1">
              No se permiten espacios intermedios en este campo
            </div>            
            <div slot="minlength" class="alert alert-danger mt-1">
              Este campo requiere como mínimo {{ nombreLengthMin }} caracteres
            </div>            
            <div v-if="formData.nombre.length == nombreLengthMax" class="alert alert-warning mt-1">
              Este campo debe tener como máximo {{ nombreLengthMax }} caracteres
            </div>            
          </field-messages>
        <br/>

        <div class="form-group">
          <label for="edad">Edad</label>
          <input type="number"
            class="form-control" name="edad" id="edad" placeholder="Indique su edad" autocomplete="off" required :min="edadMin" :max="edadMax">
        </div>

        <field-messages name="edad" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>            
            <div slot="min" class="alert alert-danger mt-1">La edad mínima es de {{edadMin}} años</div>            
            <div slot="max" class="alert alert-danger mt-1">La edad máxima permitida es de {{edadMax}} años</div>            
        </field-messages>

        <br/>

        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" class="form-control" name="email" id="email" autocomplete="off" required placeholder="">
        </div>

        <field-messages name="email" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>            
            <div slot="email" class="alert alert-danger mt-1">Email no válido</div>            
        </field-messages>
      </div>
    </div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'form',
    props: [],
    mounted () {

    },
    data () {
      return {
        nombreLengthMax:15,
        nombreLengthMin:5,
        edadMin:18,
        edadMax:120
      }
    },
    methods: {
      getInitialDate(){
        return{
          nombre:'',
          apellido:'',
          edad:'',
          email:''
        }
      },
      enviar(){
        
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .form {

  }
</style>
