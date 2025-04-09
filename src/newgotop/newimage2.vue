<template>
   <div class="new-main">
<div class="newitem" v-for="item in album2" :key="item.id">
   <div class="img"><img :src="item.discImg" alt=""></div>
   <div class="newenglish">{{item.discContent}}</div>
   <div class="smallenglis">{{item.discAuthor}}</div>
</div>

</div>
</template>

<script setup>
const props = defineProps({
  album2:{
       type:Array,
       default:()=>[]
   }
   
})
</script>

<style scoped>
.new-main{
   margin-top: 20px;
   display: grid;
   width: 750px;
   grid-template-columns: 150px 150px 150px 150px 150px;
   grid-template-rows: 200px;
   gap: 5px;
}
.smallenglis{
   color: gray;
   font-size: 12px;
}
</style>