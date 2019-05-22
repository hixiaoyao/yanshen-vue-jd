<template>
  <div id="product">
    <top-bar>
      <div class="nav-tab">
        <ul class="flex">
          <li
            class="flex-item"
            :class="{active:index==navIndex}"
            @click="navIndex=index;"
            v-for="(item,index) in nav"
            :key="index"
          >
            <span v-text="item.title"></span>
          </li>
        </ul>
      </div>
    </top-bar>
    <br>
    <br>
    <br>
    <h1>{{ $route.params.id }}</h1>
    <bottom-bar v-model="show"></bottom-bar>

    <transition name="bounce" >
      <buy-bar v-model="show"></buy-bar>
    </transition>
  </div>
</template>

<script>
import TopBar from "@/components/TopBar";
import BottomBar from "@/components/BottomBar";
import BuyBar from "@/components/BuyBar";

export default {
  data() {
    return {
      navIndex: 0,
      nav: [
        { title: "商品" },
        { title: "评价" },
        { title: "详情" },
        { title: "推荐" }
      ],
      show: false
    };
  },
  methods: {
    buyshow() {
      this.show = true;
    }
  },
  components: {
    TopBar,
    BottomBar,
    BuyBar
  },
  created() {
    // 全局路由对象
    console.log(this.$router);
    // 当前页面的路由对象
    console.log(this.$route);

    //			console.log(this.$route.params.id);
  }
};
</script>

<style lang="less">
.nav-tab {
  padding: 0 0.6rem;
  line-height: 0.9rem;
  text-align: center;

  li.active span {
    color: #e4393c;
    padding-left: 0.26rem;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAYBAMAAAABjmA/AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAnUExURek7PUdwTO49Peg6Peo6Puc6Pek6POk6POg6POg7PeY8POg6POk6PApBjXgAAAANdFJOU/8ADttQPYvEqJYqW/KuifCQAAAAjklEQVQI10XOsRGCQBAF0D8eA6Imn4ERMh0tgDE2UDqgA2Ij7UA6gA6MjCnB0vzLBlxw92Z379+B/F7DgwQraI3C05AQc0ElfBCac40NOlzIE2LUuJM5gtpHMtPxc+yW1tuH15j8+hYHD1yhdPQoHO3yKG+GSNgbXsI81AocgNS+qlgLFwrrGNjFdFS9tj82HhIeoIR1QQAAAABJRU5ErkJggg==);
    background-size: 0.16rem;
    background-repeat: no-repeat;
    background-position: left center;
  }
}

// .fade-enter {
//   opacity: 0;
//   height: 0;
// }
// .fade-enter-active {
//   transition: all 5s;
// }
// .fade-enter-to {
//   height: 8rem;
//   opacity: 1;
// }
// /* 隐藏 */
// .fade-leave {
//   height: 8rem;
//   opacity: 1;
// }
// .fade-leave-active {
//   transition: all 5s;
// }
// .fade-leave-to {
//   opacity: 0;
//   height: 0;
// }

.bounce-enter-active {
	animation: bounce 2s linear;
}

.bounce-leave-active {
  animation: bounce 2s linear reverse;
}

@keyframes bounce {
  from {
    -webkit-transform: scale(0);
  }

  50% {
    -webkit-transform: scale(1.5);
  }
  to {
    -webkit-transform: scale(1);
  }
}
</style>