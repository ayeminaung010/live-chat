<template>
  <div class="container">
    <Navbar></Navbar>
    <ChatWindow></ChatWindow>
    <NewChatRoom></NewChatRoom>
  </div>
</template>

<script>
import ChatWindow from '../components/ChatWindow'
import NewChatRoom from '../components/NewChatRoom'
import { watch } from 'vue'
import Navbar from '../components/Navbar'
import getUser from '@/composables/getUser'
import { useRouter } from 'vue-router';

export default {
  components: {
    ChatWindow,
    NewChatRoom, Navbar },
  setup(){
    const {user} = getUser();
    const router = useRouter();
    watch(user,() => {
      if(!user.value) {
        router.push("/");
      }
    })
  }
}
</script>

<style>

</style>