<template>
    <link rel="stylesheet" href="//at.alicdn.com/t/c/font_4876995_w39h4vzyql.css">
  <main>
    <div class="img">
      <img src="/apprankimg/avatarimg.jpg" alt="" />
    </div>
    <div class="com-right">
      <div class="commenttext"><input type="text" placeholder="评论" /></div>
      <div class="comicon">
        <i class="iconfont icon-haopingxiaolian-xianxing" style="color:rgb(168, 167, 167);font-weight: 600;font-size: 20px;"></i>
        <i class="iconfont icon-aite" style="color:rgb(168, 167, 167);font-weight: 600;font-size: 20px;"></i>
        <div style="color: gray;">140</div>
        <div class="combtn">评论</div>
      </div>
    </div>
  </main>
</template>

<script setup></script>

<style scoped>
.combtn{
    width: 60px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    color: white;
    border-radius: 3px;
    border: 1px solid black;
    background-color:#2d7dca;
}
.comicon{
    width: 620px;
    display: grid;
    grid-template-columns:30px 500px 40px 30px ;
    grid-template-rows: 50px;
    align-items: center;
}
img {
  width: 50px;
  height: 50px;
}
main {
  display: flex;
  width: 700px;
  height: 140px;
  justify-content: center;
  margin-top: 20px;
  gap: 20px;
}
.commenttext {
  width: 620px;
  padding-left: 10px;
  height: 70px;
  border: 1px solid rgb(168, 167, 167);
}
input {
  border: none;
  background-color: transparent;
}
input:focus {
  outline: none;
}


</style>
