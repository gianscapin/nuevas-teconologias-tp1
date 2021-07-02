<template>
  <div id="app">
      <br>
      <Header/>
      <br>
      <Navbar @restart="restart($event)"/>
     
      <div id="container">
        <div v-for="(cuadrado, index) in $store.state.colors" :key="index">
          <Cuadrado :color="$store.state.colors[index]" :win="win" @cuadradoSeleccionado="eventoClick($event)"/>      
        </div>      
      </div>
        
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Navbar from './components/Navbar.vue'
import Cuadrado from './components/Cuadrado.vue'

export default {
  name: 'App',
  components: {
    Header,
    Navbar,
    Cuadrado
  },
    props: [],
    mounted () {
        this.restart();
        this.$store.state.pickedColor = '';
    },
    data () {
      return {
        win: false
      }
    },
    methods: {
      eventoClick(squareColor) {
        if(squareColor === this.$store.state.pickedColor) {
          this.$store.state.messageDisplay = "You Picked Right";
          this.win = true
          this.setAllColorsTo(this.$store.state.pickedColor);
          this.$store.state.colorSelection = this.$store.state.pickedColor;
          this.$store.state.restartButtonText = 'Play Again!'
        } else {
         this.$store.state.messageDisplay = "Try Again!";
        }
      },
      PickColor() {
       var quantity;
        if (this.$store.state.isHardSelected) {
           quantity = 6;
        } else {
            quantity = 3;
        }
        return Math.floor(Math.random() * quantity );
      },
      createRandomStringColor(){
        var newColor = "rgb(" + this.randomInt() + ", " + this.randomInt() + ", " + this.randomInt() + ")" ;
        return newColor;
      },
      randomInt() {
        return Math.floor(Math.random() * 256);
      },
      createNewColors(numbers){
        var arr = [];
        for (var i = 0; i < numbers; i++) {
          arr.push(this.createRandomStringColor());
        }
        return arr;
      },
      setAllColorsTo(color) {
          this.$store.dispatch('setAllColorsTo', color)
      },
      restart(){
        this.win = false;
        this.$store.state.colors = this.createNewColors(this.$store.state.colorCount);
        this.$store.state.pickedColor = this.$store.state.colors[this.PickColor()];
        this.$store.state.messageDisplay = "Pick New Colors!";
        this.$store.state.colorSelection = "steelblue";
        this.$store.state.restartButtonText = "New Colors!";
      }
    },
    computed: {

    }
}
</script>

<style>
#app {
  background: #232323;
	margin: 0;
	font-family: "Montserrat", "Avenir";
}

body {
	background: #232323;
	margin: 0;
	font-family: "Montserrat", "Avenir";
}

#container {
	margin: 20px auto;
	max-width: 600px;
}


</style>
