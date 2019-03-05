import Vue from "vue";
import Vuex from "vuex";
import home from "./home";
import descounts from "./descounts"
import find from './find'
Vue.use(Vuex);

let state = {};
let actions = {};
let getters = {};
let mutations = {};


const store = new Vuex.Store({
    state,
    actions,
    getters,
    mutations,
    modules:{
        home,
        descounts,
        find
    }
})

export default store;