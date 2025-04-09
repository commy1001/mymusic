<template>
  <div class="english-main">
    <div class="englishname" v-for="item in singer" :key="item.id">{{item.name}}<img src="/log/hotsinlog.png" alt=""></div>
    
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
.english-main{
    transform: translateX(20px);
display: grid;
grid-template-columns:150px 150px 150px 150px 150px;
    .englishname{
        height: 40px;
        display: flex;

    }

    .englishname img{
    width: 25px;
    height: 25px;

}
}


</style>