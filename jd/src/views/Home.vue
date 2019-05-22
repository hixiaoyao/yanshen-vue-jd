<template>
  <div class="home">
  	<search-bar></search-bar>
    <swiper></swiper>
    <quick-nav></quick-nav>
    <product-list></product-list>
    <div style="height:1000px"></div>
    <nav-bar></nav-bar>

  </div>
</template>

<script>

import SearchBar from "@/components/SearchBar";
import Swiper from "../components/HomeSwiper";
import QuickNav from "../components/QuickNav";
import NavBar from "../components/NavBar";
import ProductList from "../components/ProductList";


export default {
  name: 'home',
  components: {
    SearchBar,
    Swiper,
    QuickNav,
    NavBar,
    ProductList,
  }
}




</script>
