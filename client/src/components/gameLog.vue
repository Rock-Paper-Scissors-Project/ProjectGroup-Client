<template>
  <div class="game-log-box">
    <div class="game-log-box-header">
      <h3>Game Log</h3>
      <button class="submit-button" @click.prevent="logout" style="background-color:#e74c3c; color:white; border-width: 0px; padding: 10px 25px; margin: 10px; border-radius: 4px;">Exit session</button>
    </div>
    <div class="game-log-message-box">
      <p>{{winner}}</p>
      <p>{{msg}}</p>
      <p>Player user_2 has joined the game
      <p>Make your choice!</p>
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
      msg: ''
    }
  },
  methods: {
    logout () {
      const socket = io.connect('http://localhost:3000')
      socket.emit('logout', localStorage.name)
      localStorage.clear()
      this.$router.push('/')
    }
  },
  created () {
    // io.on('connected', function (username) {
    //   this.msg = 'User ' + username + '  has joined'
    // })
    io.connect('http://localhost:3000').on('player 1 win', (data) => {
      this.winner = data[0].user + ' ' + data[0].choice + ', ' + data[1].user + ' ' + data[1].choice + ' => ' + data[0].user + ' wins!'
      console.log('1 WIN')
    })
    io.connect('http://localhost:3000').on('player 2 win', (data) => {
      this.winner = data[0].user + ' ' + data[0].choice + ', ' + data[1].user + ' ' + data[1].choice + ' => ' + data[1].user + ' wins!'
      console.log('2 WIN')
    })
    io.connect('http://localhost:3000').on('tie', (data) => {
      console.log('8888888888888')
      console.log(data)
      this.winner = data[0].user + ' ' + data[0].choice + ', ' + data[1].user + ' ' + data[1].choice + ' => ' + ' Result is tie'
    })
  }
}
</script>

<style>

.game-log-message-box{
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
}

.game-log-box-header{
  display:flex;
  justify-content: space-between;
}

</style>
