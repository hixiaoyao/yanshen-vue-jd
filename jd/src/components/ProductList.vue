<template>
  <ul class="product clear">
    <li class="left" v-for="(item,index) in nav" :key="index">
      <!-- 拼凑一个商品id -->
      <!-- <router-link :to="'/product/'+item.id"> -->
      <!-- 通过path 跳转    query可以传递参数 params不行   -->
      <!-- <router-link :to="{path:'/product/'+item.id,query:{uid:123}}"> -->
      <!-- 通过name进行跳转 query可以传递参数 params 也可以传递参数 -->

      <router-link :to="{name:'product',query:{uid:123},params:{id:item.id,a:123,b:456}}">
        <div>
          <img :src="item.image">
        </div>
        <p>
          <span class="title_tag" v-if="item.title_tag!=''" v-text="item.title_tag"></span>
          {{item.title}}
        </p>
      </router-link>
      <div class="product_info clear">
        <span class="price left" v-text="item.price"></span>
        <span class="price_tag" v-if="item.price_tag!=''" v-text="item.price_tag"></span>
        <span class="price_tag1 right">看相似</span>
      </div>
      <div class="product_info"></div>
    </li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      nav: [
        {
          id: 1,
          title_tag: "",
          title: "女鞋帆布鞋低帮百搭板鞋学生鞋子女 军米色 35码",

          image: require("../assets/product/1.jpg"),
          price: "￥" + 329,
          price_tag: "满减"
        },
        {
          id: 2,
          title_tag: "",
          title:
            "大孚飞跃feiyue男女复古原宿风米色休闲情侣低帮帆布小白鞋 938 米色 34 ",

          image: require("../assets/product/2.jpg"),
          price: "￥" + 128,
          price_tag: ""
        },
        {
          id: 3,
          title_tag: "",
          title:
            "英国高旅/Go travel隔音耳塞防噪男女降噪睡眠睡觉静音耳塞飞机减压防打呼噜旅行配件894官方 白色 ",

          image: require("../assets/product/3.jpg"),
          price: "￥" + 148,
          price_tag: "满减"
        },
        {
          id: 4,
          title_tag: "自营",
          title:
            "荣耀MagicBook 2019 14英寸轻薄窄边框笔记本电脑（AMD锐龙5 3500U 8G 512G FHD IPS 指纹解锁）星云紫 ",

          image: require("../assets/product/4.jpg"),
          price: "￥" + 3899,
          price_tag: "满减"
        },
        {
          id: 5,
          title_tag: "京东物流",
          title:
            "【2019新品】骆驼户外男女徒步鞋春夏耐磨透气系带低帮登山徒步鞋 卡其，男，A912303085 41 ",

          image: require("../assets/product/5.jpg"),
          price: "￥" + 258,
          price_tag: "闪购"
        },
        {
          id: 6,
          title_tag: "",
          title:
            "㏖网红旅行包女短途小背型李手提轻便可爱飞机随身携带拉杆箱上面的 【加强版】孔雀蓝 肩带款 中 ",

          image: require("../assets/product/6.jpg"),
          price: "￥" + 163,
          price_tag: "拼购"
        }
      ]
    };
  }
};
</script>
<style lang="less">
.product {
  width: 100%;
  text-align: center;
  background-color: #f0f2f5;
  padding: 0 0.2rem;
  overflow: hidden;
  box-sizing: border-box;
  li {
    box-sizing: border-box;
    position: relative;
    width: 50%;
    background-color: #ffffff;
    padding: 0 2px 4px 0;

    &:nth-child(2n) {
      padding: 0 0 4px 2px;
    }
    p {
      height: 0.78rem;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      .title_tag {
        background-color: #e4393c;
        color: #ffffff;
        border-radius: 0.1rem;
        font-size: 0.28rem;
        padding: 0 0.1rem;
      }
    }

    .product_info {
      height: 0.48rem;
    }
    .price {
      color: #f23030;
      width: 32%;
      text-align: left;

      font-size: 0.32rem;
    }
    .price_tag {
      color: #e4393c;
      border: solid 1px #e4393c;
      width: 25%;

      font-size: 0.24rem;
    }
    .price_tag1 {
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
  .none {
    display: none;
  }
}
</style>
