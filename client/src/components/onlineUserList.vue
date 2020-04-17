<template>
  <div>
    <div class="onlineUser-box">
        <h3>Online Users</h3>
        <div class="onlineUser-card" >
            <!-- <p>{{listuser}}</p> -->
            <p v-for="(user,idx) in this.$store.state.users" :key="idx">{{user}}</p>
            <!-- <p>One Random Mock User 3</p> -->
        </div>
    </div>
  </div>
</template>

<script>
import io from 'socket.io-client'
export default {
  name: 'onlineUserList',
  data () {
    return {
      listuser: ''
    }
  },
  created () {
    // io.connect(https://quiet-sierra-10577.herokuapp.com/').on('disconnected', (user) => {
    //   console.log('user disconect dari server dan di store ke state', user)
    // })
  },
  mounted () {
    io.connect('https://quiet-sierra-10577.herokuapp.com/').on('get user', (data) => {
      this.$store.commit('SET_USER', data)
      // console.log('user dari server dan di store ke state', this.$store.state.users)
    })
    console.log(this.$store.state.users)
    this.listuser = this.$store.state.users
  }
}
</script>

<style>
.onlineUser-box{
  border:1px;
  border-style: solid;
  border-color: #2ecc71;
  background-color:#ecf0f1;
}
</style>
