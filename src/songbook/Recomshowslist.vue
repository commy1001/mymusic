<template>
  <div class="recomshowslist1" v-for="item in program" :key="item.id">
    <div class="left"><img :src="item.img" alt=""></div>
    <div class="center"><p>{{ item.title }}</p><p style="color: gray;">{{item.context}}</p></div>
    <div class="right" style="color: gray;">音乐播客</div>
  </div>
 
</template>

<script setup>
const props = defineProps(
  {
    program:{
      type: Array,
      default: () => []
    }
  }
);
</script>

<style scoped lang="less">
.recomshowslist1{
 display: grid;
 grid-template-columns: 60px 170px 60px;
  align-items: center;
  height: 70px;
  font-size: 12px;
  gap:15px;
    .right{
        margin-left: 10px;
        border: 1px solid gray;
        width: 60px;
        height: 20px;
        text-align: center;
        line-height: 20px;
    }
    .left img{
      width: 50px;
    }
  
}
.recomshowslist2{
  display: flex;
  align-items: center;
  height: 70px;
  font-size: 12px;
  background-color: #f7f7f7;
  gap:15px;
    .right{
        margin-left: 10px;
        border: 1px solid gray;
        width: 60px;
        height: 20px;
        text-align: center;
        line-height: 20px;
    }
}


</style>
