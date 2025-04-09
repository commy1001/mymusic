<template>
  <div class="playmusic" v-if="musicstore.isPlaying" > 正在播放: {{ musicstore.playMusic }}</div>
</template>

<script setup>
import {useMusic} from '@/stores/musicstore.js';
const musicstore=useMusic();
</script>

<style scoped>
.playmusic{
    width: 100%;
    bottom: 0px;
    position: fixed;
    height: 60px;
    font-size: 25px;
    text-align: center;
    color: white;
    background-color: rgba(44, 44, 44,0.9);
}
</style>