<template>
  <div id="app">
    <CaixaCima @addTarefa="adicionarTarefa($event)"/>
    <List :tarefas="tarefas"/>
  </div>
</template>

<script>
import CaixaCima from "./components/CaixaCima.vue"
import List from "./components/List.vue"

export default {
  name: 'App',
  components: {
    CaixaCima, List
  }, data:function(){
    return{
        tarefas:[
        {descricao:"Matemática"},

        {descricao:"Física"},

        {descricao: "Biologia"},
        
        {descricao: "Educação Fisica"}
      ]
    }
  },
  methods:{
    adicionarTarefa: function(event){
      this.tarefas.push({descricao: event.novaTarefa})
    }
   }
}
</script>

<style>
</style>
