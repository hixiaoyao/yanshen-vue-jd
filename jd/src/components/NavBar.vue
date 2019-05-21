<template>
  <ul class="nav-bar clear">
    <li class="left" v-for="(item,index) in nav" :key="index">
      <Router-Link :to="item.url">
        <img :src="item.url==current?item.active_icon:item.icon">
      </Router-Link>
    </li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      current: "/",
      nav: [
        {
          url: "/",
          icon: require("../assets/icons/home.png"),
          active_icon: require("@/assets/icons/home_active.png")
        },
        {
          url: "/category",
          icon: require("@/assets/icons/category.png"),
          active_icon: require("@/assets/icons/category_active.png")
        },
        {
          url: "/pin",
          icon: require("@/assets/icons/pin.png"),
          active_icon: require("@/assets/icons/pin_active.png")
        },
        {
          url: "/cart",
          icon: require("@/assets/icons/cart.png")
        },
        {
          url: "/user",
          icon: require("@/assets/icons/user.png"),
          active_icon: require("@/assets/icons/user_active.png")
        }
      ]
    };
  },
  mounted() {
    // 当前路由对象  this.$route
    // 获取当前的路径
    this.current = this.$route.path;
  }
};
</script>
<style lang="less">
.nav-bar {
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0 0 10px 0 hsla(0, 6%, 58%, 0.6);
  z-index: 999;

  li {
    // float: left;
    width: 20%;
    text-align: center;
  }
  img {
    width: 1.2rem;
  }
}
</style>
