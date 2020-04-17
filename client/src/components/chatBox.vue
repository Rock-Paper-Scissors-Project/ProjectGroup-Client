<template>
  <div>
      <div class="chatBox">
        <h3>Enter chat message</h3>
        <form @submit.prevent="sendMessage">
            <label for="chat-message"></label>
            <textarea v-model="message" id="chat-message" rows="4" cols="45" autofocus>
              Enter your message here...
            </textarea><br>
            <button type="submit" class="submit-button">Submit!</button>
        </form>
      </div>
  </div>
</template>

<script>
import io from 'socket.io-client'

export default {
  name: 'chatBox',
  data () {
    return {
      message: ''
    }
  },
  methods: {
    sendMessage () {
      console.log('chat message submitted')
      const messageData = {
        name: localStorage.name,
        message: this.message
      }
      var socket = io.connect('https://quiet-sierra-10577.herokuapp.com/')
      socket.emit('send-message', messageData)
      this.message = ''
    }
  }
}
</script>

<style>
.chatBox{
  border:1px;
  border-style: solid;
  border-color: #2ecc71;
  background-color:#ecf0f1;
}

.submit-button{
  background-color:#2ecc71;
  color:white;
  border-width: 0px;
  padding: 10px 25px;
  margin: 10px;
  border-radius: 4px;
}

textarea{
  width: 80%;
}
</style>
