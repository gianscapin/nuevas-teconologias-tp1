<template>

  <section class="src-components-navbar">
    <div id="navigator">
      <button id="reset" @click="eventoBotonReset()">{{restartBtn}}</button>
      <span id="message"> {{message}} </span>

      <button id="easy" :class="{selected: isEasySelected}"  @click="eventoBotonEasy()">easy</button>
      <button id="hard" :class="{selected: isHardSelected}" @click="eventoBotonHard()">hard</button>
    </div>
  </section>

</template>

<script lang="js">



  export default  {
    name: 'src-components-navbar',
    props: ['message', 'restartBtn'],
    
    mounted () {

    },
    data () {
      return {
        colorCount: 6,
        isEasySelected: false,
        isHardSelected: true 
      }
    },
    methods: {
      eventoBotonEasy(){
        if(this.isHardSelected){
          this.isHardSelected = false;
          this.isEasySelected = true;
          this.colorCount = 3;
          this.$emit('colorCount', this.colorCount)
          this.$emit('isHardSelected', this.isHardSelected)
          this.$emit('restart', this.colorCount)
        } 
      },  
      eventoBotonHard() {
        if(!this.isHardSelected){
          this.isHardSelected = true;
          this.isEasySelected = false;
          this.colorCount = 6;
          this.$emit('colorCount', this.colorCount)
          this.$emit('isHardSelected', this.isHardSelected)
          this.$emit('restart', this.colorCount)
        }
      },
      eventoBotonReset(){
          this.$emit('restart', this.colorCount)
      }
    },
    computed: {


    }
  }

</script>

<style scoped lang="css">
  .src-components-navbar {

  }

  .selected {
	background-color: steelblue;
	color: white;
  }
  button {
    border: none;
    background-color: white;
    font-family: "Montserrat", "Avenir";
    text-transform: uppercase;
    height: 100%;
    font-weight: 700;
    letter-spacing: 1px;
    color: steelblue;
    transition: all 0.3s;
    outline: none;
  }
  button:hover {
    color: white;
    background-color: steelblue;
  }

  #message {
	display: inline-block;
	width: 20%;
  }

  #navigator {

	background: #ffffff;
	height: 30px;
	text-align: center;
	margin: 0;
	margin-top: -30px;

  }
</style>
