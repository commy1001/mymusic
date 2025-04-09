<template>
  <main>
    <div class="top">
      <div class="top-left">
        <div class="topleft-text1">黑胶VIP</div>
        <div class="topleft-text2">立享超21项专属特权</div>
      </div>
      <div class="top-right">优惠购买</div>
    </div>
    <div class="center">
        登录网易云音乐,可以享受无线收藏的乐趣,并且无限同步到手机
    </div>
    <div class="bottom">
        用户登录
    </div>
  </main>
</template>
<script setup></script>
<style scoped>
main {
  transform: translateX(-20px);
  background: linear-gradient(to bottom, #ffffff, #f7f4f4, #e2e2e2);
  border: 1px solid gray;
  width: 350px !important;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  justify-content: center;
  height: 300px;
}
.bottom{
    background-color: #d61218;
    color: white;
    width: 150px;
    border-radius: 8px;
    height: 40px;
text-align: center;
line-height: 40px;
border: 2px solid rgb(173, 34, 34);

}
.center{
    width: 260px;
    color: gray;
    font-weight: 550;
}
.top {
  background: linear-gradient(
    to right,
    /* 从左到右：颜色从中间向两边渐变 */ #181414,
    #5f4e4e,
    #181414
  );
  display: flex;
  color: #f4bdab;
  width: 260px;
  height: 100px;
  justify-content: space-between;
  padding: 0 13px;
  align-items: center;
  border-radius: 16px;
}
.topleft-text1 {
  font-weight: 900;
}
.topleft-text2 {
  color: #a78c84;
  font-size: 14px;
}
.top-right {
  border-radius: 20px;
  height: 30px;
  color: #5f4e4e;
  font-weight: 600;
  text-align: center;
  line-height: 30px;
  background-color: #f4bdab;
  width: 100px;
}
</style>
