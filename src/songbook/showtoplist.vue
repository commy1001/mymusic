<template>
  <div class="recomshowslist1" v-for="item in programRank" :key="item.id">
    <div class="showlistnum">{{item.id}}</div>
    <div class="left"><img :src="item.img" alt="" /></div>
    <div class="center">
      <p>{{item.context}}</p>
      <p style="color: gray">{{item.title}}</p>
    </div>
    <div class="right"></div>
  </div>
  
</template>

<script setup>
const props = defineProps(
  {
    programRank:{
      type: Array,
      default: () => []
    }
  }
);
</script>

<style scoped lang="less">
.recomshowslist1 {
  display: grid;
  grid-template-columns: 20px 50px 180px 80px;
  grid-template-rows: 70px;
  gap:5px;
  align-items: center;
  height: 70px;
  font-size: 12px;
  .left img{
    width: 50px;
  }
  .right {
    margin-left: 10px;
    background-color: #c6c6c6;
    width: 84px;
    border-radius: 10px;
    height: 7px;
    text-align: center;
    line-height: 20px;
  }
  .showlistnum {
    font-size: 14px;
  }
}
.recomshowslist2 {
    background-color: #f7f7f7;
    display: grid;
  grid-template-columns: 20px 40px 180px 80px;
  grid-template-rows: 70px;
  gap:5px;
  align-items: center;
  height: 70px;
  font-size: 12px;

  .right {
    margin-left: 10px;
    background-color: #c6c6c6;
    width: 84px;
    border-radius: 10px;
    height: 7px;
    text-align: center;
    line-height: 20px;
  }
  .showlistnum {
    font-size: 14px;
  }
}
</style>
