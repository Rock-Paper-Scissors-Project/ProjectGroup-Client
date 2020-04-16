<template>
  <div>
    <div class="rockPaperScissor-box">
      <h3>Choose a hand to play!</h3>
        <form>
            <div class="hand-selection-form">
                    <div id="hand-selection-rock">
                        <input type="radio" name="hand-selection" id="rock" value="rock">
                        <label for="rock">
                            <h2>ROCK</h2>
                            <!-- <img src="" alt="hand-rock"> -->
                        </label>
                    </div>
                    <div id="hand-selection-paper">
                       <input type="radio" name="hand-selection" id="paper" value="paper">
                        <label for="paper">
                            <h2>PAPER</h2>
                            <!-- <img src="" alt="hand-paper"> -->
                        </label>
                    </div>

                    <div id="hand-selection-scissor">
                        <input type="radio" name="hand-selection" id="scissor" value="scissor">
                    <label for="scissor">
                        <h2>SCISSOR</h2>
                        <!-- <img src="" alt="hand-scissor"> -->
                    </label>
                    </div>
            </div>
            <button type="submit" class="btn btn-primary" style="background-color:#2ecc71; color:white; border-width: 0px; padding: 10px 25px;">Submit!</button>
        </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'rockPaperScissorForm'
}
</script>

<style>

.rockPaperScissor-box{
  border:1px;
  border-style: solid;
  border-color: #2ecc71;
  background-color:#ecf0f1;
  justify-content: center;
}

.hand-selection-form{
    display:flex;
    flex-direction: row;
    justify-content: center;
}

#hand-selection-rock{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin:10px
}

#hand-selection-paper{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin:10px
}

#hand-selection-scissor{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin:10px
}

</style>
