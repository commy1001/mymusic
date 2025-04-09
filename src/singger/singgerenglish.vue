<template>
    <div class="navbar">
      <span class="hot">热门</span>
      <div class="alphabet">
        <span v-for="letter in alphabet" :key="letter">
          {{ letter }}
        </span>
      </div>
      <span>其他</span>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    setup() {
      const alphabet = ref('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''));
  
      return {
        alphabet,
      };
    },
  };
  </script>
  
  <style scoped>
  .navbar {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 700px;
    margin-bottom: 20px;
  }
  
  .hot {
    background-color: #d32f2f;
    color: white;
    padding: 5px 10px;
    border-radius: 3px;
  }
  
  .alphabet {
    display: flex;
    gap: 13px;
  }
  
  .alphabet span {
    cursor: pointer;
    font-size: 16px;
  }
  </style>