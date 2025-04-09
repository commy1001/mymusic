<template>
    <div class="pagination">
      <button @click="prevPage" :disabled="currentPage === 1">< 上一页</button>
      <span v-for="page in pages" :key="page" @click="goToPage(page)" :class="{ active: page === currentPage }" class="pages">
        {{ page }}
      </span>
      <button @click="nextPage" :disabled="currentPage === totalPages">下一页 ></button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentPage: 1,
        totalPages: 19,
      };
    },
    computed: {
      pages() {
        const start = Math.max(1, this.currentPage - 3);
        const end = Math.min(this.totalPages, this.currentPage + 3);
        return Array.from({ length: end - start + 1 }, (_, i) => start + i);
      },
    },
    methods: {
      goToPage(page) {
        if (page >= 1 && page <= this.totalPages) {
          this.currentPage = page;
        }
      },
      prevPage() {
        if (this.currentPage > 1) {
          this.currentPage--;
        }
      },
      nextPage() {
        if (this.currentPage < this.totalPages) {
          this.currentPage++;
        }
      },
    },
  };
  </script>
  
  <style scoped lang="less">
  @import url(@/style.less);
  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    margin: 20px;
    width: 100%;
  }
  button{
    width: 70px;
    border: 1px solid rgb(198, 192, 192);
    background-color: #eaeaea;
    height: 25px;
  }
  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  .active {
    background-color:@primary;
    color: white;
  }
  .pages{
    border: 1px solid rgb(186, 185, 185);
    width: 25px;
    border-radius: 3px;
    height: 25px;
    text-align: center;
    line-height: 25px;
  }
  </style>