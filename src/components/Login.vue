<template>
  <h2>Login</h2>
  <form @submit.prevent="loginHandler">
    <span class="error" v-if="error">{{ error }}</span>
    <input type="email" placeholder="Email" v-model="email" />
    <input type="password" placeholder="Password" v-model="password" />
    <button>Login</button>
  </form>
</template>

<script>
import { ref } from "vue";
import useSignIn from "../composables/useSignIn";
export default {
  setup() {
    const email = ref("");
    const password = ref("");

    const { error, SignIn } = useSignIn();
    const loginHandler = async () => {
      const res = await SignIn(email.value, password.value);
    //   if(res) {

    //   }
    };

    return { email, password, loginHandler, error };
  },
};
</script>

<style>
</style>