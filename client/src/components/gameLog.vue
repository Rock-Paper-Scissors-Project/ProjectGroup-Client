<template>
  <div class="game-log-box">
    <div class="game-log-box-header">
      <h3>Game Log</h3>
      <button class="submit-button" @click.prevent="logout" style="background-color:#e74c3c; color:white; border-width: 0px; padding: 10px 25px; margin: 10px; border-radius: 4px;">Exit session</button>
    </div>
    <div class="game-log-message-box">
      <p>{{winner}}</p>
      <p>{{msg}}</p>
      <div id="separatorLine"></div>
      <div style="  display:flex; flex-direction: column-reverse;">
        <div class="game-log-chat-messages">
          <div v-for="message in chatMessages" :key="message.name">
            <p><b>{{message.name}}</b></p>
            <p>{{message.message}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import io from 'socket.io-client'

export default {
  name: 'gameLog',
  data () {
    return {
      choose: '',
      winner: '',
      msg: '',
      chatMessages: []
    }
  },
  methods: {
    logout () {
      var socket = io.connect('http://localhost:3000')
      socket.emit('logout', localStorage.name)
      localStorage.clear()
      this.$router.push('/')
    }
  },
  created () {
    io.connect('http://localhost:3000').on('send-message', (data) => {
      console.log('kumpulan chat message diterima')
      this.chatMessages = data
    })
    // io.on('connected', function (username) {
    //   this.msg = 'User ' + username + '  has joined'
    // })
  },
  mounted () {
    io.connect('http://localhost:3000').on('player 1 win', (data) => {
      this.winner = data[0].user + ' ' + data[0].choice + ', ' + data[1].user + ' ' + data[1].choice + ' => ' + data[0].user + ' wins!'
      this.$toasted.global.my_app_success({
        message: data[0].user + ' wins! '
      })
    })
    io.connect('http://localhost:3000').on('player 2 win', (data) => {
      this.winner = data[0].user + ' ' + data[0].choice + ', ' + data[1].user + ' ' + data[1].choice + ' => ' + data[1].user + ' wins!'
      this.$toasted.global.my_app_success({
        message: data[1].user + ' wins! '
      })
    })
    io.connect('http://localhost:3000').on('tie', (data) => {
      this.winner = data[0].user + ' ' + data[0].choice + ', ' + data[1].user + ' ' + data[1].choice + ' => ' + ' Result is tie'
      this.$toasted.global.my_app_info({
        message: ' Result is tie'
      })
    })
  }
}
</script>

<style>

.game-log-message-box{
  height: 80%;
  background-color: width;
  width: 80%;
  margin: 0 20% 0 0;
  text-align: left;
}

.game-log-box{
  height: 100%;
  border:1px;
  border-style: solid;
  border-color: #2ecc71;
  background-color:#ecf0f1;
  padding: 5px 20px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.game-log-box-header{
  display:flex;
  justify-content: space-between;
}

.game-log-chat-messages{
  height: 380px;
  width: 100%;
  text-overflow: ellipsis;
  overflow: scroll;
  overflow-x: hidden;
}

#separatorLine{
  background-color: #2ecc71;
  width: 100%;
  height:2px;
  border-radius: 1px;
}

</style>
