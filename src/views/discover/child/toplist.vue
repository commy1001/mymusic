<template>
  <AppNav></AppNav>
  <body>
    <div class="left">
      <Apprankleft 
      :featurelist="featurelist" 
      :mediaboard="mediaboard"></Apprankleft>

    </div>
    <div class="right">
      <Apprankright></Apprankright>
      <Ranktitle></Ranktitle>
      <Apprankrightcenter></Apprankrightcenter>
      <Appranksongs :songlist="songlist"></Appranksongs>
      <AppComtitle ></AppComtitle>
      <Comments></Comments>
      <Usercomments :goodComment="goodComment"></Usercomments>
      <newcomments :newcomment="newcomment"></newcomments>
      <Apprankrightbottom></Apprankrightbottom>
      <Pagination></Pagination>
      
    </div>
  </body>

  <Appfooter></Appfooter>
  <goTop></goTop>
</template>

<script setup>
import AppNav from "@/components/AppNav.vue";
import Apprankleft from "../../../rankscomponents/Apprankleft.vue";
import Apprankright from "../../../rankscomponents/Apprankright.vue";
import Apprankrightbottom from "../../../rankscomponents/Apprankrightbottom.vue";
import Ranktitle from "../../../rankscomponents/Ranktitle.vue";
import Apprankrightcenter from "../../../rankscomponents/Apprankrightcenter.vue";
import Appranksongs from "../../../rankscomponents/Appranksongs.vue";
import AppComtitle from "../../../rankscomponents/AppComtitle.vue";
import Comments from "../../../rankscomponents/Comments.vue";
import Usercomments from "../../../rankscomponents/Usercomments.vue";
import Appfooter from '@/components/Appfooter.vue'
import goTop from '../../../components/goTop.vue'
import Pagination from "../../../components/Pagination.vue";
import request from '@/utils/request.js';
import { ref } from "vue";
import ranklefttop from "../../../rankscomponents/ranklefttop.vue";
import newcomments from "../../../rankscomponents/newcomments.vue";

//云音乐特色榜
const featurelist=ref([]);
//全球媒体榜
const mediaboard=ref([]);
//歌曲列表
const songlist=ref([]);
//评论
const newcomment=ref([]);
//精彩评论
const goodComment=ref([]);
const rankdata=ref([]);
//调用axios接口
const getData=async()=>{
    let res=await request.get('/discover/toplist');
    console.log(res);
    featurelist.value=res.data.data.featured;
    goodComment.value=res.data.data.goodComment;
    mediaboard.value=res.data.data.media;
    songlist.value=res.data.data.songList ;
    newcomment.value=res.data.data.newComment;
    rankdata.value=res.data.data.rankDate;  
}
getData();
</script>

<style scoped>
body {
  display: flex;
  width: 100%;
  gap:40px;
  height:3500px;
  justify-content: center;
}
</style>
