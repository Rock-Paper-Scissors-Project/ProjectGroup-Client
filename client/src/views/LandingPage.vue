<template>
  <div class="login-box">
      <h1>Welcome to Rock-Paper-Scissor!</h1>
      <h3>Play. Chat. Spare a moment together.</h3>
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

.login-box{
  width:40vw;
  margin: 0px 30vw;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid #fff;
  box-shadow: 0 0 3px 3px #2ecc71;
  border-radius: 4px;
}

</style>
