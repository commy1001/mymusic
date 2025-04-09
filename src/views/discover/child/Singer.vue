<template>
<AppNav></AppNav>
<div class="singgermian">
    <div class="dinggerleft">
<singerleft></singerleft>
</div>
<div class="singgeright">
  <singgertitle>
    <template #title><div>推荐歌手</div></template>
    <template v-slot:default="scope"><div>{{scope.more}}</div></template>
  </singgertitle>
  <singgerenglish></singgerenglish>
  <hotsinger :singer="singer"></hotsinger>
  <div class="line"></div>
  <english :singer="singer"></english>
  <Pagination></Pagination>
</div>
</div>
<Appfooter></Appfooter>
<goTop></goTop>
</template>

<script setup>
import AppNav  from '@/components/AppNav.vue'
import singerleft from '../../../singger/singerleft.vue';
import singgertitle from '../../../singger/singgertitle.vue';
import singgerenglish from '../../../singger/singgerenglish.vue';
import hotsinger from '../../../singger/hotsinger.vue';
import Appfooter from '@/components/Appfooter.vue'
import english from '../../../singger/english.vue';
import goTop from '@/components/goTop.vue'
import Pagination from '../../../components/Pagination.vue';
import request from '@/utils/request.js';
import { ref } from "vue";

const singer=ref([]);

const getData=async()=>{
    let res=await request.get('/discover/artist');
    console.log(res);
    singer.value=res.data.data.singer;
   
    
}
getData();
</script>

<style scoped lang="less">
.singgermian{
    gap:20px;
    width: 100%;
    justify-content: center;
    display: flex;
    .singgeright{
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
       
    }
    .line{
        height: 1px;
        width: 720px;
        background-color: #ccc
    }
}
</style>