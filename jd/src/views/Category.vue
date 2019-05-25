<template>
  <div id="category">
    <!-- 返回-标题-菜单组件 -->
    <top-bar></top-bar>
    <!-- 分类页面 -->
    <div class="warp flex">
      <!-- 分类左边导航栏 -->
      <div
        class="aside"
        ref="aside"
        @touchstart="ontouchstart"
        @touchmove="ontouchmove"
        @touchend="ontouchend"
        @touchcancel="ontouchcancel"
      >
        <ul :style="{top:tmp+'px'}" :class="{transition:transition}" ref="scroll">
          <li
            v-for="(item,index) in nav"
            :key="index"
            :class="{active:navIndex==index}"
            @click="onClick(index)"
          >{{item}}</li>
        </ul>
      </div>
      <!-- 分类内容 -->
      <div
        class="content flex-item"
        ref="content"
        @touchstart="ontouchstart1"
        @touchmove="ontouchmove1"
        @touchend="ontouchend1"
        @touchcancel="ontouchcancel1"
      >
        <ul class="clear" :style="{top:tmp1+'px'}" :class="{transition:transition}" ref="scroll1">
          <img src="@/assets/category/category1/xinrenli.png">
          <p>热门分类</p>
          <li
            v-for="(item,index) in nav2"
            :key="index"
            :class="{active:navIndex==index}"
            @click="onClick(index)"
          >
            <img :src="item.image" alt>
            <span v-text="item.title"></span>
          </li>
        </ul>
      </div>
    </div>

    <nav-bar></nav-bar>
  </div>
</template>

<script>
import TopBar from "@/components/TopBar";
import NavBar from "../components/NavBar";

export default {
  data() {
    return {
      //aside变量
      navIndex: 0,
      tmp: 0,
      offsetTop: 0,
      limitTop: 0,
      startY: 0,
      transition: false,
      nav: [
        "热门推荐",
        "手机数码",
        "家用电器",
        "电脑办公",
        "计生情趣",
        "美妆护肤",
        "个户清洁",
        "汽车生活",
        "京东超市",
        "男装",
        "男鞋",
        "女装",
        "女鞋",
        "母婴童装",
        "图书音像",
        "运动户外",
        "内衣配饰",
        "食品生鲜",
        "酒水饮料",
        "家具家装",
        "家居厨具",
        "箱包手袋",
        "钟表珠宝",
        "玩具乐器",
        "医药保健",
        "宠物生活",
        "礼品鲜花",
        "农资绿植",
        "生活旅行",
        "奢侈品",
        "海囤全球",
        "艺术邮币",
        "二手商品",
        "特产馆",
        "京东金融",
        "国际名牌",
        "拍卖",
        "房产",
        "工业品"
      ],
      //content变量
      tmp1: 0,
      offsetTop1: 0,
      limitTop1: 0,
      startY1: 0,

      nav2: [
        { title: "手机", image: require("@/assets/category/category1/1.png") },
        { title: "耳机", image: require("@/assets/category/category1/2.png") },
        { title: "华为", image: require("@/assets/category/category1/3.png") },
        {
          title: "电饭煲",
          image: require("@/assets/category/category1/4.png")
        },
        {
          title: "电磁炉",
          image: require("@/assets/category/category1/5.png")
        },
        {
          title: "路由器",
          image: require("@/assets/category/category1/6.png")
        },
        {
          title: "避孕套",
          image: require("@/assets/category/category1/7.png")
        },
        { title: "口红", image: require("@/assets/category/category1/8.png") },
        {
          title: "吹风机",
          image: require("@/assets/category/category1/9.png")
        },
        {
          title: "三只松鼠",
          image: require("@/assets/category/category1/10.png")
        },
        {
          title: "洗衣液",
          image: require("@/assets/category/category1/11.png")
        },
        {
          title: "保温杯",
          image: require("@/assets/category/category1/12.png")
        },
        {
          title: "微波炉",
          image: require("@/assets/category/category1/13.png")
        },
        {
          title: "洗发水",
          image: require("@/assets/category/category1/14.png")
        },
        {
          title: "卫生巾",
          image: require("@/assets/category/category1/15.png")
        },
        { title: "冰箱", image: require("@/assets/category/category1/16.png") },
        {
          title: "洗衣机",
          image: require("@/assets/category/category1/17.png")
        },
        { title: "电视", image: require("@/assets/category/category1/18.png") }
      ]
    };
  },
  methods: {
    ontouchstart(e) {
      // 获取开始的位置
      this.startY = e.changedTouches[0].clientY;
      this.transition = false;
    },
    ontouchmove(e) {
      let y = e.changedTouches[0].clientY;
      // 计算滑动的距离
      this.tmp = this.offsetTop + y - this.startY;
      // 限定滑动的长度（150）
      this.tmp = this.tmp > 150 ? 150 : this.tmp;
      this.tmp = this.tmp < this.limitTop ? this.limitTop : this.tmp;
      console.log(this.$refs["aside"].offsetHeight);
      console.log(this.$refs["scroll"].offsetHeight);
    },

    ontouchend(e) {
      // 返回顶部
      this.tmp = this.tmp > 0 ? 0 : this.tmp;
      this.tmp =
        this.tmp < this.limitTop + 150 ? this.limitTop + 150 : this.tmp;
      this.offsetTop = this.tmp;
      this.transition = true;
    },
    ontouchcancel(e) {
      // 返回顶部
      this.tmp = this.tmp > 0 ? 0 : this.tmp;
      this.tmp =
        this.tmp < this.limitTop + 150 ? this.limitTop + 150 : this.tmp;
      this.offsetTop = this.tmp;
      this.transition = true;
    },
    onClick(index) {
      this.navIndex = index;
      // 根据 索引值计算滚动的距离
      //scroll的总高*
      this.tmp =
        this.$refs["scroll"].offsetHeight *
        (this.navIndex / this.nav.length) *
        -1;
      // console.log(this.tmp);
      // 越界处理
      this.tmp = this.tmp > 0 ? 0 : this.tmp;
      this.tmp =
        this.tmp < this.limitTop + 150 ? this.limitTop + 150 : this.tmp;
      this.offsetTop = this.tmp;
      this.transition = true;
    },
    // 热门推荐触摸滑动开始
    ontouchstart1(e) {
      // 获取开始的位置
      this.startY1 = e.changedTouches[0].clientY;
      this.transition = false;
    },
    ontouchmove1(e) {
      let y1 = e.changedTouches[0].clientY;
      // 计算滑动的距离
      this.tmp1 = this.offsetTop1 + y1 - this.startY1;
      // 限定滑动的长度（150）
      this.tmp1 = this.tmp1 > 150 ? 150 : this.tmp1;
      this.tmp1 = this.tmp1 < this.limitTop1 ? this.limitTop1 : this.tmp1;
      console.log(this.$refs["content"].offsetHeight);
      console.log(this.$refs["scroll1"].offsetHeight);
      console.log(this.limitTop1);
    },

    ontouchend1(e) {
      // 返回顶部
      this.tmp1 = this.tmp1 > 0 ? 0 : this.tmp1;
      this.tmp1 =
        this.tmp1 < this.limitTop1 + 150 ? this.limitTop1 + 150 : this.tmp1;
      this.offsetTop1 = this.tmp1;
      this.transition = true;
    },
    ontouchcancel1(e) {
      // 返回顶部
      this.tmp1 = this.tmp1 > 0 ? 0 : this.tmp1;
      this.tmp1 =
        this.tmp1 < this.limitTop1 + 150 ? this.limitTop1 + 150 : this.tmp1;
      this.offsetTop1 = this.tmp1;
      this.transition = true;
    }

    //热门推荐触摸滑动结束
  },
  components: {
    TopBar,
    NavBar
  },
  mounted() {
    // 计算滑动到底部的限定值
    this.limitTop =
      this.$refs["aside"].offsetHeight -
      this.$refs["scroll"].offsetHeight -
      150;

    //计算推荐滑动到底部的限定值

    this.limitTop1 =
      this.$refs["content"].offsetHeight -
      this.$refs["scroll1"].offsetHeight -
      150;
  }
};
</script>
<style lang="less">
#category {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 0.9rem 0 0.9rem;

  // background-color: red;
  .warp {
    height: 100%;
  }

  .aside {
    height: 100%;
    overflow: hidden;
    position: relative;
    width: 1.72rem;
    background: #f8f8f8;

    ul {
      position: absolute;
      width: 100%;
      text-align: center;
      line-height: 0.92rem;
      li {
        &.active {
          color: red;
        }
      }
    }
  }
  .content {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;

    background: #f8f8f8;
    padding: 0 0.2rem;
    box-sizing: border-box;

    ul {
      position: absolute;
      width: 5.38rem;
      text-align: center;
      left: 0.2rem;

      img {
        width: 100%;
        box-sizing: border-box;
        // margin: 0.14rem 0.14rem 0;
      }
      p {
        text-align: left;
        font-size: 0.28rem;
        font-weight: 700;
        color: #333;
        line-height: 1rem;
      }
      li {
        float: left;
        width: 32%;
        // text-align: center;
        img {
          width: 1.4rem;
          height: 1.4rem;
          display: block;
          margin: 0 auto;
        }
        span {
          width: 100%;
          height: 0.7rem;
          line-height: 0.7rem;
          color: #333;
          font-size: 0.24rem;
          margin-top: 2px;
        }
        &.active {
          color: red;
        }
      }
    }
  }

  .transition {
    transition: top 0.3s linear;
  }
}
</style>
