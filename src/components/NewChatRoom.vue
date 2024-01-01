<template>
    <form class="">
        <textarea 
        placeholder="Enter Message"
        v-model="message"
        @keypress.enter="handleMessage"
        ></textarea>
    </form>
</template>

<script>
import getUser from '@/composables/getUser';
import { serverTimestamp } from 'firebase/firestore';
import { ref } from 'vue'
export default {
    setup(){
        const message = ref("");
        const {user} = getUser();
        const handleMessage = () => {
            let chat = {
                message : message.value,
                name : user.value.displayName,
                created_at: serverTimestamp()
            }
            message.value = "";
        }
        return {message,handleMessage};
    }
}
</script>

<style>
    form {
        margin: 10px;
      }
      textarea {
        width: 100%;
        max-width: 100%;
        margin-bottom: 6px;
        padding: 10px;
        box-sizing: border-box;
        border: 0;
        border-radius: 20px;
        font-family: inherit;
        outline: none;
      }
</style>