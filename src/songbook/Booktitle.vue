<template>
    <link
      rel="stylesheet"
      href="//at.alicdn.com/t/c/font_4876995_rnrcktj3j3.css"
    />
      <div class="main-title">
        <div class="main-title1">
          <div class="left"><slot></slot></div>
        </div>
        <div class="main-title2">
          <div class="right">更多 ></div>
        </div>
      </div>
  </template>
  <script setup></script>
  <style scoped>

  .main-title {
    display: flex;
    flex-direction: row;
    gap: 20px;
    border-bottom: 3px solid #c10d0c;
    padding-top: 10px;
    width: 350px;
    justify-content: space-between;
    font-size: 25px;
    align-items: center;
  }
  .main-title1{
      display: flex;
      gap:10px;
      justify-content: center;
      align-items: center;
  }
  .center {
    font-size: 14px;
    display: flex;
    color: gray;
    gap: 20px;
  }
  .left {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
  .right {
    font-size: 12px;
    color: gray;
  }
  .left img {
    width: 20px;
    height: 25px;
  }
  .icon-arrdown {
    font-size: 12px;
    color: #c10d0c;
    margin-left: 8px;
  }
  </style>
  