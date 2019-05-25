<template>
  <div class="login">
    <top-bar>
      <div class="title">京东登录</div>
    </top-bar>
    <div style="height:0.9rem"></div>
    <!-- 登录页面 -->
    <div class="login-page">
      <!-- 用户登录信息 -->
      <div class="username-login">
        <!-- 用户名 -->
        <div class="input-container">
          <input type="text" id="username"  placeholder="用户名/邮箱/已验证手机">
        </div>
        <!-- 用户密码 -->
        <div class="input-container">
          <input type="password" id="password"  placeholder="请输入密码">
        </div>

      </div>


        
    </div>
  </div>
</template>
<script>
import TopBar from "../components/TopBar";

export default {
  components: {
    TopBar
  }
};
</script>
