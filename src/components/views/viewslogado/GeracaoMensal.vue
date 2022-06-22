<template>
    <div>
      <Form @submit="registrar">
        <div>
          <label for="">Unidade Geradora</label>
          <br>
          <Select name="nome" v-model="painel.apelido"></Select>
        </div>
        <br>
        <div>
          <label for="">Mês/ Ano</label>
          <br>
          <Field type="date"/>
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
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>