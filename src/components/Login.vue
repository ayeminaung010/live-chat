<template>
    <h2>Login</h2>
    <form @submit.prevent="loginHandler">
        <input type="email" placeholder="Email" v-model="email">
        <input type="password" placeholder="Password" v-model="password">
        <button >Login</button>
    </form>
</template>

<script>
import { ref } from 'vue';
export default {
    setup(){
        const email = ref("");
        const password = ref("");
        
        const loginHandler = () => {
            console.log(email.value , password.value);
        }
        
        return {email,password,loginHandler};
    }
}
</script>

<style>

</style>