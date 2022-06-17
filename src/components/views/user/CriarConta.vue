<template>
    <div>
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
                    <Form @submit="registrar" :validation-schema="schema" v-slot="{errors}">
                        <h4>Crie a sua conta</h4>
                        <br>
                        <Field name="email" type="type" placeholder="E-mail"/>
                        <span class="text-danger" v-text="errors.email" v-show="errors.email"></span>
                        <br>
                        <Field name="senha" type="password" placeholder="Senha"/>
                        <span class="text-danger" v-text="errors.senha" v-show="errors.senha"></span>
                        <br>
                        <Field name="confirmesenha" type="password" rules="confirmed:@senha" placeholder="Confirme a Senha"/>
                        <span class="text-danger" v-text="errors.confirmesenha" v-show="errors.confirmesenha"></span>
                        <div class="login">
                            <button type="submit" style="margin-right: 10px">Criar Conta</button>
                        </div>
                        <br>
                        <div class="return">
                            <p>Retorne à pagina principal:
                                <router-link to="/entrar">Login</router-link>
                            </p>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
import { Form, Field, defineRule } from 'vee-validate'
export default {
    components: {
        Form,
        Field
    },
    data () {
        const schema =  {
            email: 'required|email',
            senha: 'required',
            confirmesenha: 'required|confirmed:senha'
        }
          defineRule('required', value => {
            if (!value || !value.length) {
            return 'Campo obrigatório!';
        }
            return true;
    });
        defineRule('email', value => {
            if (!value || !value.length) {
            return true;
        }
            if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value)) {
            return true;
        }
            return 'E-mail precisa ser válido!';
        }); 
        
        defineRule('confirmed', (value, [target]) => {
            if (value === target) {
            return true;
            }
            return 'As senhas devem ser iguais!';
        });

            return{
                schema
            }
        },

    methods: {
        registrar(values) { 
            const users = JSON.parse(localStorage.getItem("usuarios")) || [];
                console.log({users, values})
            for(let i = 0; i < users.length; i++) {
            if(users[i].email == values.email) {
                alert("Email já cadastrado!")
                return      
                }
            }
            const newUsers = [...users, values];
            localStorage.setItem("usuarios", JSON.stringify(newUsers));
            alert("Usuário registrado com sucesso");
            this.$router.replace("/entrar")
        }
    }

}
</script>

<style>

</style>