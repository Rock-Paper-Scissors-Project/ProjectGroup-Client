<template>
  <div>
    <form>
        <h3><b>Username:</b></h3>
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
      const socket = io.connect('http://localhost:3000')
      socket.emit('add user', user)
      console.log(this.$store.state.users.length)
      if (this.$store.state.users.length < 2) {
        this.$router.push('/dashboard')
      } else {
        const socket = io.connect('http://localhost:3000')
        socket.emit('logout', localStorage.name)
        localStorage.clear()
        this.$router.push('/')
        this.$toasted.global.my_app_error({
          message: 'Room Full Please Wait'
        })
      }
    }
  }
}

</script>

<style>

</style>
