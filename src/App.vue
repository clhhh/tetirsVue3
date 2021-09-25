<script setup lang="ts">

import Game from './components/Game.vue'
import {startGame} from "./game"
function start(){
  startGame();
}
function reload(){
  window.location.reload()
}
</script>

<template>

<button class="bu" @click="start">开始游戏</button>
 <button class="bu" @click="reload">重新开始</button>
 <div class="quanju">
  <Game class="game"></Game>
</div>
 
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.quanju{
  display: flex;
  justify-content: center;
}
.bu{
  margin: 10px;
  border: white;
  background: rgb(166, 188, 247);
  border-radius: 50px;
}

</style>
