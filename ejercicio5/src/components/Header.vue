<template>

  <section class="src-components-header">
    <div id="header" :style="[colorSelection && {background: colorSelection}]">
      <h1>The Great<br>
        <span id="colorDisplay">{{color}}</span>
        <br>
        Guessing Game</h1>
    </div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-header',
    props: ['colorSelection', 'color'],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {
      
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-header {
   
  }

  #header {
	transition: all 0.3s;
	background: steelblue;
	text-transform: uppercase;
	text-align: center;
	margin: 0;
	color: white;
	}

  #h1 {
  font-weight: normal;
	line-height: 1.1;
	padding: 20px 0;
  }

  #colorDisplay {
    font-size: 200%;
  }

</style>
