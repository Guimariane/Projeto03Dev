<template>
    <div>
      <Form @submit="cadastrar">
        <div class="col-4">
          <h6>Unidade Geradora</h6>
            <Select as="select" name="painel" v-model="consumo.painel">
              <option v-for="painel in this.paineis" :key="painel.apelido">{{painel.apelido}}</option>
            </Select>
          <br>
          <br>
          <h5>Mês/ Ano:</h5>
          <input type="date" name="data" v-model="consumo.data"/>
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
</template>

<script>
import { Form } from 'vee-validate'
export default {
  components: {
    Form,
  },
  data(){
    return{
      painel: {},
      paineis: [],
      consumo: {},
      consumos: [],
    }},
  methods: { 
    cadastrar(){
        const consumos = JSON.parse(localStorage.getItem("energia")) || [];
        const newconsumo = [...consumos, this.consumo];
        localStorage.setItem("energia", JSON.stringify(newconsumo));
        alert("Consumo adicionado com sucesso", newconsumo);
        // this.$router.replace("/dashboard");
  }},
  mounted() {
    this.paineis = localStorage.getItem("painel") ? JSON.parse(localStorage.getItem("painel")) : [];
    console.log(this.paineis)
    this.consumos = localStorage.getItem("energia") ? JSON.parse(localStorage.getItem("energia")) : [];
},
}
</script>

<style>

</style>