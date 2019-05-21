<template>
  <ul class="quick-nav clear">
    <li class="left " v-for="(item,index) in nav" :key="index">
      <a :href="item.url">
        <img :src="item.image">
      </a>
      <p v-text="item.title"></p>
    </li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      nav: [
            //require,当路径以变量形式给时，需要用require()    @表示src
            { title: "京东商城", url: "#", image: require("@/assets/icons/1.png") },
            { title: "海囤全球", url: "#", image: require("@/assets/icons/2.png") },
            { title: "京东服饰", url: "#", image: require("@/assets/icons/3.png") },
            { title: "京东生鲜", url: "#", image: require("@/assets/icons/4.png") },
            { title: "京东到家", url: "#", image: require("@/assets/icons/5.png") },
            { title: "充值缴费", url: "#", image: require("@/assets/icons/6.png") },
            { title: "9.9元拼", url: "#", image: require("@/assets/icons/7.png") },
            { title: "领劵", url: "#", image: require("@/assets/icons/8.png") },
            { title: "赚钱", url: "#", image: require("@/assets/icons/9.png") },
            { title: "全部", url: "#", image: require("@/assets/icons/10.png") },
        ]
    };
  }
};
</script>
<style lang="less">
.quick-nav{
    text-align: center;
    background-color: #FFFFFF;
    padding-bottom: 0.2rem;
    
    li{
        width: 20%;

    }
    img{
        width: 0.8rem;
        height: 0.8rem;
        margin-top: 0.2rem;
        
    }
}



</style>
