<template>
  <link rel="stylesheet" href="//at.alicdn.com/t/c/font_4876995_zczw1sm68nq.css" />
  <main>
   <!-- 前3首歌曲（带封面） -->
<div
  v-for="(song, index) in topSongs"
  :key="song.songID"
  :class="['song-item', 'featured-song', index % 2 === 0 ? 'even' : 'odd']"
>
  <div class="num">{{ index + 1 }}</div>
  <div class="new" v-if="index < 3">NEW</div>
  <div class="img">
    <img :src="song.songImg" alt="封面" />
  </div>
  <div class="song-info">
    <div class="song-name">
      <i class="iconfont icon-bofang1"></i>
      {{ song.songName }}
    </div>
  </div>
  <div class="artist">{{ song.songAuthor }}</div> <!-- 调整顺序到这里 -->
  <div class="duration">{{ song.songTime }}</div> <!-- 交换顺序 -->
</div>

    <!-- 其余歌曲 -->
    <div
      v-for="(song, index) in otherSongs"
      :key="song.songID"
      :class="['song-item', 'regular-song', index % 2 === 0 ? 'even' : 'odd']"
    >
      <div class="num">{{ index + 4 }}</div>
      <div class="new" v-if="index < 3">NEW</div>
      <div class="song-info">
        <div class="song-name">
          <i class="iconfont icon-bofang1"></i>
          {{ song.songName }}
        </div>
      </div>
      <div class="duration">{{ song.songTime}}</div>
      <div class="artist">{{ song.songAuthor }}</div>
    </div>
  </main>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  songlist: {
    type: Array,
    required: true,
    default: () => []
  }
});



const topSongs = computed(() => props.songlist.slice(0, 3));
const otherSongs = computed(() => props.songlist.slice(3));
</script>

<style scoped>
main {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  border: 1px solid #e1e1e1;
  border-radius: 4px;
  overflow: hidden;
}

.song-item {
  display: grid;
  align-items: center;
  padding: 8px 20px;
  font-size: 14px;
}
/* 特色歌曲布局 (前3首) - 调整列顺序和网格区域 */
.featured-song {
  /* 调整列顺序：将artist列放到duration列右侧 */
  grid-template-columns: 30px 50px 60px 220px 80px minmax(120px, 150px); /* 交换最后两列宽度 */
  grid-template-areas: "num new img info duration artist"; /* 保持区域顺序对应 */
  height: 60px;
}

/* 调整公共样式中的网格区域顺序（如果有需要） */
.duration {
  grid-area: duration;
  color: #666;
  text-align: left; /* 原为right，根据新位置调整对齐方式 */
  padding-right: 0;
}

.artist {
  grid-area: artist;
  color: #666;
  text-align: right; /* 新增右侧对齐 */
  padding-right: 10px; /* 增加右侧内边距 */
}

/* 普通歌曲布局 */
.regular-song {
  grid-template-columns: 30px 50px minmax(200px, 280px) 80px minmax(120px, 150px);
  grid-template-areas: "num new info duration artist";
  height: 40px;
}

/* 公共样式 */
.num {
  grid-area: num;
  color: #999;
  text-align: center;
}

.new {
  grid-area: new;
  color: #268330;
  font-weight: bold;
  font-size: 10px;
  text-align: center;
}

.img {
  grid-area: img;
}
.img img {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 4px;
}

.song-info {
  grid-area: info;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.song-name {
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
}
.song-name i {
  color: #a1a1a1;
  margin-right: 8px;
}

.album-name {
  color: #999;
  margin-left: 4px;
}

.artist {
  grid-area: artist;
  color: #666;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.duration {
  grid-area: duration;
  color: #666;
  text-align: right;
  padding-right: 10px;
}

/* 交替背景色 */
.even {
  background-color: #f9f9f9;
}
.odd {
  background-color: #fff;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .featured-song {
    grid-template-columns: 30px 40px 1fr 80px;
    grid-template-areas: "num new info duration";
  }
  .img {
    display: none;
  }
}
</style>