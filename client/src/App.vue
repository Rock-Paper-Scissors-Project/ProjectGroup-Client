<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to='/'>Landing Page</router-link> -->
      <router-link to="/">Landing Page</router-link> |
      <router-link to="/dashboard">Dashboard</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
// import io from '../src/components/socket'
export default {
  name: 'App',
  data () {
    return {
    }
  },
  computed: {
    // isConnected () {
    //   return this.$store.state.isConnected
    // }
  },
  created () {
    this.$toasted.register('my_app_error',
      (payload) => {
        return payload.message
      }, { duration: 1500, theme: 'bubble', type: 'error' }
    )

    this.$toasted.register('my_app_success',
      (payload) => {
        return payload.message
      }, { duration: 1500, theme: 'bubble', type: 'success' }
    )

    this.$toasted.register('my_app_info',
      (payload) => {
        return payload.message
      }, { duration: 1500, theme: 'bubble', type: 'info' }
    )
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  display: flex;
  justify-content: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
