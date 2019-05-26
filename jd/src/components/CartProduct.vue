<template>
  <div class="cart-product flex">
    <div class="check-box-wrap">
      <check-box :value="id" :val="selected" @input="onChange"></check-box>
    </div>
    <div class="product-image">
      <img :src="image">
    </div>
    <div class="product-info flex-item">
      <div class="product-title" v-text="title"></div>
      <div class="product-option" v-text="sku"></div>
      <div class="goods-line">
        <div class="price left">
          ￥
          <span v-text="price1"></span>
          .{{price2}}
        </div>
        <div class="count right">
          <span @click="reduce">-</span>
          <span v-text="n"></span>
          <span @click="add">+</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CheckBox from "../components/CheckBox";

export default {
  data() {
    return {
      n: 1,
      selected: []
    };
  },
  props: {
    id: {
      type: Number,
      required: true
    },
    image: {
      type: String,
      default: require("@/assets/images/default.png")
    },
    title: {
      type: String,
      default: "商品标题空"
    },
    sku: {
      type: String,
      default: "套餐1，红色"
    },
    price: {
      type: Number,
      default: 100.9
    },
    count: {
      type: Number,
      default: 1
    },
    value: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  methods: {
    onChange(val) {
      this.$emit("input", val);
    },
    reduce(){
        this.n=this.n<1?1:--this.n;
        this.$emit('change',this.id,this.n)
    },
    add(){
        this.$emit('change',this.id,++this.n)
    }

  },
  watch: {
    value(val) {
      this.selected = val;
    }
  },
  components: {
    CheckBox
  },
  created() {
    this.n = this.count;
    this.selected = this.value;
  },
  computed: {
    price1() {
      return Math.floor(this.price);
    },
    price2() {
      var n = Math.floor((this.price * 100) % 100);
      return n < 10 ? "0" + n : n;
    }
  }
};
</script>
<style lang="less">
.cart-product {
  padding: 0.1rem 0 0.3rem;
  background-color: #ffffff;
  .check-box-wrap {
    width: 0.86rem;
    box-sizing: border-box;
    padding: 0.55rem 0 0 0.23rem;
  }
  .product-image {
    width: 1.9rem;
    height: 1.5rem;
    img {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
  .product-title {
    padding-right: 0.2rem;
    margin-bottom: 0.1rem;
    font-size: 0.28rem;
    word-break: break-all;
    position: relative;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .product-option {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    position: relative;
    background-color: #fff;
    font-size: 0.28rem;
    color: #666;
    margin: 0.16rem 0.2rem 0.2rem 0;
    padding: 1px 0.5rem 1px 0.1rem;
    border: 1px solid #e5e5e5;
    border-radius: 2px;
  }
  .goods-line {
    margin-right: 0.2rem;
    margin-bottom: 0.1rem;
    .price {
      line-height: 0.32rem;
      color: #e93b3d;
      font-size: 0.2rem !important;
      span {
        font-size: 0.32rem;
      }
    }
  }
  .count span {
    display: block;
    float: left;
    width: 0.6rem;
    height: 0.6rem;
    background-color: #f7f7f7;
    text-align: center;
    line-height: 0.6rem;
    font-size: 0.32rem;
  }
}
</style>

