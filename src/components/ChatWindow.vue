<template>
  <div class="chat-window">
    <div class="messages" >
      <div class="single" v-for="message in formattedMessages" :key="message.id">
        <span class="created-at">{{ message.created_at }}</span>
        <span class="name">{{ message.name }}</span>
        <span class="message">{{ message.message }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "@/firebase/config";
import { formatDistanceToNow } from 'date-fns';
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { computed, ref } from "vue";
export default {
  setup() {
    const messages = ref([]);
    const chatData = collection(db,"message");
    const chatQuery = query(chatData, orderBy("created_at", "asc"));

    const formattedMessages = computed(() => {
      return messages.value.map((msg) => {
        let formatTime = formatDistanceToNow(msg.created_at.toDate());
        return {...msg,created_at: formatTime}
      })
    })
    onSnapshot(chatQuery, (docs) => {
       let temp = [];
       if (docs) {
         docs.forEach((doc) => {
           let document = { id: doc.id, ...doc.data() };
           //firebase  if servertimeStamp not null
           doc.data().created_at && temp.push(document);
         });
       }
       messages.value = temp;
    });

    return {
      messages,formattedMessages
    };
  },
};
</script>

<style>
.chat-window {
  background: #fafafa;
  padding: 30px 20px;
}
.single {
  margin: 18px 0;
}
.created-at {
  display: block;
  color: #999;
  font-size: 12px;
  margin-bottom: 4px;
}
.name {
  font-weight: bold;
  margin-right: 6px;
}
.messages {
  max-height: 400px;
  overflow: auto;
}
</style>