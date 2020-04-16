<template>
  <div>
      <h1>Welcome to Rock-Paper-Scissor!</h1>
      <loginForm/>
  </div>
</template>

<script>
import loginForm from '../components/formLogin'

export default {
  name: 'landingPage',
  components: {
    loginForm
  },
  created () {
    if (localStorage.name) {
      this.$router.push('/dashboard')
    }
  }
}
</script>

<style>

</style>
