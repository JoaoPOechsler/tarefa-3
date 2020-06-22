<template>
  <div id="app">
    <caixas/>
    <tool @alteraCor="alteraCor($event)" @alterouTexto="alteraTexto($event)"/>
  </div>
</template>

<script>
import Caixas from "./components/Caixas.vue"
import tool from "./components/tool.vue"


export default {
  name: 'App',
  components: {  
    Caixas, tool 
  }, data: function(){
    return{

    }
  }, methods: {
    alteraCor: function(event){
      this.caixinhas[event.caixa].cor = event.cor
    }, alteraTexto: function(event){
       this.caixinhas[event.caixa].titulo = event.titulo
    }
  }
}
</script>

<style>
</style>
