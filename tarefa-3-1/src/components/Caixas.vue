<template>
  <div id="caixa">
      <div class="caixinhas" v-for="(caixa, index) in caixinhas" :key="index" :style="caixa.cor">
          {{caixa.titulo}}
      </div>
  </div>
</template>

<script>
export default {
    name: "Caixas",
    computed:{
        caixinhas(){
            return this.$store.state.caixinhas
        }
    }
}
</script>

<style>
    #caixa{
        border: 2px solid #FFF;
        border-radius: 10px;
        margin: 30px auto 10px auto;
        display: flex;
        width: 300px;
        height: 120px;
        flex-wrap: wrap;
    }
    .caixinhas{
        border-radius: 10px;
        user-select: none;
        cursor: pointer;
        width: 50px;
        height: 50px;
        border: 2px solid #FFF;
        margin: 5px 0 0 5px;
        text-align: center;
        line-height: 50px;

    }
</style>