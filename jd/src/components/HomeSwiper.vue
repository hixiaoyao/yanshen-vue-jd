<template>

	<!-- Swiper -->
	<div class="swiper-container">
		<div class="swiper-wrapper">
			<div class="swiper-slide" v-for="(item,index) in images" :key="index">
				<img :src="item" />
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
				swiper: null,
				images: [require('@/assets/images/1.jpg'), require('@/assets/images/2.jpg'), require('@/assets/images/3.jpg'), require('@/assets/images/4.jpg')]
			};
		},
		methods: {},
		created() {},
		// 渲染完成
		mounted() {
			this.swiper = new Swiper('.swiper-container', {
				loop: true,
				pagination: {
					el: '.swiper-pagination',
				},
				autoplay: true
			});
		}
	}
</script>

<style>
	.swiper-container {
		width: 100%;
	}
	
	.swiper-container img {
		width: 100%;
	}
</style>