<template>
  <div>
    <h1>Let's get it on!</h1>
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
  width: 60vw;
  display: flex;
  flex-direction: column;
 }

</style>
