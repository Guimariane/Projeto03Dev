<template>
    <div>
      <Form @submit="cadastrar">
        <div class="col-4">
          <h6>Unidade Geradora</h6>
            <Field as="select" name="painel" v-model="consumo.painel">
              <option v-for="painel in this.paineis" :key="painel.apelido" value={{painel.apelido}}>{{painel.apelido}}</option>
            </Field>
          <br>
          <br>
          <h5>Mês/ Ano:</h5>
          <Field type="date" name="data"/>
          <br>
          <br>
          <h5>Total kw gerado</h5>
          <Field type="number" name="totalgerado" v-model="consumo.totalgerado"/>
          <br>
          <br>
          <br>
          <button type="submit" class="btn btn-primary">Cadastrar</button>
        </div>
      </Form>
    </div>
</template>

<script>
import { Form, Field } from 'vee-validate'
export default {
  components: {
    Form,
    Field
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
        alert("Consumo adicionado com sucesso");
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