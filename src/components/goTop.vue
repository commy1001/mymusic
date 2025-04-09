<template>
    <link rel="stylesheet" href="//at.alicdn.com/t/c/font_4876995_sb6u6jztglr.css">
    <button 
      v-show="isVisible" 
      @click="scrollToTop"
      class="back-to-top"
    >
      <i class="iconfont icon-huidaodingbu"></i>
      TOP
    </button>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isVisible: false
      }
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll)
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.handleScroll)
    },
    methods: {
      handleScroll() {
        this.isVisible = window.scrollY > 300
      },
      scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
      }
    }
  }
  </script>
  
  <style scoped lang="less">
  @import url(@/style.less);
  .back-to-top {
    position: fixed;
    bottom: 20px;
    right: 50px;
    width: 44px;
    height: 54px;
    color: gray;
    border: 1px solid rgb(184, 184, 184);
    border-radius:4px;
    cursor: pointer;
    background-color: white;
    transition: all 0.3s;
    z-index: 1000;
  }
  
  .back-to-top:hover {
    background-color: #ededed;
  }
  </style>