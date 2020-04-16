<template>
  <div>
      <div class="chatBox">
        <h3>Enter chat message</h3>
        <form>
            <label for="chat-message"></label>
            <textarea id="chat-message" rows="4" cols="45">
              Enter your message here...
            </textarea><br>
            <button type="submit" class="submit-button">Submit!</button>
        </form>
      </div>
  </div>
</template>

<script>
export default {
  name: 'chatBox'
}
</script>

<style>
.chatBox{
  border:1px;
  border-style: solid;
  border-color: #2ecc71;
  background-color:#ecf0f1;
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
