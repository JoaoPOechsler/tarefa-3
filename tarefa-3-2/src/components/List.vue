<template>
  <div id="List">
      <div class="tarefasBox" v-for="(List, index) in tarefas" :key="index">
        {{List.descricao}}
      </div>
  </div>
</template>

<script>
export default {
    name:"List",
    props:['tarefas']
}
</script>

<style>
    #List{
        background-color: white;
        width: 600px;
        height: 250px;
        margin: 25px 0px 0px 31.3%;
        display: flex;
        flex-wrap: wrap;
        overflow: auto; 
        border: black 2px solid;
        border-radius: 10px;
    }

    .tarefasBox{
        width: (tarefas);
        background-color: blueviolet;
        height: 60px;
        border: 2px solid black;
        margin: 5px 20px 0 10px;
        text-align: center;
        line-height: 39px;
        color: white; 
        overflow: hidden;
        border-radius: 10px;
    }
</style>