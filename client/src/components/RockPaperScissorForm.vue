<template>
  <div>
    <div class="rockPaperScissor-box">
      <h3>Choose a hand to play!</h3>
        <form>
            <div class="hand-selection-form">
                    <div id="hand-selection-paper">
                       <input type="radio" name="hand-selection" class="input-hidden" id="paper" value="paper">
                        <label for="paper">
                            <!-- <h2>PAPER</h2> -->
                            <img src="@/assets/images/rps-1-paper.png" alt="hand-paper">
                        </label>
                    </div>

                    <div id="hand-selection-scissor">
                        <input type="radio" name="hand-selection" class="input-hidden" id="scissor" value="scissor">
                    <label for="scissor">
                        <!-- <h2>SCISSOR</h2> -->
                        <img src="@/assets/images/rps-3-scissor.png" alt="hand-scissor">
                    </label>
                    </div>

                    <div id="hand-selection-rock">
                        <input type="radio" name="hand-selection" class="input-hidden" id="rock" value="rock">
                        <label for="rock">
                            <!-- <h2>ROCK</h2> -->
                            <img src="@/assets/images/rps-2-rock.png" alt="hand-rock">
                        </label>
                    </div>
            </div>
            <button type="submit" class="submit-button">Submit!</button>
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

img{
    max-width: 100%;
    border-radius: 50%;
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

.input-hidden{
  display: none
}

input[type=radio]:checked + label>img {
    border: 1px solid #fff;
    box-shadow: 0 0 3px 3px #2ecc71;
}

.submit-button{
    background-color:#2ecc71;
    color:white;
    border-width: 0px;
    padding: 10px 25px;
    margin: 10px;
    border-radius: 4px;
}

</style>
