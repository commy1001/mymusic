<template>
<link rel="stylesheet" href="//at.alicdn.com/t/c/font_4876995_5oj4gwrwpri.css">

<div class="main">
    <div class="maincenter">
    <div class="logo"><img src="/headerlog/topbar.png" alt=""></div>
    <div class="main-text">
        <div class="text" :class="path.includes(item.path)?'active':''" v-for="(item,index) in menus" :key="index" v-on:click="toPath(item.path)">{{item.title}}</div>
    </div>
    <div class="search">
        <div class="searchicon"><i class="iconfont icon-sousuo"></i></div>
        <input type="text" placeholder="音乐/视频/电台/用户">
    </div>
    <div class="autorcenter">创作者中心</div>
    <div class="loggin">登录</div>
</div>
</div>


</template>
<script setup>
import { RouterLink, useRouter,useRoute } from 'vue-router';
import { ref,watch } from 'vue';
const router =useRouter()
const route=useRoute()
const path=ref('/')
const menus=[
    {
        title:'发现音乐',
        path:'/discover'
    },
    {
        title:'我的音乐',
        path:'/my'
    },
    {
        title:'关注',
        path:'/concern'
    },
    {
        title:'商城',
    
    },
    {
        title:'云推歌',
   
    },
    {
        title:'下载客户端',
        path:'/download'
    }
]

const toPath=(path)=>{
    router.push(path)
}

watch(()=>route.path,(newVal,oldVal)=>{
    path.value=newVal
},{immediate:true})
</script>
<style scoped lang="less">
@import url('../style.less');
.main{
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: @background;
    display: flex;
    .icon-sousuo{
    color: gray;
}
.maincenter{
    width: 1100px;
    position: fixed;
    justify-content: center;
    align-items: center;
    gap: 20px;
    height:70px ;
    position: relative;
    z-index: 1000;
    box-sizing: border-box;
    border-bottom: 1px solid #000;
    display: flex;
}

.logo{
    color:white;
    display: flex;
    justify-content: center;
    align-items: center;
    gap:10px;
    font-size: 20px;
}
.main-text{
    color: #ccc;
    display: flex;
    font-size: 16px;
    height: 70px;
    line-height: 70px;

}
.search{
    color: #333;
    font-family: Arial, Helvetica, sans-serif;
    /* -webkit-text-size-adjust: none; */
    border-radius: 20px;
    width: 170px;
    height: 30px;
    display: flex;
    align-items: center;
    gap:10px;
    justify-content: center;
    background-color: white;
}
input{
    outline: none;
    border: none;
    font-size: 12px;
    width: 120px;
}
.autorcenter{
    color: #ccc;
    border-radius: 20px;
    width: 80px;
    text-align: center;
    line-height: 25px;
    height: 25px;
    border: 0.2px solid #757171;
    font-size: 12px;
}
.autorcenter:hover{
    border: 0.2px solid #b6b3b3;
    color: #f7f3f3;
}
.loggin{
    color:#7f7c7c;
    font-size: 12px;
}
.active{
    background-color: black;
    color: white;
}
.text:hover{
    background-color: #000;
    color: white;
    cursor: pointer;

}
.text{
    width: 80px;
    text-align: center;
}
}



</style>