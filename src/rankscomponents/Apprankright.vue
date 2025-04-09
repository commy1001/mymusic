<template>
<link rel="stylesheet" href="//at.alicdn.com/t/c/font_4876995_oqg4quuwhbg.css">
   <main>
    <header>
        <div class="top">
        <div class="left"><img src="/appchartimg/img1.jpg" alt=""></div>
        <div class="right">
            <div class="title">飙升榜</div>
            <div class="righttext"><i class="iconfont icon-time"></i>最近更新: 04月03日 (刚刚更新)</div>
            <div class="play">
                <div class="playicon"><div><i class="iconfont icon-bofang1"></i>播放</div><div class="jia">+</div></div>
                <div class="like"><i class="iconfont icon-tianjiawenjian"></i>(4147055)</div>
                <div class="share"><i class="iconfont icon-zhuanfa"></i>(16464)</div>
                <div class="load"><i class="iconfont icon-xiazai"></i>下载</div>
                <div class="chat"><i class="iconfont icon-liaotian1"></i>(225197)</div>
            </div>
        </div>
    </div>
    </header>
    <body>
        
    </body>
   </main>
</template>

<script setup>

</script>

<style scoped>
.play{
    display: flex;
    gap: 10px;
}
.left{
    width: 155px;
    border: 1px  solid gray;
    height: 155px;
    display: flex;
    justify-content: center;
    align-items: center;
}
main{
    width: 100%;
    padding-top: 40px;
}
header{
    display: flex
}
.left img{
    width: 150px;
    height: 150px;
}
.play{
    display: flex;
}
.top{
    display: flex;
    flex-direction: row;
    gap:20px;
}
.title{
    font-size: 20px;
}
.righttext{
    color: gray;
    display: flex;
    gap:10px;
    align-items: center;
}
.right{
    display: flex;
    justify-content: center;
    gap:15px;
    flex-direction: column;
}
.playicon{
    box-sizing: border-box;
    padding:0  10px;
    display: flex;
    color: white;
    align-items: center;
    justify-content: space-between;
    line-height: 35px;
    width: 100px;
    height: 30px;
    border-radius: 2px;
    background-color: #3b8ad5;
}
.like{
    width: 100px;
    height: 30px;
    display: flex;
    gap:3px;
    color: rgb(103, 100, 100);
    justify-content: center;
    align-items: center;
    border-radius: 2px;
    background-color: #fcfcfc;
    border: 1px solid rgb(189, 186, 186);
}
.share{
    width: 100px;
    height: 30px;
    display: flex;
    gap:3px;
    color: rgb(103, 100, 100);
    justify-content: center;
    align-items: center;
    border-radius: 2px;
    background-color: #fcfcfc;
    border: 1px solid rgb(189, 186, 186);
}
.load{
    width: 70px;
    height: 30px;
    display: flex;
    gap:3px;
    color: rgb(103, 100, 100);
    justify-content: center;
    align-items: center;
    border-radius: 2px;
    background-color: #fcfcfc;
    border: 1px solid rgb(189, 186, 186);
}
.chat{
    width: 100px;
    height: 30px;
    display: flex;
    gap:3px;
    color: rgb(103, 100, 100);
    justify-content: center;
    align-items: center;
    border-radius: 2px;
    background-color: #fcfcfc;
    border: 1px solid rgb(189, 186, 186);
}
</style>