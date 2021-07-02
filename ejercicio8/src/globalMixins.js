import Vue from 'vue'

var miMixin = {
    computed : {
        mostrarUsuarios() {
            return this.$store.state.usuarios
        },
        getCols(){
            return Object.keys(this.$store.state.usuarios[0])
        }
    }
}

Vue.mixin(miMixin)