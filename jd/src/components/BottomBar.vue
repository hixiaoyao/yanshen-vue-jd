<template>
  <div class="bottom_bar flex">
    <div class="icon kefu">
      <span>联系客服</span>
    </div>
    <div class="icon shop">
      <span>进店</span>
    </div>
    <div class="icon cart">
      <span>购物车</span>
    </div>
    <div class="row add-cart" @click="buyshow">加入购入车</div>
    <div class="row buy-now">立即购买</div>
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
    buyshow() {
      this.show = true;
      this.$emit("input", true);
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
.bottom_bar {
  width: 100%;
  height: 1rem;
  text-align: center;
  position: fixed;
  z-index: 20;
  bottom: 0;

  .icon {
    width: 14%;
    font-size: 0.2rem;
    padding-top: 0.6rem;
    background-position: center 0.1rem;
    background-repeat: no-repeat;
    background-size: 0.4rem;

    &.kefu {
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAwUExURUdwTGZmZmZmZmZmZmZmZmdnZ2ZmZmhoaGZmZmxsbGZmZmlpaWdnZ2ZmZmZmZmZmZk19Qx8AAAAPdFJOUwD05pRtRbwrqwzXG1eDylNiP4YAAAGTSURBVCjPrVNNSwJRFL3mx6ijIWoJQYwuXLgaF64iMle2NFqHtYuCDInW1cLtmAqt+wX6EwxatMuKVi0ShLbiCINIeXpvPnTMrW915/DOfeece4doGcd3eJ4If39U7Zi7BP2sF2aYqwlsnFQegPGuhQl9jPK8uFQwuTDBHDZbRiW+ImqSMWpZJFGB0eAL7Vn7AH71l7FmF7IPrqCGQi5tQc6oGynOHgYQskAH2lnOl1N+dC2QlTWVd+44Zi8xUpB9edFyMm3ClqT2mPBcWsQ1raomj524XspdWtEMqztSuGdYLMXJMaKMXWeFlBD5NWraA5uQEiePSkWbpZcYNbvkRMs1mKZYHxREpElAhx4nptCGnKQgN99PkVBSt1l693vSsEp3Y95lyJJS2DwSQISJyv4w0Muv+w5OZTZNPfIjHrY8l2dxrM+5bE/eJcUMh7JtRiXVdHKFiIWWcUbTGWt546IUnTYS3/iGZKoUtLf3PcssziR5tLm1E57eb/DpH/5fR6GJ4wWQ6hJGi6vbuI0s4w/4A2i0n3aDtHpAAAAAAElFTkSuQmCC);
    }
    &.shop {
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAmBAMAAABE2sQuAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAnUExURUdwTGZmZmlpaWZmZmdnZ2ZmZmdnZ2pqamZmZmZmZmZmZmdnZ2ZmZsMDXTsAAAAMdFJOUwDiIfJNxIoRtGqfP2fZSMkAAAEbSURBVCjPzZKhT8NAFMY/yhhsQZAMDDlBArgJIAFMBUNPALqiAVuxBEWYQCArcJgK8GhAIOhKWbu8P4p7dwl7rw7HJ971frl7X/O+A9AxJJSfgNUnpYmDiYbfDoazEX4VmIKXFh1DaEjcdImeJFygO+ezJWHHOSWVZFgO2cl8KYgkZ581Da+t0wo9aNi1TuNipGFAU2QzNJTWiCZN+FEinDbhuEDo/miwPq/DAlHJHyafV0syioE2yVrbeZSntxFR+ebrTkRndoA82TrlWmUuEDugXRdMl7dxi09ccOP33sYj8No7vARuzvfv8TddxXLXPvJp7km46NIEfUq4Sv8BqpT6HppKPKYgddPHi360PvJtDQ/8jWfJNm2vHx2SsNH4ChcMAAAAAElFTkSuQmCC);
    }
    &.cart {
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmBAMAAABaE/SdAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAqUExURUdwTGZmZmZmZmZmZmdnZ2hoaGZmZmZmZmZmZmZmZm1tbWlpaWZmZmZmZgLtXTQAAAANdFJOUwDwdo5EMLpZy9kNF6T30CAUAAABYklEQVQoz5WSPUsDQRCG35j7iKdCRBFRDlKqEIhgexCwDtwfCCjYCilsLA7sJSDWHiTaWWkjggi2IgEvl5icZv6LM7nbsBcrp9hln51952MHSM14X72pI2fmKRF9+TnWILH1nJsbHbwcupHu2KVLXp9pS2PVpMOrE/Y1Fg5S1URjbnm6FSKN7demW3EN/zPjmHTbkAoDyttIYs4xjm1S3NGUHI982FTOyReohQU6yrESVZi9ATubFcWWmRWpBov7qZichVc5nHKUdxZrtvu3dJExm/VLVIf77cyiG3y7yPkov3v5BrrifB6U3jmdAEv8YoWQxbX55gOgT7xKb6f5daXaPbg/aI5VZl501qOk1R6iqbI1uUtmm8bhEI1Jxiwp3ObODRDEs/GQKbiTplbVP4fp5RP14Y1UndvZTMTw0hHAo+pCI0Yv8+upuQgm8BI/zSTzN1h3/islrvWHcZq7c+gav/Ds2RPBmjGYAAAAAElFTkSuQmCC);
    }
  }
  .row {
    width: 29%;
    line-height: 1rem;
    font-size: 0.28rem;
    color: #fff;
  }
  .add-cart {
    background: linear-gradient(138deg, #ffa600, #ffb000 77%, #ffbc00);
    line-height: 1rem;
  }
  .buy-now {
    background: linear-gradient(-41deg, #ff4f18, #ff2000 24%, #f10000);
  }
}
</style>
