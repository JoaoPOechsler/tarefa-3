<script>
export default {
    name: "tool",
    computed: {
        caixinhas(){
          return this.$store.state.caixinhas  
        } 
    },
    data: function(){
        return{
            cores: ['background: black', 'background: white', 'background: green'],
            caixaSel: '',
            titulo: ''
        }
    }, methods:{
        alteraCor: function(cor){
            this.$store.commit('alteraCor', {
                cor: cor,
                caixa: this.caixaSel
            })
        }, alterarTexto: function(){
            this.$store.commit('alterarTexto',{
                titulo: this.titulo,
                caixa: this.caixaSel
            })
        }
    }
}
</script>

<template>
  <div id="tool">
      <select v-model="caixaSel">
          <option value="" selected disabled>Selecione uma caixa</option>
          <option v-for="(caixa, index) in caixinhas" :key="index" :value="index">
              {{caixa.titulo}}
          </option>
      </select>
        
        <div id="paleta">
            <div class="cor" :style="cor" v-for="(cor, index) in cores" :key="index" @click="alteraCor(cor)"></div>
        </div>
        
        

  </div>
</template>



<style>
    #tool{
        border-radius: 10px;
        width: 380px;
        height: 130px;
        border: 2px solid #fff;
        margin: 5px auto 0 auto;
        padding: 10px;
    }
    #tool select{
        border-radius: 10px;
        width: 220px;
        margin-bottom: 5px;
    }
    #paleta{
        border-radius: 10px;
        width: 379px;
        height: 130px;
        display: flex;
    }
    .cor{
        border-radius: 10px;
        width: 60px;
        height: 60px;
        border: 2px solid #fff ;
        margin-right: 3px;
    }
</style>