<template>
  <div>
    <h1>Let's get it on!</h1>
    <audio v-if="musicPlay" autoplay control loop >
          <source src="../assets/background-sound.mp3" type="audio/ogg">
    </audio>
    <div class="main-board">
        <div class="main-board-sidebar">
          <onlineUserList/>
          <rockPaperScissorForm/>
          <chatBox/>
        </div>
        <div class="main-board-gameLog">
          <gameLog/>
        </div>
    </div>
  </div>
</template>

<script>
import onlineUserList from '../components/onlineUserList'
import rockPaperScissorForm from '../components/RockPaperScissorForm'
import gameLog from '../components/gameLog'
import chatBox from '../components/chatBox'

export default {
  name: 'dashboard',
  components: {
    onlineUserList,
    rockPaperScissorForm,
    gameLog,
    chatBox
  },
  data () {
    return {
      musicPlay: false
    }
  },
  methods: {
    playMusic () {
      var music = new Audio(require('../assets/background-sound.mp3'))
      music.play()
    }
  },
  created () {
    if (!localStorage.name) {
      this.$router.push('/')
    } else {
      this.musicPlay = true
    }
  }
}
</script>

<style>
 .main-board{
  display:flex;
  flex-direction:row;
  padding:10px;
 }

 .main-board-sidebar{
  width: 40vw;
  display: flex;
  flex-direction: column;
 }

 .main-board-gameLog{
  overflow: hidden;
  width: 60vw;
  display: flex;
  flex-direction: column;
 }

</style>
