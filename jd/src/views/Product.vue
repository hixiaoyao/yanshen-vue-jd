<template>
  <div id="product">
    <top-bar>
      <div class="nav-tab">
        <ul class="flex">
          <li
            class="flex-item"
            :class="{active:index==navIndex}"
            @click="navIndex=index;scrollTop(item.top);"
            v-for="(item,index) in nav"
            :key="index"
          >
            <span v-text="item.title"></span>
          </li>
        </ul>
      </div>
    </top-bar>
    <div style="height:0.9rem;"></div>

    <div ref="product" style="height:1000px;">
      <swiper></swiper>
    </div>

    <div ref="comment" style="height: 1000px;">
      <h1>评价</h1>
    </div>

    <div ref="detail" style="height: 1000px;">
      <h1>详情</h1>
    </div>

    <div ref="recommend" style="height: 1000px;">
      <h1>推荐</h1>
    </div>
    <!-- <h1>{{ $route.params.id }}</h1> -->
    <!-- 组件back-top没有@click时间，需要在组件内输出一个自定义时间 -->
    <back-top @click="backTop" :style="{display:show1?'block':'none'}"></back-top>
    <bottom-bar></bottom-bar>
  </div>
</template>

<script>
import TopBar from "@/components/TopBar";
import BottomBar from "@/components/BottomBar";
import Swiper from "../components/ProductSwiper";
import BackTop from "../components/BackTop";

export default {
  data() {
    return {
      navIndex: 0,
      nav: [
        { title: "商品", top: 0 },
        { title: "评价", top: 0 },
        { title: "详情", top: 0 },
        { title: "推荐", top: 0 }
      ],
      show: false,
      show1: false
    };
  },

  components: {
    TopBar,
    BottomBar,
    Swiper,
    BackTop
  },
  methods: {
    getTopOffset() {
      this.nav[0].top = this.$refs["product"].offsetTop;
      this.nav[1].top = this.$refs["comment"].offsetTop;
      this.nav[2].top = this.$refs["detail"].offsetTop;
      this.nav[3].top = this.$refs["recommend"].offsetTop;
      // console.log(this.nav);
    },
    //点击上面图标进行跳转动画
    scrollTop(val) {
      // 当前值
      let scrollTop =
        document.documentElement.scrollTop ||
        window.pageYOffset ||
        document.body.scrollTop;
      // 目标值
      let target = val - 50;
      // 动画时长
      let duration = 3000;
      // 动画次数
      let count = 200;
      // 时间片
      let timeOut = duration / count;
      // 步进值
      let step = (target - scrollTop) / count;

      let t = setInterval(() => {
        scrollTop += step;
        document.documentElement.scrollTop = scrollTop;
        count--;
        if (count <= 0) {
          clearInterval(t);
        }
      }, timeOut);

      document.documentElement.scrollTop = val - 50;
    },
    backTop() {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
  },
  created() {
    // 全局路由对象
    console.log(this.$router);
    // 当前页面的路由对象
    console.log(this.$route);

    //			console.log(this.$route.params.id);

    window.addEventListener("scroll", () => {
      var scrollTop =
        document.documentElement.scrollTop ||
        window.pageYOffset ||
        document.body.scrollTop;
      if (scrollTop >= 1050) {
        this.show1 = true;
      } else {
        this.show1 = false;
      }
      // console.log(this.show1);
      // console.log(scrollTop);

      this.nav.forEach((item, index) => {
        if (Math.abs(item.top - scrollTop) < 80) {
          this.navIndex = index;
          // console.log(item.top);
        }
      });
    });
  },
  mounted() {
    this.getTopOffset();
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

// .bounce-enter-active {
//   animation: bounce 2s linear;
// }

// .bounce-leave-active {
//   animation: bounce 2s linear reverse;
// }

// @keyframes bounce {
//   from {
//     -webkit-transform: translateY(100%);
//   }

//   50% {
//     -webkit-transform: translateY(100%);
//   }
//   to {
//     -webkit-transform: translateY(0%);
//   }
// }
</style>