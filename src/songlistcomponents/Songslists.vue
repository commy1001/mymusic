<template>
  <link
    rel="stylesheet"
    href="//at.alicdn.com/t/c/font_4876995_zbfcwvxwsbn.css"
  />
  <div class="songlist">
    <div class="songcontainer">
      <div class="songimgbox" v-for="song in playlist" :key="song.id">
        <div class="songimg">
          <img :src="song.hotImg" alt="" />
          <div class="playsong">
            <div class="playsongicon1">
              <i class="iconfont icon-erji"></i>
              <span>{{ song.num }}</span>
            </div>
            <div class="playsongicon2">
              <i class="iconfont icon-bofang"></i>
            </div>
          </div>
        </div>
        <div class="imgtext">
          {{ song.hotContext }}
          <p style="color: gray">{{ song.hotName }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive,ref } from "vue";
const props = defineProps(
  {
    playlist:{
      type: Array,
      default: () => []
    }
  }
);

</script>
<style scoped>
.imgtext {
  font-size: 12px;
}
.songimgbox {
  display: flex;
  flex-direction: column;
  width: 100px;
  height: 190px;
}
.songimgbox img {
  width: 100px;
  border: 1px solid gray;
}
.songimg {
  position: relative;
}
.playsong {
  width: 100px;
  display: flex;
  justify-content: center;
  gap: 5px;
  align-items: center;
  color: rgb(240, 231, 231);
  height: 30px;
  font-size: 13px;
  bottom: 3px;
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
.songlist {

  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
}
.songcontainer {
  display: grid;
  grid-template-columns: repeat(5,minmax(140px, 1fr)
  ); /* 5行/自动填充(auto-fill)，最小150px，最大1fr */
  width: 700px;
  column-gap: 10px;
}
</style>
