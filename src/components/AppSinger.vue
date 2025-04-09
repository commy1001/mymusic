<template>
<main>
    <header>
        <div class="top-left">入驻歌手</div>
        <div class="top-right">查看全部 ></div>
    </header>
    <div class="center">
       <div class="singer" >
        <div class="singerimg"><img :src="props.data.discImg" alt=""></div>
        <div class="singer-right">
            <div class="rightsingername">{{ props.data.discAuthor }}</div>
            <div class="rightsingerinfo">{{ props.data.discContent}}</div>
        </div>
       </div>
       
      
    </div>
    <footer>申请成为网易音乐人</footer>
    <div class="header2">
        <div class="header2-title">热门主播</div>
        <div class="header2-main">
            <div class="anchor">
                <div class="anchorimg"><img :src="props.data.discImg" alt=""></div>
                <div class="anchortext">
                    <div class="anchortext1">{{ props.data.discAuthor }}</div>
                    <div class="anchortext2">{{ props.data.discContent}}</div>
                </div>
            
            </div>
        </div>
       
   
        
    </div>

</main>

</template>
<script setup>
const props =defineProps({
    data:{
        type:Object,
        default:()=>({
            img:'xxx.jpg',
            num:0,
            title:'这是歌单标题',
            
        })
    }
})
</script>
<style scoped>
.anchortext2{
    color: gray;
}
.header2{
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.anchor{
    display: flex;
    gap:10px;
}
.anchorimg img{
    width: 55px;
}
.header2-title{
    font-weight: 600;
    width: 280px;
    padding-bottom: 8px;
    border-bottom: 1px solid gray;
}
.center{
    display: flex;
    flex-direction: column;
    gap: 17px;
}
.rightsingername{
    font-size: 20px;
    font-weight: 700;
}
.rightsingerinfo{
    color: gray;
}
.singer-right{
    height: 90px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap:10px;
}
.singer{
    gap:15px;
    width: 280px;
    height: 90px;
    background-color: #fafafa;
    border: 1px solid rgb(194, 188, 188);
    display: flex;
}
img{
    width: 90px;
}
main{
    gap:25px;
    width: 340px;
    height: 1060px;
    flex-direction: column;
    border: 1px solid gray;
    align-items: center;
    display: flex;
    
}
.top-right{
    color: gray;
}
.top-left{
    font-size: 17px;
    font-weight: 700;
}
header{
    border-bottom: 1px solid gray;
    display: flex;
    height: 40px;
    align-items: flex-end;
    padding-bottom: 6px;
    width: 280px;
    justify-content: space-between;
}
footer{
    width: 280px;
    height: 40px;
    font-weight: 550;
    border: 1px solid  gray;
    border-radius: 5px;
    background-color: #f6f6f6;
    text-align: center;
    line-height: 40px;
}
</style>