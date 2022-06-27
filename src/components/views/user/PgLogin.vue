<template>
        <div class="gerallogin">
            <div class="figura">
                <img class="figura" src="@/assets/energiasolar.jpg">
            </div>
            <div class="laddireito">
                <div class="logo">
                    <img src="@/assets/SolarEnergy.png">
                </div>
                <br>
                <div class="formlogin">
                    <Form>
                        <h4>Seja bem-vindo!</h4>
                        <br>
                        <Field name="email" type="type" placeholder="E-mail"/>
                        <br>
                        <br>
                        <Field name="senha" type="password" placeholder="Senha"/>
                        <br>
                        <br>
                        <div class="login">
                            <button type="submit" style="margin-right: 10px">Login</button>
                        </div>
                        <br>
                        <br>
                        <p>Não está cadastrado?
                            <span>
                                <router-link to="/criar">Crie a sua conta</router-link>
                            </span>
                        </p>
                    </Form>
                </div>
            </div>
        </div>
</template>

<script>
import { Form, Field, defineRule } from 'vee-validate'
export default {
    components:{
        Form,
        Field
    },

    data(){
        const schema = {
            email: "required",
            senha: "required"
        }
          defineRule('required', value => {
            if (!value || !value.length) {
            return 'Campo obrigatório!';
        }
            return true;
    });
            
            return{
                schema
            }
    },

    methods: {
        logar(values) {
            const users = JSON.parse(localStorage.getItem("usuarios")) || [];
            console.log({users, values})
        for(let i = 0; i < users.length; i++) {
          if(users[i].email === values.email) {
            if(users[i].senha === values.senha) {
              this.$router.replace("/dashboard");
              return
              }  else {
              alert("Usuário ou senha inválida!");
              return }     
            } else {
              alert("Usuário ou senha inválida!");
              return }
        }
        }
        }       
}

</script>

<style>
.gerallogin{
    display: flex;
    background-color: #FFEFD5;
    padding-top: 10px
}
.figura{
    width: 670px;
    height: 640px;
    padding-left: 85px;
    padding-right: 20px;
    background-color: #FFEFD5
}
.laddireito{
    display: flex;
    flex-direction: column;
    background-color: #F5F5F5;
    padding-top: 10px;
    padding-left: 75px;
    padding-right: 70px;
    padding-bottom: 10px;
    margin-left: 20px
}
.logo{
    display: flex;
    justify-content: center;
    padding-top: 25px;
}
.formlogin{
    font-family: 'Times New Roman', Times, serif;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
}
</style>