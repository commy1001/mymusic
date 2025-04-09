<template>
    <link rel="stylesheet" href="//at.alicdn.com/t/c/font_4876995_4ns9qc3yzp2.css">
    <div class="chartmain">
        <!-- 飙升榜 -->
        <div class="chat1">
            <div class="chat1-top">
                <div class="chattop-left"><img src="/appchartimg/img1.jpg" alt=""></div>
                <div class="chattop-right">
                    <div class="chattopright-text">飙升榜</div>
                    <div class="chattopright-icon">
                        <i class="iconfont icon-bofang1"></i>
                        <i class="iconfont icon-tianjiawenjianjia"></i>
                    </div>
                </div>
            </div>
            <div class="chat1-center">
                <div v-for="(song, index) in soaringList" :key="song.songId" 
                     :class="['chat' + ((index % 2) + 1) + 'centertext']">
                    <div :class="['songnum', index > 2 ? 'songnum1' : '']">{{ index + 1 }}</div>
                    <div class="songname">{{ song.songName }}</div>
                </div>
                <div class="chat3centertext">
                    <div class="checkall">查看全部 ></div>
                </div>
            </div>
        </div>
        
        <!-- 新歌榜 -->
        <div class="chat1">
            <div class="chat1-top">
                <div class="chattop-left"><img src="/appchartimg/img2.jpg" alt=""></div>
                <div class="chattop-right">
                    <div class="chattopright-text">新歌榜</div>
                    <div class="chattopright-icon">
                        <i class="iconfont icon-bofang1"></i>
                        <i class="iconfont icon-tianjiawenjianjia"></i>
                    </div>
                </div>
            </div>
            <div class="chat1-center">
                <div v-for="(song, index) in newSongList" :key="song.songId" 
                     :class="['chat' + ((index % 2) + 1) + 'centertext']">
                    <div :class="['songnum', index > 2 ? 'songnum1' : '']">{{ index + 1 }}</div>
                    <div class="songname">{{ song.songName }}</div>
                </div>
                <div class="chat3centertext">
                    <div class="checkall">查看全部 ></div>
                </div>
            </div>
        </div>
        
        <!-- 原创榜 -->
        <div class="chat1">
            <div class="chat1-top">
                <div class="chattop-left"><img src="/appchartimg/img3.jpg" alt=""></div>
                <div class="chattop-right">
                    <div class="chattopright-text">原创榜</div>
                    <div class="chattopright-icon">
                        <i class="iconfont icon-bofang1"></i>
                        <i class="iconfont icon-tianjiawenjianjia"></i>
                    </div>
                </div>
            </div>
            <div class="chat1-center">
                <div v-for="(song, index) in originalList" :key="song.songId" 
                     :class="['chat' + ((index % 2) + 1) + 'centertext']">
                    <div :class="['songnum', index > 2 ? 'songnum1' : '']">{{ index + 1 }}</div>
                    <div class="songname">{{ song.songName }}</div>
                </div>
                <div class="chat3centertext">
                    <div class="checkall">查看全部 ></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, defineProps} from 'vue';
const props = defineProps({
    data: {
        type: Array,
        default: () => []
    }
})

// 将接口数据分割成三个榜单
const soaringList = props.data.slice(0, 10);  // 飙升榜
const newSongList = props.data.slice(10, 20); // 新歌榜
const originalList = props.data.slice(20, 30); // 原创榜
</script>
<style scoped>
.chartmain{
    width: 100%;
    margin-top: 20px;
    justify-content: center;
    display: flex;
}
.chat1{
    background-color: #f4f4f4;
    width: 234px;
    height: 577px;
    box-sizing: border-box;
    border: 1px solid rgb(157, 154, 154);
}
.chat1-top{
    margin: 30px;
    display: flex;
    gap: 10px;
}
.chattop-right{
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 7px;
}
.chattopright-icon{
    color: rgb(197, 195, 195);
    font-weight: 600;
    display: flex;
    gap:5px;
}
.icon-bofang1,.icon-tianjiawenjianjia{
    font-size: 20px;
}
.chat1centertext{
    background-color: #e8e8e8;
    width: 233px;
    height: 30px;
    display: flex;
    box-sizing: border-box;
    padding-left: 30px;
    gap:20px;
    align-items: center;
}
.songnum{
    color: #c10d0c;
}
.chat2centertext{
    width: 224px;
    height: 30px;
    display: flex;
    padding-left: 30px;
    gap:20px;
    align-items: center;
}
.songnum1{
    color: #666666;
}
.chat3centertext{
    background-color: #e8e8e8;
    height: 30px;
    display: flex;
    box-sizing: border-box;
    padding-left: 125px;
    gap:20px;
    align-items: center;
}
.checkall{
    font-size: 14px;
}

</style>
