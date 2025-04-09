<template>
    <AppNav></AppNav>
    <div class="newcenter-main">
   <newtitle>热门新碟</newtitle>
   <newimage1 :album1="album1"></newimage1>
   <newtitle2 ></newtitle2>
   <newimage2 :album2="album2"></newimage2>
</div>
<Pagination></Pagination>
   <Appfooter></Appfooter>
   <goTop></goTop>
</template>

<script setup>
import AppNav  from '@/components/AppNav.vue'
import newtitle from '../../../newgotop/newtitle.vue';
import Appfooter from '@/components/Appfooter.vue'
import newtitle2 from '../../../newgotop/newtitle2.vue';
import newimage1 from '../../../newgotop/newimage1.vue';
import newimage2 from '../../../newgotop/newimage2.vue';
import goTop from '@/components/goTop.vue'
import Pagination from '../../../components/Pagination.vue';
import request from '@/utils/request.js';
import { ref } from "vue";

const album1=ref([]);
const album2=ref([]);
const allalbum=ref([]);
const getData = async () => {
    let res = await request.get('/discover/album');
    console.log(res);
    if (res.data && res.data.data && Array.isArray(res.data.data.album)) {
        allalbum.value = res.data.data.album;
        album1.value = res.data.data.album.slice(0, 10);
        album2.value = res.data.data.album.slice(10);
    } else {
        console.error('接口返回数据格式不符合预期');
    }
};
getData();
</script>

<style scoped>
.newcenter-main{
    width: 100%;
    flex-direction: column;
    display: flex;
    align-items: center;
}
</style>