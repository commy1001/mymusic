<template>
  <div class="full-width-container">
    <div class="bg-overlay left-bg" :style="{ background: leftBgColor }"></div>
    <div class="bg-overlay right-bg" :style="{ background: rightBgColor }"></div>
    
    <div class="swiper-content-wrapper">
      <swiper
        :slides-per-view="1"
        :space-between="10"
        :modules="modules"
        :autoplay="autoplayOptions"
        navigation
        :pagination="{ clickable: true }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide v-for="i in 5" :key="i">
          <img :src="`swiperimg/image${i}.jpg`" alt="">
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// 定义左右两侧的渐变色对
const colorPairs = [
  { left: "linear-gradient(to left, red, #2d2928)", right: "linear-gradient(to right, red, #2d2928)" },
  { left: "linear-gradient(to left,black, #fdeb05)", right: "linear-gradient(to right,black, #fdeb05)" },
  { left: "linear-gradient(to left, black, #f6c443)", right: "linear-gradient(to right,black, #f6c443)" },
  { left: "linear-gradient(to left,black, #a8a8a8)", right: "linear-gradient(to right,black, #a8a8a8)" },
  { left: "linear-gradient(to left,black, #8a8888)", right: "linear-gradient(to right,black, #8a8888)" }
];

const leftBgColor = ref(colorPairs[0].left);
const rightBgColor = ref(colorPairs[0].right);
const swiperInstance = ref(null);

// 自动播放配置
const autoplayOptions = ref({
  delay: 3000,
  disableOnInteraction: false,
  pauseOnMouseEnter: true
});

const modules = [Navigation, Pagination, Autoplay];

const onSwiper = (swiper) => {
  swiperInstance.value = swiper;
};

const onSlideChange = () => {
  if (swiperInstance.value) {
    const index = swiperInstance.value.activeIndex % colorPairs.length;
    leftBgColor.value = colorPairs[index].left;
    rightBgColor.value = colorPairs[index].right;
  }
};
</script>

<style scoped>
.full-width-container {
  width: 100%;
  height: 400px;
  position: relative;
  background: #f5f5f5;
}

.bg-overlay {
  position: absolute;
  top: 0;
  width:1000px;
  height: 100%;
  transition: background 0.5s ease;
  z-index: 0;
}

.left-bg {
  left: 0;
}

.right-bg {
  right: 0;
}

.swiper-content-wrapper {
  transform: translateX(-50px);
  height: 400px;
  width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.swiper {
  width: 100%;
  height: 400px;
  display: flex;
  align-items: center;
}

.swiper-slide {
  height: 100% !important;
  display: flex !important;
  align-items: center;
  justify-content: center;
}

.swiper-slide img {

  height: 100% !important;
  width:1000px;
 
  object-fit: cover; 
}
</style>

<style>
.swiper-button-next,
.swiper-button-prev {
  color: white !important;
  width: 40px !important;
  height: 60px !important;
  transition: all 0.3s ease;
  z-index: 10 !important;
}

.swiper-button-next:hover,
.swiper-button-prev:hover {
  background: #807e7e !important;
  font-weight: 450 !important;
}

.swiper-button-next:after,
.swiper-button-prev:after {
  font-size: 30px !important;
  font-weight: 450 !important;
}

.swiper-pagination {
  position: absolute;
  bottom: 10px !important;
}

.swiper-pagination-bullet {
  --swiper-pagination-color: #ff0000;
  --swiper-pagination-bullet-inactive-color: #d7d2d2;
  --swiper-pagination-bullet-inactive-opacity: 1;
  --swiper-pagination-bullet-size: 8px;
  --swiper-pagination-bullet-horizontal-gap: 4px;
  z-index: 10 !important;
 
  cursor: pointer;
}
</style>