<template>
    <header>
        <div class="head-text">
            <div class="text" :class="item.path==path?'active':''" v-for="item in menus" :key="item.id"  @click="toPath(item.path)">{{item.title}}</div>
        </div>

    </header>


</template>
<script setup>
import { useRouter,useRoute } from 'vue-router';
import { ref,watch } from 'vue';
const router =useRouter()
const route = useRoute()
const menus=[
    {
        title:'推荐',
        path:'/discover/recommend'
    },{
        title:'排行榜',
        path:'/discover/toplist'
    },
    {
        title:'歌单',
        path:'/discover/songlist'
    },{
        title:'播客有声书',
        path:'/discover/songbook'
    },{
        title:'歌手',
        path:'/discover/singer'
    },
    {
        title:'新碟上架',
        path:'/discover/newtop'
    }
]
const path=ref('/discover/recommend')
const toPath=(path)=>{
    router.push(path)
}
watch(route,(newVal,oldVal)=>{
    path.value = newVal.path
   
},{immediate:true,deep:true})
</script>
<style scoped lang="less">
@import url('../style.less');

header{
    background-color:@primary;
    width: 100%;
    height:45px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.head-text{
    width: 700px;
    display: flex;
    color: white;
    height: 45px;
    align-items: center;
    font-size: 15px;
    gap: 35px;
    
}
.text{
    padding-left: 10px;
    padding-right: 10px;
    text-align: center;
    height: 20px;
    line-height: 20px;
    border-radius: 10px;
}
.text:hover{
    background-color:#8c0909;
    cursor:pointer;
   
}
.active{
        background-color:#8c0909 !important;
        cursor:pointer;
    }


</style>