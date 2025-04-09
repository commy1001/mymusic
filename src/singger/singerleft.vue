<template>
    <div class="artist-category">
      <!-- 推荐 -->
      <div class="category-group">
        <h3 class="category-title">推荐</h3>
        <ul class="category-list">
          <li class="category-item" style="color:#c20c0c;">• 推荐歌手</li>
          <li class="category-item">• 入驻歌手</li>
        </ul>
      </div>
  
      <!-- 华语 -->
      <div class="category-group">
        <h3 class="category-title">华语</h3>
        <ul class="category-list">
          <li class="category-item">• 华语男歌手</li>
          <li class="category-item">• 华语女歌手</li>
          <li class="category-item">• 华语组合乐队</li>
        </ul>
      </div>
  
      <!-- 欧美 -->
      <div class="category-group">
        <h3 class="category-title">欧美</h3>
        <ul class="category-list">
          <li class="category-item">• 欧美男歌手</li>
          <li class="category-item">• 欧美女歌手</li>
          <li class="category-item">• 欧美组合乐队</li>
        </ul>
      </div>
  
      <!-- 日本 -->
      <div class="category-group">
        <h3 class="category-title">日本</h3>
        <ul class="category-list">
          <li class="category-item">• 日本男歌手</li>
          <li class="category-item">• 日本女歌手</li>
          <li class="category-item">• 日本组合乐队</li>
        </ul>
      </div>
  
      <!-- 韩国 -->
      <div class="category-group">
        <h3 class="category-title">韩国</h3>
        <ul class="category-list">
          <li class="category-item">• 韩国男歌手</li>
          <li class="category-item">• 韩国女歌手</li>
          <li class="category-item">• 韩国组合乐队</li>
        </ul>
      </div>
  
      <!-- 其他 -->
      <div class="category-group">
        <h3 class="category-title">其他</h3>
        <ul class="category-list">
          <li class="category-item">• 其他男歌手</li>
          <li class="category-item">• 其他女歌手</li>
          <li class="category-item">• 其他组合乐队</li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ArtistCategory'
  }
  </script>
  
  <style scoped>
  .artist-category {
    width: 150px;
    border: 1px solid #ccc;
    background-color: #f9f9f9;
    padding: 15px;
    font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
  }
  
  .category-group {
    margin-bottom: 20px;
  }
  
  .category-title {
    font-size: 16px;
    color: #333;
    margin: 0 0 10px 0;
    font-weight: 600;
  }
  
  .category-list {
    list-style: none;
    padding-left: 15px;
    margin: 0;
  }
  
  .category-item {
    padding: 5px 0;
    font-size: 14px;
    color: #666;
    line-height: 1.5;
  }
  </style>