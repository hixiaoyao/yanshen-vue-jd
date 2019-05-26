<template>
  <div class="cart">
    <!-- 返回-标题-菜单组件 -->
    <top-bar>
      <div class="title">购物车</div>
    </top-bar>
    <div style="height:0.9rem"></div>
    <!-- 购物车空组件 -->
    <empty-cart v-if="product.length==0"></empty-cart>
    <!-- check-box组件 -->
    <!-- <check-box v-model="all">{{all}}</check-box> -->
    <cart-product
      v-model="selected"
      @change="change"
      v-for="(item,index) in product"
      :key="index"
      :image="item.image"
      :count="item.count"
      :title="item.title"
      :price="item.price"
      :id="item.id"
    ></cart-product>
    <!-- 总价-总数-结算组件 -->
    <fix-bar v-show="product.length>0" v-model="all" :sum="sum" :count="count"></fix-bar>
  </div>
</template>

<script>
import TopBar from "../components/TopBar";
// import CheckBox from "../components/CheckBox";
import FixBar from "../components/FixBar";
import EmptyCart from "../components/EmptyCart";
import CartProduct from "../components/CartProduct";

export default {
  data() {
    return {
      all: false,
      product: [
        {
          id: 1,
          title:
            "明一奶粉3段 美悠然婴幼儿配方奶粉3段1-3岁 宝宝牛奶粉三段箱装(2018年12月） 900g*6罐",
          image:
            "https://img10.360buyimg.com/mobilecms/s150x150_jfs/t1/48223/8/759/244277/5ce73eceE351d9066/99af3cd34c0f6471.jpg",
          price: 1399,
          count: 1
        },
        {
          id: 2,
          title:
            "诺泰（Nuotai） 眼部按摩器护眼仪近视力眼保仪眼睛按摩仪眼镜热敷眼罩舒缓眼疲劳 无线升级款",
          image:
            "https://img10.360buyimg.com/mobilecms/s150x150_jfs/t1/64777/4/292/163698/5ce888ceE229c9ace/d7eaf39612d11451.jpg",
          price: 399,
          count: 1
        },
        {
          id: 3,
          title: "艾谱（AIPU）保险柜家用3C认证保险箱办公小型45WG/45LZ 香槟金",
          image:
            "https://img10.360buyimg.com/mobilecms/s150x150_jfs/t4345/114/569873359/192982/94f71bca/58b678f4Nb1946996.jpg",
          price: 1388,
          count: 1
        }
      ],
      selected: []
    };
  },
  watch: {
    selected(val) {
      if (this.selected.length == this.product.length) {
        this.all = true;
      } else {
        this.all = false;
      }
    },
    all(val) {
      if (val) {
        this.selected = [];
        this.product.forEach(item => {
          this.selected.push(item.id);
        });
      }else if(this.selected.length == this.product.length){
        //全选取消清空seleced
        this.selected = [];
      }
    }
  },
  methods: {
    change(id, count) {
      // console.log(id + "-" + count);
      this.product.forEach((item,index)=>{
				if(item.id == id){
					this.product[index].count = count;
				}
			});
    }
  },
  computed: {
    // 计算总数
    count() {
      let n = 0;
      this.product.forEach((item, index) => {
        if (this.selected.indexOf(item.id) > -1) {
          n += item.count;
        }
      });
      return n;
    },
    // 计算总价
    sum() {
      let n = 0;
      this.product.forEach((item, index) => {
        if (this.selected.indexOf(item.id) > -1) {
          n += item.count * item.price;
        }
      });
      return n;
    }
  },
  name: "cart",
  components: {
    TopBar,
    // CheckBox,
    FixBar,
    EmptyCart,
    CartProduct
  }
};
</script>
<style lang="less">
</style>
