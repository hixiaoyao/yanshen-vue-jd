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
    <check-box v-model="all">{{all}}</check-box>
    <!-- 总价-总数-结算组件 -->
    <fix-bar v-show="product.length>0"  v-model="all" :sum="0" :count="0"></fix-bar>
  </div>
</template>

<script>
import TopBar from "../components/TopBar";
import CheckBox from "../components/CheckBox";
import FixBar from "../components/FixBar";
import EmptyCart from "../components/EmptyCart";

export default {
  data() {
    return {
      all: false,
      product:[]
    };
  },
  name: "cart",
  components: {
    TopBar,
    CheckBox,
    FixBar,
    EmptyCart,
  }
};
</script>
<style lang="less">

</style>
