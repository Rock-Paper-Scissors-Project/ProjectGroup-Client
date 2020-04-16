<template>
  <div class="game-log-box">
    <h3>Game Log</h3>
    <div>
      <p>{{winner}}</p>
      <p>Waiting for player...</p>
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
      winner: ''
    }
  },
  methods: {

  },
  created () {
    io.connect('http://localhost:3000').on('player 1 win', (data) => {
      this.winner = data[0].user + ' ' + data[0].choice + ',' + data[1].user + ', ' + data[1].choice + data[0].user +' wins!'
      console.log('1 WIN')
    })
    io.connect('http://localhost:3000').on('player 2 win', (data) => {
      this.winner = data[0].user + ' ' + data[0].choice + ',' + data[1].user + ' ' + data[1].choice + data[1].user +' wins!'
      console.log('2 WIN')
    })
    io.connect('http://localhost:3000').on('tie', (data) => {
      this.winner = data[0].user + ' ' + data[0].choice + ',' + data[1].user + ' ' + data[1].choice + ' Result is tie'
      console.log('TIEEEE')
    })
  }
}
</script>

<style>
.game-log-box{
  height: 100%;
  border:1px;
  border-style: solid;
  border-color: #2ecc71;
  background-color:#ecf0f1;
}

</style>
