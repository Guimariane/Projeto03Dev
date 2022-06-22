<template>
  <div>
    <card class="card">
      <Form @submit="registrar">
        <h3>Cadastro de Unidade Geradora</h3>
        <br>
        <br>
        <div>
          <label for="">Apelido</label>
          <br>
          <Field name="nome" v-model="painel.apelido"/>
        </div>
        <br>
        <div>
          <label for="">Local</label>
          <br>
          <Field name="local" v-model="painel.local"/>
        </div>
        <br>
        <div>
          <label for="">Marca</label>
          <br>
          <Field name="marca" v-model="painel.marca"/>
        </div>
        <br>
        <div>
          <label for="">Modelo</label>
          <br>
          <Field name="modelo" v-model="painel.modelo"/>
        </div>
        <br>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" name="ativo" v-model="painel.ativo">
          <label class="form-check-label" for="exampleCheck1">Ativo</label>
        </div>
        <br>
        <div class="md-5">
        <button type="submit" class="btn btn-primary">Salvar</button>
        </div>
      </Form>
    </card>
  </div>
</template>

<script>
import { Form, Field } from 'vee-validate';
export default {
  components: {
    Form,
    Field
  },
  data() {

    return{
      painel: {
        ativo: false
      },
      paineis: [],
    }
  },
  methods: {
      registrar() { 
        if(this.$route.params.indice) {
          for(var i = 0; i < this.paineis; i++) {
            if (this.paineis[i].indice == this.painel.indice) {
              this.paineis[i] = this.painel
            }
          }
          localStorage.setItem("painel", JSON.stringify(this.paineis));
          alert("Registro alterado com sucesso");
          this.$router.replace("/lista");
        }
        else {
        const paineis = JSON.parse(localStorage.getItem("painel")) || [];
        const newpainel = [...paineis, this.painel];
        localStorage.setItem("painel", JSON.stringify(newpainel));
        alert("Painel registrado com sucesso");
        this.$router.replace("/lista");
      }
      }
    
  },

    mounted() {
        this.paineis = localStorage.getItem("painel") ? JSON.parse(localStorage.getItem("painel")) : [];
        if (this.paineis !== null) {
          this.paineis.forEach(energia => {
            if(energia.indice == this.$route.params.indice) {
              this.painel = energia
            }
          })
        }
      },
    }
</script>

<style>
h3{
  font-weight: bolder;
  font-family: Verdana, Geneva, Tahoma, sans-serif
}
.card{
  background-color: #F5F5F5;
}
</style>