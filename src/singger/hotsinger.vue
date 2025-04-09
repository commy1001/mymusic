<template>
  <div class="hotsinnger-mian">
    <div class="hotitem" v-for="item in singer" :key="item.id">
        <img :src="item.img" alt="">
        <div class="text">{{item.name}} <img src="/log/hotsinlog.png" alt=""></div>
    </div>
    
  </div>
</template>

<script setup>
const props = defineProps({
    singer:{
        type:Array,
        default:()=>[]
    }
    
})
</script>

<style scoped lang="less">
.hotsinnger-mian{
    display: grid;
    grid-template-columns: 120px 120px 120px 120px 120px ;
    gap:30px;
    width: 700px;
    
    .text{
        height: 30px;
        align-items: center;
        font-size: 12px;
        display: flex;
        justify-content: space-between;
    }
    .text img{
        width: 25px;

    }
    .hotitem>img{
        width: 120px;
    }
}
</style>