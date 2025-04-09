<template>
<AppNav></AppNav>
<Appswiper></Appswiper>
<main>
<div class="left">
<AppTitle1></AppTitle1>
<div class="song">
<Appsong v-for="(item,index) in recommendList" :key="index" :data="item" ></Appsong></div>
<AppTitle2></AppTitle2>
<Appswiper2></Appswiper2>
<AppTitle3></AppTitle3>

<AppChart  v-if="rankList" :data="rankList">

</AppChart>
</div>
<div class="right">
<Apprightlog></Apprightlog>
<comsingertitle></comsingertitle>
<div class="right1">
<comsinger v-for="(item,index) in autorList" :key="index" :data="item"></comsinger>
</div>
<hotsinggertitle></hotsinggertitle>
<div class="right2">
<hotsingger v-for="(item,index) in autorList" :key="index" :data="item"></hotsingger></div>
</div>
</main>

<Appfooter></Appfooter>
<goTop></goTop>
<play v-if="musicstore.isPlaying"></play>

<div class="recom-img"><img src="/log/image.png" alt=""></div>

</template>

<script setup>
import AppNav  from '@/components/AppNav.vue'
import Appswiper from'@/components/Appswiper.vue'
import AppTitle1 from '@/components/AppTitle1.vue'
import Appfooter from '@/components/Appfooter.vue'
import Appsong from '@/Appsong.vue'
import AppTitle2 from '@/components/AppTitle2.vue'
import Appswiper2 from '@/components/Appswiper2.vue'
import AppTitle3 from '@/components/AppTitle3.vue'
import AppChart from '@/components/AppChart.vue'
import Apprightlog from '@/components/Apprightlog.vue'
import goTop from '../../../components/goTop.vue'
import play from '../../../components/play.vue'
import request from '@/utils/request.js';
import {ref} from 'vue'
import comsinger from '../components/comsinger.vue'
import comsingertitle from '../components/comsingertitle.vue'
import hotsinggertitle from '../components/hotsinggertitle.vue'
import hotsingger from '../components/hotsingger.vue'
import { useMusic } from '@/stores/musicstore.js';
//热门推荐
const recommendList=ref(null);
//入驻歌手
const autorList=ref(null);
//榜单
const rankList=ref(null);
//当前播放的音乐
const currentMusic=ref('')
const musicstore = useMusic();

//调用axios接口
const getData=async()=>{
    let res=await request.get('/discover/home');
    recommendList.value=res.data.data.hot;
    autorList.value=res.data.data.disc;
    rankList.value=res.data.data.rank;
    console.log(res);
    console.log('autorList:', autorList.value);
    console.log('rankList:', rankList.value);
}
getData();
//子传父
// const playMusic=(data)=>{
//     console.log('我是要播放的音乐',data);
//     currentMusic.value=data;
    
// }


</script>

<style scoped>
main{
    display: flex;
    width: 100%;
   
    justify-content: center;
}
.right{
    margin-left: 20px;
    width: 350px;
    box-sizing: border-box;
    height: 1600px;
    border: 1px solid gray;
    padding-left: 20px;
}
.recom-img img{
    position: absolute;
    z-index:1000;
    width: 270px;
    height: 400px;
    top:114px;
    right: 300px;;
}
.song{
    display: grid;
    grid-template-columns: 160px 160px 160px 160px;
    gap: 20px;
}


.left{
    display: flex;
    flex-direction: column;
    gap:20px;
    margin-top: 20px;
}
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
.right1{
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    gap: 20px;
}
.right2{
    display: flex;
    flex-direction: column;
    gap: 20px;
}
</style>