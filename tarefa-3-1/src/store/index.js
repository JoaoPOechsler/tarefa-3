import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    caixinhas: [{
        titulo: "1",
        cor: "background: red"
      },{
        titulo: "2",
        cor: "background: blue"
      },{
        titulo: "3",
        cor: "background: orange"
      }]
  },
  mutations:{
    alteraCor(state, cor){
        state.caixinhas[cor.caixa].cor = cor.cor
    },
    alterarTexto(state, texto){
        state.caixinhas[texto.caixa].titulo = texto.titulo
    }
  },
  actions: {
  },
  modules: {
  }
})
