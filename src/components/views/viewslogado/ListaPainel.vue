<template>
  <div class="geral">
    <NavBar title='Unidades'/>
    <SideBar />
    <div class="lista">
      <h3>Lista de Unidades</h3>
      <br>
      <div class="tabela">
        <table>
          <thead>
            <th>ID</th>
            <th>Apelido</th>
            <th>Local</th>
            <th>Marca</th>
            <th>Modelo</th>
          </thead>
          <tbody v-for="(painel, indice) in this.paineis" :key="painel.apelido">
            <td>{{indice + 1}}</td>
            <td>{{painel.apelido}}</td>
            <td>{{painel.local}}</td>
            <td>{{painel.marca}}</td>
            <td>{{painel.modelo}}</td>
            <td>
              <button type="submit" class="btn btn-warning" @click="editar(painel.apelido)">Editar</button>
            </td>
            <td>
              <button type="submit" class="btn btn-danger" @click="excluir(indice)">Excluir</button>
            </td>
          </tbody>
        </table>
      </div>
      <br>
      <div class="md-5">
        <button type="submit" class="btn btn-primary md-5 cadastro" @click="cadastrar">Nova Unidade</button>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '/src/components/templates-comuns/NavBar.vue';
import SideBar from '/src/components/templates-comuns/SideBar.vue';
export default {
  components: {
    NavBar,
    SideBar
  },
  data(){
    return{
      painel: {
      },
      paineis: [],
    }
  },
  methods: {
    editar(apelido){
      this.$router.push(`/registropainel/${apelido}`);
    },

    cadastrar(){
      this.$router.push(`/registropainel`);
    },

    excluir(indice){
      localStorage.getItem('painel');
      this.paineis.splice(indice, 1);
      localStorage.setItem('painel',JSON.stringify(this.paineis));
    }
  },
  mounted() {
    this.paineis = localStorage.getItem("painel") ? JSON.parse(localStorage.getItem("painel")) : [];
    console.log(this.paineis)

},

}
</script>

<style>
.geral{
  background-color: #f5f5f5;
  padding-left: 40px
}
.lista{
  padding: 40px;
}
.tabela{
  padding-right: 40px;
}
thead{
  background-color: #fff;
  border-radius: 20px;
}
th{
  padding-left: 5px;
  padding-right: 20px;
}
td{
  padding-left: 5px;
  padding-right: 20px;
}
button.cadastro{
  margin-left: 15px
}
</style>