<template>
    <h2>Sign up </h2>
    <form @submit.prevent="signUpHandler">
        <span class="error" v-if="error">{{ error }}</span>
        <input type="text" placeholder="Display Name" v-model="displayName">
        <input type="email" placeholder="Email" v-model="email">
        <input type="password" placeholder="Password" v-model="password">
        <button >Sign Up</button>
    </form>
</template>

<script>
import { ref } from 'vue';
import useSignUp from '../composables/useSignUp';

export default {
    setup(props,context){
        const displayName = ref("");
        const email = ref("");
        const password = ref("");
        const  {error,createAccount} = useSignUp();
        const signUpHandler = async() => {
            const res = await createAccount(email.value,password.value,displayName.value)
            if(res){
                context.emit("enterChatRoom")
            }
        }
        return {displayName,email,password,signUpHandler,error};
    }
}
</script>

<style>

</style>