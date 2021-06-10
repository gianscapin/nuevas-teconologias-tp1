import Vue from 'vue';
import VueRouter from 'vue-router';

import FormularioAv from './components/FormularioAv/index.vue';
import Dates from './components/Dates.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {path:'/', component: Dates},
        {path:'/formulario', component: FormularioAv},
    ]
})