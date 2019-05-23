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
    <transition name="bounce">
      <div class="sku" v-show="show">
        <div class="sku-top">
          <img src="../assets/product/1.jpg">
          <p class="price">
            ￥
            <em>359</em>.00
            <i>￥459</i>
          </p>
          <p class="select">
            已选：
            <span> {{colorArr[colorIndex]}},{{sizeArr[sizeIndex]}},{{count}}个</span>
          </p>
        </div>
        <!-- <div style="height:1000px"></div> -->
        <div class="sku-mind">
          <div class="sku-kind">颜色</div>
          <div class="sku-choose clear">
            <span v-for="(item,index) in colorArr" :key="index" v-text="item" :class="{active:colorIndex==index}" @click="colorIndex=index"></span>
           
          </div>
          <div class="sku-kind">大小</div>
          <div class="sku-choose clear">
            <span v-for="(item,index) in sizeArr" :key="index" v-text="item" :class="{active:sizeIndex==index}" @click="sizeIndex=index"></span>

          </div>
          <div class="sku-count clear">
            数量
            <i @click="count++">+</i>
            <i v-text="count">0</i>
            <i @click="count=count<=1?1:--count">-</i>
          </div>
        </div>
        <div class="sku-btn" @click="show=false">确认</div>
      </div>
    </transition>

    <div class="mask" v-show="show" @click="show=false"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      colorArr:['红色','白色','蓝色','紫色','橙色'],
      sizeArr:['S','M','L','XL','XXL'],
      colorIndex:0,
      sizeIndex:0,
      count:1,

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
    text-align: center;

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
    text-align: center;
  }
  .add-cart {
    background: linear-gradient(138deg, #ffa600, #ffb000 77%, #ffbc00);
    line-height: 1rem;
  }
  .buy-now {
    background: linear-gradient(-41deg, #ff4f18, #ff2000 24%, #f10000);
  }
  .sku {
    width: 100%;
    height: 8rem;
    position: fixed;
    // left: 0;
    bottom: 0;
    z-index: 40;
    overflow: auto;

    background-color: #fff;
    z-index: 20;
    .sku-top {
      width: 100%;
      height: 1.6rem;
      box-sizing: border-box;
      padding: 0 0 0.2rem 2.2rem;
      position: relative;

      img {
        position: absolute;
        width: 1.8rem;
        height: 1.8rem;
        left: 0.2rem;
        top: -0.4rem;
      }

      p.price {
        color: #f10000;
        font-size: 0.22rem;
        margin: 0;
        em {
          font-size: 0.32rem;
        }
        i {
          color: #999;
          font-size: 0.28rem;
          text-decoration: line-through;
        }
      }
      p.select {
        font-size: 0.28rem;
        margin: 0;
        color: #999;
        span {
          color: #000;
        }
        
      }
      span.close {
					position: absolute;
					top: 0;
					right: 0;
					width: 0.3rem;
					height: 0.3rem;
					padding: 0.2rem;
					background-size: 0.22rem 0.22rem;
					background-position: center;
					background-repeat: no-repeat;
					background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaAgMAAADUJKRdAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURQAAAAAAAEdwTAAAAA+kCggAAAAEdFJOUyoFADPFB4o9AAAAbklEQVQI11WPoRXAIAxET1VVVLMFe8R1gWrWyQKIGJiiin26Qa88ThTz3yM/yQVb52tA/hg3rJB+wBNpF2KwnCsahRgVnYInkoIVMgZLZMtUyW5nmvS9TMbTf9T/8tSnOZq79mivciiXcir3uuMFX3BjVwgV70oAAAAASUVORK5CYII=);
				}
    }
    .sku-mind {
      width: 100%;
      height: 2.4rem;
      .sku-kind {
        font-size: 0.24rem;
        color: #999;
        margin: 0 0.2rem;
        height: 0.8rem;
        line-height: 0.8rem;
      }
      span {
        display: inline-block;
        padding: 0 0.2rem;
        min-width: 0.4rem;
        max-width: 5.4rem;
        overflow: hidden;
        height: 0.6rem;
        line-height: 0.6rem;
        float: left;
        text-align: center;
        margin-left: 0.2rem;
        margin-bottom: 0.2rem;
        border-radius: 0.2rem;
        color: #333;

        font-size: 14px;
        &.active {
          background: linear-gradient(-41deg, #ff4f18, #ff2000 24%, #f10000);
          color: #fff;
        }
      }
      .sku-count {
        width: 100%;
        height: 0.62rem;
        padding: 0 0.2rem;
        line-height: 0.62rem;
        box-sizing: border-box;
        i {
          float: right;
          width: 0.6rem;
          height: 0.6rem;
          line-height: 0.6rem;
          background: #f7f7f7;
          text-align: center;
        }
      }
    }

    .sku-btn {
      width: 100%;
      text-align: center;
      font-size: 0.32rem;
      height: 1rem;
      line-height: 1rem;
      color: #fff;
      background: linear-gradient(-41deg, #ff4f18, #ff2000 24%, #f10000);
      position: fixed;
      bottom: 0;
      z-index: 40;
    }
  }
  .mask {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    // z-index: 40;
    background-color: rgba(0, 0, 0, 0.7);
  }
  .bounce-enter-active {
    animation: bounce 0.5s linear;
  }

  .bounce-leave-active {
    animation: bounce 0s linear reverse;
  }

  @keyframes bounce {
    from {
      -webkit-transform: translateY(100%);
    }

    // 50% {
    //   -webkit-transform: translateY(100%);
    // }
    to {
      -webkit-transform: translateY(0%);
    }
  }
}
</style>
