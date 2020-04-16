<template>
  <div>
    <form>
        <p><b>Username:</b></p>
        <input type="text" placeholder="Your user name here" v-model="username">
        <input type="submit" value="Log in" @click.prevent="addmember()">
    </form>
  </div>
</template>

<script>
import io from 'socket.io-client'
export default {
  name: 'loginForm',
  data () {
    return {
      username: ''
    }
  },
  methods: {
    addmember () {
      const user = this.username
      console.log('user dikirim ke server', user)
      var socket = io.connect('http://localhost:3000')
      socket.emit('add user', { user })
      // socket.on('add user', function (user) {
      //   console.log('add member')
      // })
    }
  },
  created () {
    console.log('Created')
    io.connect('http://localhost:3000').on('get user', (data) => {
      console.log('user dari server', data)
    })
  }
}

</script>

<style>

</style>
