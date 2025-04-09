<template>
  <link
    rel="stylesheet"
    href="//at.alicdn.com/t/c/font_4876995_zbfcwvxwsbn.css"
  />
  <main>
    <div class="songcontainer">
      <div class="songimgbox">
        <div class="songimg">
          <img :src="props.data.hotImg" alt="" />
          <div class="playsong">
            <div class="playsongicon1">
              <i class="iconfont icon-erji"></i>
              <span>{{ props.data.hotNum }}</span>
            </div>
            <div class="playsongicon2">
              <i class="iconfont icon-bofang" @click="play"></i>
            </div>
          </div>
        </div>
        <div class="imgtext">{{ props.data.hotContext }}</div>
      </div>
  
    </div>
  </main>
</template>
<script setup>
import {useMusic} from '@/stores/musicstore.js';
import { ref } from 'vue';
const musicstore=useMusic();

//父传子
const props = defineProps({
  data:{
    type:Object,
    default:()=>({
      title:'这是歌单标题',
      num:0,
      img:'xxx.jpg'

    })
  },
  
})

const play=()=>{
  const title=props.data.hotContext;
  // musicstore.playMusic = title;
  musicstore.changeMusic(title);
  console.log(musicstore.playMusic);
  

}


//子传父
// const emit=defineEmits(['changeMusic'])
// const play=()=>{
//   let musicName=props.data.hotContext;
//   emit('changeMusic',musicName)
// }

</script>
<style scoped>
.songimgbox {
  display: flex;
  flex-direction: column;
  width: 140px;
  height: 204px;
  padding-left: 42px;
}
.songimgbox img {
  border: 1px solid gray;
}
.songimg {
  position: relative;
}
.playsong {
  width: 140px;
  display: flex;
  justify-content: center;
  gap: 40px;
  align-items: center;
  color: rgb(240, 231, 231);
  height: 30px;
  font-size: 15px;
  bottom: 5px;
  border: 1px solid black;
  position: absolute;
  background-color: rgba(122, 122, 122, 0.8);
}
.icon-erji {
  font-size: 16px;
}
.icon-bofang {
  font-size: 22px;
}
main {
    margin-top: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
}
.songcontainer {
  width: 800px;
  display: flex;
}
</style>
