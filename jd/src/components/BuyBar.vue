<template>
  <div class="buy">
    <div class="buy-bar" v-show="show">
      <div class="buy-bar-top"></div>
      <div class="buy-bar-main"></div>
      <div class="buy-bar-bottom" @click="hide">确认</div>
    </div>
    <div class="mask" @click="hide" :style="{display: show?'block':'none'}"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false
    };
  },
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    hide() {
      this.show = false;
      this.$emit("input", false);
    }
  },
  watch: {
    value(val) {
      this.show = val;
    }
  },
  created() {
    this.show = this.value;
  }
};
</script>
<style lang="less">
.buy {
  position: relative;

  .buy-bar {
    width: 100%;
    height: 8rem;
    position: fixed;
    // left: 0;
    bottom: 0;
    background-color: #333;
    z-index: 20;
    .buy-bar-bottom {
      width: 100%;
      text-align: center;
      font-size: 0.32rem;
      height: 1rem;
      line-height: 1rem;
      color: #fff;
      background: linear-gradient(-41deg, #ff4f18, #ff2000 24%, #f10000);
      position: fixed;
      bottom: 0;
    }
  }
  .mask {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 40;
  }
}
</style>
