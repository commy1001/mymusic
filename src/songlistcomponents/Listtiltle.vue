<template>
  <link
    rel="stylesheet"
    href="//at.alicdn.com/t/c/font_4876995_cqpf0kd22a7.css"
  />
  <main>
    <div class="main-title">
      <div class="main-title1">
        <div class="left">全部</div>
        <div class="right">
          <button>选择分类<i class="iconfont icon-xialafuhao"></i></button>
        </div>
      </div>
      <div class="main-title2">
        <div class="hot">热门</div>
      </div>
    </div>
  </main>
</template>
<script setup></script>
<style lang="less" scoped>
@import url(@/style.less);
main {
  width: 100%;
  display: flex;
  justify-content: center;
}
.hot{
    .flex-center();
    .border();
    font-size: 15px;
    width: 60px;
    height: 30px;
    color: white;
    background-color: @primary;
}
.right button {
  width: 100px;
  border-radius: 4px;
  font-weight: 550;
  border: 1px solid rgb(187, 182, 182);
  color: @deepblue;
  height: 30px;
  background-color: #fafafa;
}
.main-title {
  display: flex;
  flex-direction: row;
  gap: 20px;
  border-bottom: 3px solid #c10d0c;
  padding-top: 10px;
  width: 700px;
  justify-content: space-between;
  font-size: 25px;
  align-items: center;
}
.main-title1 {
  box-sizing: border-box;
  display: flex;
  padding-bottom: 5px;
  gap: 10px;
  justify-content: center;
  align-items: flex-end;
}
.center {
  font-size: 14px;
  display: flex;
  color: gray;
  gap: 20px;
}

.left img {
  width: 20px;
  height: 25px;
}
.arrdown {
  font-size: 12px;
  color: #c10d0c;
  font-weight: 550;
  margin-left: 8px;
}
</style>
