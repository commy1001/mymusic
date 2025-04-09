<template>
    <main>
      <div class="main-title">
        <div class="main-title1">
          <div class="left">歌曲列表</div>
          <div class="right">100首歌</div>
        </div>
        <div class="main-title2">
          <div class="right">播放 <span class="arrdown">6200452608</span>次</div>
        </div>
      </div>
    </main>
  </template>
  <script setup></script>
  <style scoped>
  main {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .right{
    color: gray;
    margin-bottom: 5px;
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
  .main-title1{
    box-sizing: border-box;
      display: flex;
      padding-bottom: 5px;
      gap:10px;
      justify-content: center;
     align-items: flex-end;
  }
  .center {
    font-size: 14px;
    display: flex;
    color: gray;
    gap: 20px;
  }
  .right {
    font-size: 12px;
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
  