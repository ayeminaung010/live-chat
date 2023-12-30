<template>
    <h2>Sign up </h2>
    <form @submit.prevent="signUpHandler">
        <span class="error">{{ error }}</span>
        <input type="text" placeholder="Display Name" v-model="displayName">
        <input type="email" placeholder="Email" v-model="email">
        <input type="password" placeholder="Password" v-model="password">
        <button >Sign Up</button>
    </form>
</template>

<script>
import { ref } from 'vue';
import {auth} from '../firebase/config'
import { createUserWithEmailAndPassword,updateProfile  } from 'firebase/auth'

export default {
    setup(){
        const displayName = ref("");
        const email = ref("");
        const password = ref("");
        const error = ref(null);

        const signUpHandler = async() => {
            try{
               const res = await createUserWithEmailAndPassword(auth,email.value,password.value);
               if(!res){
                throw new Error("Could not create user");
               }
               await updateProfile(res.user,{displayName:displayName.value})
            }catch(err){
                error.value  = err.message
            }
        }

        return {displayName,email,password,signUpHandler,error};
    }
}
</script>

<style>

</style>