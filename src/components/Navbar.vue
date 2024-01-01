<template>
    <nav v-if="user">
        <div class="">
            <p>Hi {{ user.displayName }}</p>
            <p class="email">logged in as {{ user.email }}</p>
        </div>
        <div class="">
            <button @click="logoutHandler">Logout</button>
        </div>
    </nav>
</template>

<script>
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/config';
import getUser from '../composables/getUser'

export default {
    setup(){
        
        const logoutHandler = async() => {
            try{
                await signOut(auth);
                console.log("Log Out Successfully");
            }catch(error){
                console.log(error.message);
            }
        }
        const {user} = getUser();
        return {logoutHandler,user};
    }
}
</script>

<style>
      nav {
        padding: 20px;
        border-bottom: 1px solid #eee;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      nav p {
        margin: 2px auto;
        font-size: 16px;
        color: #444;
      }
      nav p.email {
        font-size: 14px;
        color: #999;
      }
</style>