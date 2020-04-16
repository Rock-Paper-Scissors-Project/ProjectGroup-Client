<template>
  <div class="game-log-box">
    <h3>Game Log</h3>
    <div class="game-log-message-box">
      <p>Player user_1 won!</p>
      <p>Waiting for player...</p>
      <p>Player user_2 has joined the game
      <p>Make your choice!</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'gameLog'
}
</script>

<style>

.game-log-message-box{
  background-color: width;
  width: 70%;
  margin: 0 15%;

}

.game-log-box{
  height: 100%;
  border:1px;
  border-style: solid;
  border-color: #2ecc71;
  background-color:#ecf0f1;
}

</style>
