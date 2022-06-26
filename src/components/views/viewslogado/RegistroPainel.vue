<template>
  <div class="geral">
    <NavBar/>
    <SideBar/>
    <div>
      <card class="formcard">
        <Form @submit="registrar">
          <h3>Cadastro de Unidade Geradora</h3>
          <br>
          <br>
          <div>
            <label for="">Apelido</label>
            <br>
            <Field name="apelido" v-model="painel.apelido"/>
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
  </div>
</template>

<script>
import { Form, Field } from 'vee-validate';
import NavBar from '/src/components/templates-comuns/NavBar.vue';
import SideBar from '@/components/templates-comuns/SideBar.vue';
export default {
  components: {
    Form,
    Field,
    NavBar,
    SideBar
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
        if(this.$route.params.apelido) {
          for(var i = 0; i < this.paineis; i++) {
            if (this.paineis[i].apelido == this.painel.apelido) {
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
            if(energia.apelido == this.$route.params.apelido) {
              this.painel = energia
            }
          })
        }
      },
    }
</script>

<style>
.geral{
  background-color: #f5f5f5;
  padding-left: 40px
}
h3{
  font-weight: bolder;
  font-family: Verdana, Geneva, Tahoma, sans-serif
}
.card{
  background-color: #F5F5F5;
}
</style>