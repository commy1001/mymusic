<template>
    <link rel="stylesheet" href="//at.alicdn.com/t/c/font_4876995_w39h4vzyql.css">
        <div class="usecom-main">
            <div class="usecom-title">最新评论(225223)</div>
            <div class="usecom-text"  v-for="item in newcomment" key="item.id">
                <div class="avatar"><img :src="item.commentImg" alt=""></div>
                <div class="text-time">
                    <div class="text">{{ item.commentName }}:<span style="color: black;">{{item.commentContext}}</span></div>
                    <div class="time">{{item.commentDate}}</div>
                </div>
                <div class="goodicon"><i class="iconfont icon-24px"></i>{{ formatCommentNum(item.commentNum) }}</div>
                <div class="back">回复</div>
            </div>
            
            
        </div>
    </template>
    
    <script setup>
    import { parseDynamicNumber } from '@/utils/helpers';
    
    const props = defineProps({
        newcomment: {
        type: Array,
        default: () => []
      }
    });
    
    const formatCommentNum = (numStr) => {
      return parseDynamicNumber(numStr).toLocaleString(); // 添加千位分隔符
    };
    
    </script>
    <style scoped>
    .usecom-main{
        margin-top: 40px;
    }
    .avatar img{
        width: 50px;
        height: 50px;
    }
    .icon-24px{
        color: #3181cd;
        font-size: 20px;
        margin-right: 6px;
    }
    .back{
        border-left:1px solid gray;
        padding-left: 10px;
        height: 12px;
        font-size: 12px;
        line-height: 12px;
        color: gray;
    }
    .usecom-title{
        font-weight: 600;
        border-bottom: 1px solid black;
        padding-bottom: 6px;
    }
    .text{
        color:#3181cd;
    }
    .time{
        color: gray;
    }
    .text-time{
        height: 46px;
        display: flex;
        font-size: 12px;
        justify-content: space-between;
        flex-direction: column;
    }
    .usecom-text{
        display: grid;
        grid-template-columns:70px 500px 83px 50px ;
        grid-template-rows: 70px;
        align-items: center;
        border-bottom: 1px solid gray;
    }
    </style>