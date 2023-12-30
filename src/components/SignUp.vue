<template>
    <h2>Sign up </h2>
    <form @submit.prevent="signUpHandler">
        <input type="text" placeholder="Display Name" v-model="displayName">
        <input type="email" placeholder="Email" v-model="email">
        <input type="password" placeholder="Password" v-model="password">
        <button >Sign Up</button>
    </form>
</template>

<script>
import { ref } from 'vue';
export default {
    setup(){
        const displayName = ref("");
        const email = ref("");
        const password = ref("");
        
        const signUpHandler = () => {
            console.log(displayName.value , email.value , password.value);
        }
        
        return {displayName,email,password,signUpHandler};
    }
}
</script>

<style>

</style>