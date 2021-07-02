<template>
  <div id="app">
      <br>
      <Header :color="pickedColor" :colorSelection="colorSelection"/><br>
      <Navbar :message="messageDisplay" @restart="restart($event)" :restartBtn="restartButtonText" @colorCount="colorCount=$event" @isHardSelected="isHardSelected=$event" />
     
      <div id="container">
        <div v-for="(cuadrado, index) in colors" :key="index">
          <Cuadrado :color="colors[index]" @cuadradoSeleccionado="eventoClick($event)"/>      
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
    props: ['isHardSelected', 'colorCount'],
    mounted () {
        this.restart();
        this.pickedColor = '';
    },
    data () {
      return {
        colors: [],
        pickedColor: '',
        messageDisplay: '',
        colorSelection: '',
        restartMessage: '',
        restartButtonText: '',
      }
    },
    methods: {
      eventoClick(squareColor) {
        if(squareColor === this.pickedColor) {
          this.messageDisplay = "You Picked Right";
          this.setAllColorsTo(this.pickedColor);
          this.colorSelection = this.pickedColor;
          this.restartButtonText = 'Play Again!'
        } else {
          this.messageDisplay = "Try Again!";
        }
      },
      PickColor() {
       var quantity;
        if (this.isHardSelected) {
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
          for (let i = 0; i < this.colors.length; i++) {
            this.colors[i] = color;
          }
        },
        restart(){
        this.colors = this.createNewColors(this.colorCount);
        this.pickedColor = this.colors[this.PickColor()];
        this.messageDisplay = "Pick New Colors!";
        this.colorSelection = "steelblue";
        this.restartButtonText = "New Colors!";
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
