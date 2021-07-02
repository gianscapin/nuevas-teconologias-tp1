import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

const URL_USUARIOS = 'https://609dbecb33eed800179570a4.mockapi.io/usuarios';

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        usuarios: []
    },
    actions:{
        getUsuariosThen({commit}) {
            axios(URL_USUARIOS)
            .then( respuesta => {
                commit('getUsuarios', respuesta.data)
            })
            .catch(() => commit('getUsuarios',[]))
        },
        async getUsuariosAsync({commit}){
            try {
                let {data:usuarios} = await axios(URL_USUARIOS)
                commit('getUsuarios',usuarios)
            }
            catch (err){
                commit('getUsuarios',[])
            }
        },
        async enviarUsuario({commit}, usuario){        
            try{
                await axios.post(URL_USUARIOS, usuario);
                commit('addUsuario')
            }catch(err){
                commit('addUsuario')
            }
          }
    },    
    mutations:{
        getUsuarios(state,usuarios) {
            state.usuarios = usuarios
        },
        addUsuario(state){
            state.usuarios = []
        }
    }
})
