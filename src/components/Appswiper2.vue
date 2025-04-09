<template>
  <main>
    <div class="swiper-outer-container">
      <div class="swiper-wrapper-container">
        <Swiper
          :modules="modules"
          :navigation="{
            nextEl: '.custom-next',
            prevEl: '.custom-prev'
          }"
          :slides-per-view="5"
          :slides-per-group="1"
          :space-between="20"
          :loop="true"
          class="my-custom-swiper"
        >
          <SwiperSlide v-for="(image, index) in images" :key="index">
            <div class="slide-content">
              <img :src="image" :alt="'Image ' + (index + 1)" class="slide-image">
            </div>
          </SwiperSlide>
        </Swiper>
        
        <div class="custom-nav">
          <div class="custom-prev"></div>
          <div class="custom-next"></div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
// 正确导入方式 - 注意首字母大写
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

// 定义数据
const images = [
  '/swiper2img/image1.jpg',
  '/swiper2img/image2.jpg',
  '/swiper2img/image3.jpg',
  '/swiper2img/image4.jpg',
  '/swiper2img/image5.jpg',
  '/swiper2img/image6.jpg',
  '/swiper2img/image1.jpg',
  '/swiper2img/image1.jpg',
  '/swiper2img/image1.jpg',
  '/swiper2img/image1.jpg'
];

const modules = [Navigation];
</script>

<style scoped>
/* 保持之前的样式不变 */
.swiper-outer-container {
  border: 1px solid rgb(170, 164, 164);
  width: 740px;
  background-color: #f5f5f5;
  padding: 15px 0;
  margin: 0 auto;
  margin-top: 20px;
}

.swiper-wrapper-container {
  position: relative;
  width: 700px;
  height: 150px;
  margin: 0 auto;
}

.my-custom-swiper {
  height: 100%;
}

.my-custom-swiper :deep(.swiper-wrapper) {
  align-items: center;
}

.slide-content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.slide-image {
  width: 100px;
  height: 100px;
  object-fit: cover;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.custom-nav {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.custom-prev,
.custom-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
  cursor: pointer;
  pointer-events: auto;
  z-index: 10;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  transition: all 0.2s ease;
}

.custom-prev {
  left: -20px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23919191'%3E%3Cpath d='M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z'/%3E%3C/svg%3E");
}

.custom-next {
  right: -20px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23919191'%3E%3Cpath d='M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z'/%3E%3C/svg%3E");
}

.custom-prev:hover {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23000'%3E%3Cpath d='M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z'/%3E%3C/svg%3E");
  transform: translateY(-50%) scale(1.1);
}

.custom-next:hover {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23000'%3E%3Cpath d='M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z'/%3E%3C/svg%3E");
  transform: translateY(-50%) scale(1.1);
}
</style>