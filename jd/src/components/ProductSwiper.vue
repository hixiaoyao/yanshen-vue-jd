<template>
  <!-- Swiper -->
  <div class="swiper-container" :class="{preview:preview}" @click="preview=!preview">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item,index) in images" :key="index">
        <img :src="item">
      </div>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
// cnpm install swiper --save
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";

export default {
  data() {
    return {
      preview: false,
      swiper: null,
      images: [
        require("@/assets/product/1-1.jpg"),
        require("@/assets/product/1-2.jpg"),
        require("@/assets/product/1-3.jpg"),
        require("@/assets/product/1-4.jpg")
      ]
    };
  },
  methods: {},
  created() {},
  // 渲染完成
  mounted() {
    this.swiper = new Swiper(".swiper-container", {
      loop: true,
      pagination: {
        el: ".swiper-pagination"
      },
      autoplay: true
    });
  }
};
</script>

<style>
.swiper-container {
  width: 100%;
}

.swiper-container img {
  width: 100%;
}
.preview {
  height: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: black;
  padding-top: 3rem;
  z-index: 300;
}
.swiper-pagination {
  z-index: 9999;
  bottom: 10px;
  left: 0;
  width: 100%;
}

.swiper-pagination .swiper-pagination-bullet {
  margin: 0 4px;
}
</style>