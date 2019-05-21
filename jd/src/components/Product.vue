<template>
  <ul class="product clear">
    <li class="left" v-for="(item,index) in nav" :key="index">
      <a :href="item.url">
        <img :src="item.image">
      </a>
      <p >
        <span class="title_tag" v-text="item.title_tag"></span>{{item.title}}
      </p>
      <span class="price" v-text="item.price"></span>
      <span class="price_tag" :class="{none:isNone}" v-text="item.price_tag"></span>
      <span class="price_tag1">看相似</span>
    </li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      nav: [
        {
          title_tag: "",
          title: "女鞋帆布鞋低帮百搭复古板鞋学生鞋子女 军米色 35码 ",
          url: "#",
          image: require("../assets/product/1.jpg"),
          price: "￥" + 329,
          price_tag: "满减"
        },
        {
          title_tag: "",
          title:
            "大孚飞跃feiyue男女复古原宿风米色休闲情侣低帮帆布小白鞋 938 米色 34 ",
          url: "#",
          image: require("../assets/product/2.jpg"),
          price: "￥" + 128,
          price_tag: "满减"
        },
        {
          title_tag: "",
          title:
            "英国高旅/Go travel隔音耳塞防噪男女降噪睡眠睡觉静音耳塞飞机减压防打呼噜旅行配件894官方 白色 ",
          url: "#",
          image: require("../assets/product/3.jpg"),
          price: "￥" + 148,
          price_tag: "满减"
        },
        {
          title_tag: "自营",
          title:
            "荣耀MagicBook 2019 14英寸轻薄窄边框笔记本电脑（AMD锐龙5 3500U 8G 512G FHD IPS 指纹解锁）星云紫 ",
          url: "#",
          image: require("../assets/product/4.jpg"),
          price: "￥" + 3899,
          price_tag: "满减"
        },
        {
          title_tag: "京东物流",
          title:
            "【2019新品】骆驼户外男女徒步鞋春夏耐磨透气系带低帮登山徒步鞋 卡其，男，A912303085 41 ",
          url: "#",
          image: require("../assets/product/5.jpg"),
          price: "￥" + 258,
          price_tag: "闪购"
        },
         {
          title_tag: "",
          title:
            "㏖网红旅行包女短途小背型李手提轻便可爱飞机随身携带拉杆箱上面的 【加强版】孔雀蓝 肩带款 中 ",
          url: "#",
          image: require("../assets/product/6.jpg"),
          price: "￥" + 163,
          price_tag: "拼购"
        }

      ],
      isNone:false,

    };
  },
  
  
};
</script>
<style lang="less">
.product {
  width: 100%;
  text-align: center;
  li {
    position: relative;
    width: 48%;
    background-color: #ffffff;
    margin: 0.05rem;
    padding-bottom: 0.8rem;

    p {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      .title_tag{
          background-color: #e4393c;
          color: #ffffff;
          border-radius: 0.1rem;
          font-size: 0.28rem;
          padding: 0 0.1rem ;


      }
    }

    span {
      display: inline-block;
    }
    .price {
      position: absolute;
      color: #f23030;
      width: 35%;
      text-align: left;
      left: 0;
      font-size: 0.32rem;
    }
    .price_tag {
      position: absolute;
      left: 36%;
      color: #e4393c;
      border: solid 1px #e4393c;
      //   width: 25%;
      padding: 0 4px;
      font-size: 0.24rem;
    }
    .price_tag1 {
      position: absolute;
      right: 0;
      width: 30%;
      border: solid 1px #bfbfbf;
      background-color: #f6f6f6;
      margin-right: 4%;
    }
  }
  img {
    width: 100%;
    display: inline-block;
  }
  .none{
      display: none;
  }
}
</style>
