<template>
  <div class="container">
    <Navbar></Navbar>
    <NewChatRoom></NewChatRoom>
  </div>
</template>

<script>
import NewChatRoom from '../components/NewChatRoom'
import { watch } from 'vue'
import Navbar from '../components/Navbar'
import getUser from '@/composables/getUser'
import { useRouter } from 'vue-router';

export default {
  components: {
    NewChatRoom, Navbar },
  setup(){
    const {user} = getUser();
    const router = useRouter();
    watch(user,() => {
      if(!user.value) {
        //redirect welcome 
        router.push("/");
      }
    })
  }
}
</script>

<style>

</style>