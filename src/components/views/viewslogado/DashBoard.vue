<template>
  <div class="card-estatisticas">
    <div class="card">
      <h3>Total de Unidades:</h3>
      <h1>{{this.paineis.length}}</h1>
    </div>
    <div class="card">
      <h3>Unidades Ativas</h3>
      <h1>{{this.habilitado.length}}</h1>
    </div>
    <div class="card">
      <h3>Unidades Inativas</h3>
      <h1>{{this.desabilitado.length}}</h1>
    </div>
    <div class="card">
      <h3>Média de Energia</h3>
      <h1>{{this.total}}</h1>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    
    return{
      paineis: [],
      habilitado: [],
      desabilitado: [],
      total: []
    }
  },
  methods: {

  },
  
  mounted() {
    this.paineis = localStorage.getItem("painel") ? JSON.parse(localStorage.getItem("painel")) : [];
    console.log(this.paineis)
    this.habilitado = JSON.parse(localStorage.getItem("painel")).filter(energia => energia.ativo === true)
    this.desabilitado = JSON.parse(localStorage.getItem("painel")).filter(energia => energia.ativo === false)
    this.energias = localStorage.getItem("energia") ? JSON.parse(localStorage.getItem("energia")) : [];
    this.total = this.energias.map(energia => energia.totalgerado).reduce((a, b) => a + b, 0)
},
}
</script>

<style>
body{
  background-color: #f5f5f5
}
h3{
  font-size:medium;
  margin-top: 5px
}
.card-estatisticas{
    display: flex;
    align-items: center;
}
.card{
    background-color: white;
    align-items: center;
    text-align: center;
    width: 220px;
    height: 100px;
    margin: 15px;
    border-radius: 10px;
}
</style>