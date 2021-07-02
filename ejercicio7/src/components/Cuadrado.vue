<template>

  <section class="src-components-cuadrado">
    <div class="square" :style="{background: color}" @click="cuadradoSeleccionado">
    </div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-cuadrado',
    props: ['color'],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {
       cuadradoSeleccionado(e) {
        this.$emit('cuadradoSeleccionado', this.color);
        let squareColor = e.target.style.backgroundColor;
        if(squareColor !== this.$store.state.pickedColor){
          e.target.style.backgroundColor = '#232323';
        }
      }  
    },
    computed: {
      
          
    }
  }
  


</script>

<style scoped lang="css">
  .src-components-cuadrado {
    margin: 20px auto;
    max-width: 600px;
  }
  .square {
    width: 30%;
    background: blue;
    padding-bottom: 30%;
    float: left;
    margin: 1.66%;
    border-radius: 10%;
    transition: background 0.8s;
    -webkit-transition: background 0.8s;
    -moz-transition: background 0.8s;

}
</style>
