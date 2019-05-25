<template>
  <div class="check-box-btn flex">
    <div class="btn-box">
        <!-- @input接收传入的数据 -->
      <check-box :val="all" @input="onChange"></check-box>
      <span>全选</span>
    </div>

    <div class="sum flex-item">
      总计：
      <strong>￥{{sum}}</strong>
    </div>
    <div class="pay" :class="{active:count>0}">
      去结算
      <span>({{count}}件)</span>
    </div>
  </div>
</template>
<script>
import CheckBox from "../components/CheckBox";

export default {
  data() {
    return {};
  },
  props: {
    sum: {
      type: Number,
      default: 0
    },
    count: {
      type: Number,
      default: 0
    },
    value: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onChange(val) {
      this.all = val;
      this.$emit("input", val);
    }
  },
  watch: {
    value(val) {
      this.all = val;
    }
  },
  created(){
      this.all=this.value;
  },
  components: {
    CheckBox
  }
};
</script>
<style lang="less" scoped>
.check-box-btn {
  width: 100%;
  height: 1rem;
  position: fixed;
  bottom: 0;
  // background-color: #333;
  line-height: 0.36rem;
  text-align: center;

  .btn-box {
    position: relative;
    width: 0.8rem;
    padding-top: 0.64rem;
    // margin-top:0.25rem;
    .check-box {
      position: absolute;
      left: 0.2rem;
      top: 0.12rem;
    }
    span {
      line-height: 0.36rem;
      font-size: 0.2rem;
      color: #333;
    }
  }
  .sum {
    font-weight: 700;
    font-size: 0.32rem;
    text-align: right;
    line-height: 1rem;
    padding-right: 0.2rem;

    strong {
      color: #e93b3d;
    }
  }
  .pay {
    width: 2.2rem;
    line-height: 1rem;
    color: #fff;
    font-weight: 700;
    font-size: 0.32rem;
    background-color: #d7d7d7;

    &.active {
      background-color: #e4393c;
    }
  }
}
</style>
