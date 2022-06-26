<template>
<div class="geral">
    <NavBar/>
    <SideBar/>
    <div class="card-estatisticas">
      <div class="card-dashboard">
        <h3>Total de Unidades</h3>
        <h1>{{this.paineis.length}}</h1>
      </div>
      <div class="card-dashboard">
        <h3>Unidades Ativas</h3>
        <h1>{{this.habilitado.length}}</h1>
      </div>
      <div class="card-dashboard">
        <h3>Unidades Inativas</h3>
        <h1>{{this.desabilitado.length}}</h1>
      </div>
      <div class="card-dashboard">
        <h3>Média de Energia</h3>
        <h1>{{this.media}}</h1>
      </div>
    </div>
    <div class="grafico">
      <canvas id="myChart"></canvas>
    </div>
  </div>
</template>

<script>
import NavBar from '/src/components/templates-comuns/NavBar.vue';
import SideBar from '/src/components/templates-comuns/SideBar.vue';
import Chart from 'chart.js/auto';
export default {
  components: {
    NavBar,
    SideBar
  },
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
    this.media = this.total / (this.paineis.length)
    // inputs para o gráfico
    const eixoy = this.energias.totalgerado
    const ctx = document.getElementById('myChart');
    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
      labels: "total",
      datasets: [{
        data: eixoy,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
    }]},
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }})
  myChart
  },
}

</script>

<style>
.geral{
  background-color: #f5f5f5;
  padding-left: 40px
}
h3{
  font-size:medium;
  margin-top: 5px
}
.card-estatisticas{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
}
.card-dashboard{
    background-color: #fff;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    align-items: center;
    text-align: center;
    width: 220px;
    height: 100px;
    margin: 15px;
    border-radius: 10px;
}
.grafico{
  padding-left: 5px
}
</style>