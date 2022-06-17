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
                    </Form>
                        <br>
                        <div class="login">
                            <button type="submit" style="margin-right: 10px">Login</button>
                        </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Form, Field } from 'vee-validate'
export default {
    components:{
        Form,
        Field
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