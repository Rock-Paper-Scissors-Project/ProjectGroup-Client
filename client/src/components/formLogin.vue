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
      localStorage.clear()
      localStorage.setItem('name', user)
      console.log('user dikirim ke server', user)
      var socket = io.connect('http://localhost:3000')
      socket.emit('add user', { user })
    }
  },
  created () {
    console.log('Created')
    io.connect('http://localhost:3000').on('get user', (data) => {
      this.$store.commit('SET_USER', data)
      console.log('user dari server dan di store ke state', this.$store.state.users)
    })
  }
}

</script>

<style>

</style>
