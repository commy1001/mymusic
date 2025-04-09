<template>
    <link rel="stylesheet" href="//at.alicdn.com/t/c/font_4876995_gmj03yi2mu.css">
    <div class="Bookicon-main">
        <div class="pre"><i class="iconfont icon-shangyige" style="color: gray;font-size: 20px;font-weight: 550;"></i></div>
    <div class="Bookicon-all">
        <!-- 使用 v-for 循环渲染每个图标容器 -->
        <div 
            v-for="(icon, index) in iconList" 
            :key="index" 
            :data-is-right-icon="icon.isRightIcon" 
            class="icon-container" 
            @click="toggleIcon(index)"
        ><div class="text">{{ icon.text }}</div></div>
        
    </div>
    <div class="nex"><i class="iconfont icon-xiayige" style="color: gray;font-size: 20px;font-weight: 550;"></i></div>
</div>
<div class="imgicon"><div class="imgiconsmall"></div>
        <div class="imgiconsmall" style="background-color: gray;"></div></div>
</template>

<script setup>
import { ref } from 'vue';
// 依次导入 18 个图标
import icon1 from '@/assets/icons/icon1.jpg';
import icon2 from '@/assets/icons/icon2.jpg';
import icon3 from '@/assets/icons/icon3.jpg';
import icon4 from '@/assets/icons/icon4.jpg';
import icon5 from '@/assets/icons/icon5.jpg';
import icon6 from '@/assets/icons/icon6.jpg';
import icon7 from '@/assets/icons/icon7.jpg';
import icon8 from '@/assets/icons/icon8.jpg';
import icon9 from '@/assets/icons/icon9.jpg';
import icon10 from '@/assets/icons/icon10.jpg';
import icon11 from '@/assets/icons/icon11.jpg';
import icon12 from '@/assets/icons/icon12.jpg';
import icon13 from '@/assets/icons/icon13.jpg';
import icon14 from '@/assets/icons/icon14.jpg';
import icon15 from '@/assets/icons/icon15.jpg';
import icon16 from '@/assets/icons/icon16.jpg';
import icon17 from '@/assets/icons/icon17.jpg';
import icon18 from '@/assets/icons/icon18.jpg';

// 创建图标列表数组，每个对象包含图标路径和状态
const iconList = ref([
    { url: icon1, isRightIcon: false ,text:'情感'},
    { url: icon2, isRightIcon: false ,text:'音乐播客'},
    { url: icon3, isRightIcon: false ,text:'有声书'},
    { url: icon4, isRightIcon: false ,text:'脱口秀' },
    { url: icon5, isRightIcon: false ,text:'创作翻唱'},
    { url: icon6, isRightIcon: false ,text:'电音'},
    { url: icon7, isRightIcon: false ,text:'知识'},
    { url: icon8, isRightIcon: false ,text:'二次元'},
    { url: icon9, isRightIcon: false ,text:'明星专区'},
    { url: icon10, isRightIcon: false ,text:'生活'},
    { url: icon11, isRightIcon: false ,text:'亲子'},
    { url: icon12, isRightIcon: false ,text:'资讯'},
    { url: icon13, isRightIcon: false,text:'广播剧' },
    { url: icon14, isRightIcon: false,text:'故事' },
    { url: icon15, isRightIcon: false ,text:'人文历史'},
    { url: icon16, isRightIcon: false ,text:'娱乐'},
    { url: icon17, isRightIcon: false ,text:'相声曲艺'},
    { url: icon18, isRightIcon: false ,text:'其他'}
]);

// 切换指定索引图标的状态
const toggleIcon = (index) => {
    iconList.value[index].isRightIcon = !iconList.value[index].isRightIcon;
};
</script>

<style scoped lang="less">
@import url(@/style.less);
.imgiconsmall{
    width: 7px;
    height: 7px;
    background-color: @primary;
    border-radius: 50%;
}
.imgicon{
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 12px;
    margin-top: 22px;
    margin-bottom: 30px;
}


.Bookicon-main{
    gap:10px;
    margin-top: 50px;
    width: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
}
.Bookicon-all{
    display:grid;
    width: 750px;
    grid-template-columns:repeat(auto-fit, minmax(80px, 1fr));;
    grid-template-rows:90px 70px;

}
// .text{
//     transform: translateY(10px);
// }
.icon-container {
    margin: 10px;
    display: flex;
    flex-direction: column;
    color: gray;
    align-items: center;
    font-size: 12px;
    justify-content: end;
    border: 2px solid transparent;
    border-radius: 4px;
    width: 50px; /* 根据实际图标大小设置 */
    height: 65px; /* 根据实际图标大小设置 */
    margin: 5px; /* 为图标容器添加一些间距 */
    background-size: 100px 50px; /* 假设图片是两个图标并排，宽度为单个图标的两倍 */
    background-repeat: no-repeat; /* 添加这行防止重复 */
   
}

/* 为每个图标设置对应的背景图片 */
.icon-container:nth-child(1) {
    background-image: url('@/assets/icons/icon1.jpg');
}
.icon-container:nth-child(2) {
    background-image: url('@/assets/icons/icon2.jpg');
}
.icon-container:nth-child(3) {
    background-image: url('@/assets/icons/icon3.jpg');
}
.icon-container:nth-child(4) {
    background-image: url('@/assets/icons/icon4.jpg');
}
.icon-container:nth-child(5) {
    background-image: url('@/assets/icons/icon5.jpg');
}
.icon-container:nth-child(6) {
    background-image: url('@/assets/icons/icon6.jpg');
}
.icon-container:nth-child(7) {
    background-image: url('@/assets/icons/icon7.jpg');
}
.icon-container:nth-child(8) {
    background-image: url('@/assets/icons/icon8.jpg');
}
.icon-container:nth-child(9) {
    background-image: url('@/assets/icons/icon9.jpg');
}
.icon-container:nth-child(10) {
    background-image: url('@/assets/icons/icon10.jpg');
}
.icon-container:nth-child(11) {
    background-image: url('@/assets/icons/icon11.jpg');
}
.icon-container:nth-child(12) {
    background-image: url('@/assets/icons/icon12.jpg');
}
.icon-container:nth-child(13) {
    background-image: url('@/assets/icons/icon13.jpg');
}
.icon-container:nth-child(14) {
    background-image: url('@/assets/icons/icon14.jpg');
}
.icon-container:nth-child(15) {
    background-image: url('@/assets/icons/icon15.jpg');
}
.icon-container:nth-child(16) {
    background-image: url('@/assets/icons/icon16.jpg');
}
.icon-container:nth-child(17) {
    background-image: url('@/assets/icons/icon17.jpg');
}
.icon-container:nth-child(18) {
    background-image: url('@/assets/icons/icon18.jpg');
}

.icon-container[data-is-right-icon="false"] {
    background-position: 0 0; /* 显示左边图标 */
}

.icon-container[data-is-right-icon="true"] {
    border: 2px solid @primary;
    border-radius: 2px;
    background-position: -50px 0; /* 显示右边图标，偏移量根据实际情况调整 */
}
</style>    