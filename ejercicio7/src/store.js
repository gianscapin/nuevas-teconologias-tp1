import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        colors: [],
        pickedColor: '',
        messageDisplay: '',
        colorSelection: '',
        restartMessage: '',
        restartButtonText: '',
        colorCount: 6,
        isEasySelected: false,
        isHardSelected: true
    },
    actions:{
        setAllColorsTo({commit}, color) {
           commit('cambiarColor', color)
        }
    },
    mutations:{
        cambiarColor(state, color){
            for (let i = 0; i < state.colors.length; i++) {
                state.colors[i] = color;
              }
        }
    }
});
