<template>
    <div>
        <div class="geral">
            <div class="figura">
                <img src="@/assets/energiasolar.jpg">
            </div>
            <div class="laddireito">
                <div class="logo">
                    <img src="@/assets/SolarEnergy.png">
                </div>
                <br>
                <div class="form">
                    <Form>
                        <h4>Seja bem-vindo!</h4>
                        <br>
                        <Field name="email" type="type" placeholder="E-mail"/>
                        <br>
                        <Field name="senha" type="password" placeholder="Senha"/>
                        <br>
                        <div class="login">
                            <button type="submit" style="margin-right: 10px">Login</button>
                        </div>
                        <p>Não está cadastrado?
                            <span>
                                <router-link to="/criar">Crie a sua conta</router-link>
                            </span>
                        </p>
                    </Form>
                </div>
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
.geral{
    display: flex;
    background-color: #FFEFD5;
}
img{
    width: 490px;
    padding: 10px;
}
.laddireito{
    display: flex;
    flex-direction: column;
}
.laddireito{
    background-color: #F5F5F5;
}
.logo{
    display: flex;
    justify-content: center;
}
form{
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
}
</style>