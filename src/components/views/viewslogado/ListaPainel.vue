<template>
  <div>
    <h3>Lista de Unidades</h3>
    <div>
      <table>
        <thead>
          <th>ID</th>
          <th>Apelido</th>
          <th>Local</th>
          <th>Marca</th>
          <th>Modelo</th>
        </thead>
        <tbody v-for="(painel, indice) in this.paineis" :key="indice">
          <td>{{indice + 1}}</td>
          <td>{{painel.apelido}}</td>
          <td>{{painel.local}}</td>
          <td>{{painel.marca}}</td>
          <td>{{painel.modelo}}</td>
          <td>
            <button type="submit" class="btn btn-primary" @click="editar(indice)">Editar</button>
          </td>
          <td>
            <button type="submit" class="delete-btn" @click="excluir(indice)">Excluir</button>
          </td>
        </tbody>
      </table>
    </div>
    <br>
    <div class="md-5">
      <button type="submit" class="btn btn-primary" @click="cadastrar">Nova Unidade</button>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data(){
    return{
      painel: {
      },
      paineis: [],
    }
  },
  methods: {
    editar(indice){
      this.$router.push(`/registropainel/${indice}`);
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
thead{
  background-color: #F5F5F5;
  border-radius: 10px;
}
th{
  padding-left: 5px;
  padding-right: 20px;
}
td{
  padding-left: 5px;
  padding-right: 20px;
}
</style>