<template>
  <div class="geral">
    <NavBar title="Lançamento de Geração Mensal"/>
    <SideBar/>
      <div>
        <Form @submit="cadastrar">
          <div class="col-4">
            <h5>Unidade Geradora</h5>
              <Select as="select" name="painel" v-model="consumo.painel">
                <option v-for="painel in this.paineis" :key="painel.apelido">{{painel.apelido}}</option>
              </Select>
            <br>
            <br>
            <h5>Mês/ Ano:</h5>
            <!--nesse campo, teve que ser adaptado o formato da data em vez de date para month
            para que o localStorage salvasse no formato que possibilitasse fazer o gráfico. Input
            atualizado no html recomendado o seu uso pela biblioteca moment-->
            <input type="month" name="data" v-model="consumo.data"/>
            <br>
            <br>
            <h5>Total kw gerado</h5>
            <input type="number" name="totalgerado" v-model="consumo.totalgerado"/>
            <br>
            <br>
            <br>
            <button type="submit" class="btn btn-primary">Cadastrar</button>
          </div>
        </Form>
      </div>
  </div>
</template>

<script>
import { Form } from 'vee-validate'
import NavBar from '/src/components/templates-comuns/NavBar.vue';
import SideBar from '/src/components/templates-comuns/SideBar.vue';
export default {
  components: {
    Form,
    NavBar,
    SideBar
  },
  data(){
    
    return{
      painel: {
        apelido: ""
      },
      paineis: [],
      consumo: {
        data: "",
      },
      consumos: [],
    }},

  methods: { 
    cadastrar(){
        const consumos = JSON.parse(localStorage.getItem("energia")) || [];
        const newconsumo = [...consumos, this.consumo];
        localStorage.setItem("energia", JSON.stringify(newconsumo));
        alert("Consumo adicionado com sucesso", newconsumo);
        // this.$router.replace("/dashboard");
  },

    },
  mounted() {
    this.paineis = localStorage.getItem("painel") ? JSON.parse(localStorage.getItem("painel")) : [];
    console.log(this.paineis)
    this.consumos = localStorage.getItem("energia") ? JSON.parse(localStorage.getItem("energia")) : [];
},
}
</script>

<style>
body{
  background-color: #f5f5f5;
}
.geral{
  background-color: #f5f5f5;
  padding-left: 40px
}
Form{
  padding: 40px;
}
</style>