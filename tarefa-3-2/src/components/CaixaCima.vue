<template>
  <div id="caixa">
  <input id="texto" type="text" v-model="novaTarefa">
  <button id="botao" @click="adicionarTarefa">Add</button>
  </div>
</template>

<script>
export default {
    name: "CaixaCima",
    data: function(){
        return{
            novaTarefa: ''
        }
    }, methods:{
        adicionarTarefa: function(){
            this.$emit('addTarefa',{novaTarefa: this.novaTarefa})
        }
    }
}
</script>

<style>
    #caixa{
        background-color: white;
        width: 500px;
        height: 170px;
        margin: 80px 0px 0px 35%;
        border: 2px black solid;
        border-radius: 10px;
    }

    #texto{
        margin: 80px 0 0 27%;
        height: 20px;
        width: 200px;
        border: black 2px solid;
    }

    #botao{
       width: 50px;
       height: 20px;
       color: blueviolet;
       outline: 1px;
       cursor: pointer;
       margin: 0px 5px;
    }
</style>