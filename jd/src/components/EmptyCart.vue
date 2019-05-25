<template>
    <div class="empty-cart-warp">
        <img src="@/assets/cart/empty-cart.png" >
        <p>登录后可同步购物车中商品</p>
        <div class="login-btn">登录</div>
    </div>
</template>
<script >
export default{

}
</script>
<style lang="less">
.empty-cart-warp{
    width: 100%;
    text-align: center;

    img{
        width:1.8rem;
        height: 1.8rem;

    }
    p{
        font-size: 0.32rem;
        line-height: 0.48rem;
        margin: 0.22rem 0;
        color: rgba(51,51,51,.66);
    }
    .login-btn{
        width: 1.2rem;
        height: 0.6rem;
        border: solid 1px #e93b3d;
        font-size: 0.28rem;
        line-height: 0.6rem;
        margin: 0 auto 0.3rem;
        border-radius: 0.08rem;
        color: #e93b3d;
    }
}
</style>
