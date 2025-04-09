<template>
<AppNav></AppNav>
<Listtiltle></Listtiltle>
<Songslists :playlist="playlist"></Songslists>
<Pagination></Pagination>
<Appfooter></Appfooter>
  <goTop></goTop>
</template>

<script setup>
import AppNav  from '@/components/AppNav.vue'
import Listtiltle from '../../../songlistcomponents/Listtiltle.vue';
import Songslists from '../../../songlistcomponents/Songslists.vue';
import Appfooter from '@/components/Appfooter.vue'
import goTop from '@/components/goTop.vue'
import Pagination from '../../../components/Pagination.vue';
import request from '@/utils/request.js';
import { ref } from "vue";

const playlist=ref([]);

const getData=async()=>{
    let res=await request.get('/discover/playlist');
    console.log(res);
    playlist.value=res.data.data.playList;
    console.log(playlist.value);
    
}
getData();
</script>

<style scoped>

</style>