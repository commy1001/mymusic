<template>
  <div class="livetv-main">
    <!-- 第一排 -->
    <div
      class="recomshowslist1"
      v-for="(item, index) in programItem1one"
      :key="item.id || index"
    >
      <div class="left">
        <img :src="item.img || '/default-image.jpg'" alt="" />
      </div>
      <div class="center">
        <p style="font-size: 15px; font-weight: 600">
          {{ item.title || "默认标题" }}
        </p>
        <p style="color: gray">
          {{ item.context || "暂无描述" }}
        </p>
      </div>
    </div>

    <!-- 条件渲染分割线 -->
    <div class="divider-container" v-if="programItem1two.length > 0"></div>

    <!-- 第二排 -->
    <div
      class="recomshowslist1"
      v-for="(item, index) in programItem1two"
      :key="item.id || index + 2"
    >
      <div class="left">
        <img :src="item.img || '/default-image.jpg'" alt="" />
      </div>
      <div class="center">
        <p style="font-size: 15px; font-weight: 600">
          {{ item.title || "默认标题" }}
        </p>
        <p style="color: gray">
          {{ item.context || "暂无描述" }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  programItem1: {
    type: Array,
    default: () => [],
  },
});

const programItem1one = computed(() => props.programItem1.slice(0, 2));
const programItem1two = computed(() => props.programItem1.slice(2, 4));
</script>

<style scoped lang="less">
.livetv-main {
  width: 100%;
  display: grid;
  justify-content: center;
  grid-template-columns: 350px 350px;
  grid-template-rows: auto 1px auto; /* 三行布局 */
  gap: 20px 40px;
}

/* 单条分割线样式 */
.divider-container {
  grid-column: 1 / -1; /* 横跨所有列 */
  height: 1px;
  background-color: rgb(194, 190, 190);
  margin: 10px 0;
}

.recomshowslist1 {
  display: grid;
  grid-template-columns: 120px 180px;
  gap: 20px;
  align-items: center;
  height: 160px;
  font-size: 12px;

  .center {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .left img {
    width: 120px;
    height: 120px;
  }
}
</style>
