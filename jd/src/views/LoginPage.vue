<template>
  <div class="loginpage">
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
          <input type="text" id="username" placeholder="用户名/邮箱/已验证手机">
          <span></span>
        </div>
        <!-- 用户密码 -->
        <div class="input-container">
          <input type="password" id="password" placeholder="请输入密码">
          <span></span>
          <i></i>
          <button>忘记密码</button>
        </div>
        <div class="login-btn">
          <button id="loginBtn">登 录</button>
          <button id="loginOneStep">一键登录</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TopBar from "../components/TopBar";

export default {
  data(){
    return{

    };
  },

  name: "loginpage",
  components: {
    TopBar
  }
};
</script>
<style lang="less">
.login-page {
  width: 6.5rem;
  margin: 0 auto;
  // background-color: #fff;

  .input-container {
    height: 1rem;
    padding: 0.2rem 0;
    width: 100%;
    position: relative;
    overflow: hidden;
    margin-top: 0.4rem;
    background: #fff;
    border-bottom: 0.02rem solid #efefef;
    font-size: 0.32rem;
    box-sizing: border-box;
    #username {
      width: 100%;
      height: 100%;
      padding-right: 0.6rem;

      box-sizing: border-box;
    }
    span {
      width: 0.48rem;
      height: 0.48rem;
      overflow: hidden;
      display: block;
      position: absolute;
      background-repeat: no-repeat;
      background-size: 100% auto;
     
    }
    #username + span {
      right: 0.06rem;
      top: 0.26rem;
      
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABGdBTUEAALGPC/xhBQAAAjBJREFUaAXtVztSwzAQjUl6zkFHPj09FFAARbgAcAVoc4acABigCQX0UOcDDfdIH8e8BWtmk2gTaa1UrGY0ku3V03vPK1mu1ayYA+aAOWAOmAPmgDnwfx3IYqWPRqM9jOkXRbGL9rbT6bzGYvD4yWRymOd5L8uyKep1q9X65s839Xc2BXieE/kD3N9HHUDQuScm6NZwODwD+RfCIkzUftBAFhQtAJOQ8640cH2nETEej08Bco/acGBoOTa7LXejBdTr9RvAzRhktAhyfj6fPwCDk89hBmFHlWgBzWbzDTN0UVUiBOdz5P+FZj1FL2JnD7mI/nIKzIhIu91+cnG8Fcb8kseYRx4b2lcLoAkEQl4RQmwl8sShkoBQEdsin0TAJhFYmAVillOtsvM0L5XKb+APRk6n8vnCblOuE1XOu/lcm0wAAQqp4uaiNpnzDjSpAAJdIyI5eZov+jtAg5SF1gLVpCXpG1jjviPt3WLdQ02b7A0I5HOQUn2xQ8UkESCRx25DRw71sSNERGUBAnlKlS4dKXC+ed6miEoCymP08kdqJc+3KUK9iIk8/QvAXf6RWiHP02DN2xIPgHy8r68SoCHvJk8tIloACByBzAB1wXlcd8tUcVzFVhKBASex/wTRawCLs4eJ1ORJlbQmSmwKCS7RAoA8Zei0xwc7z8ZJIjg2Dxf7GgGXcOodiJ/4Pz4OTRsfAxpLGMD7Qv1AvfLF2T1zwBwwB8wBc8AcMAfMAb8DP94/FJqk3I9tAAAAAElFTkSuQmCC);

      
    }
    #password {
      width: 100%;
      height: 100%;
      padding-right: 3rem;

      box-sizing: border-box;
    }
    #password + span {
      top: 0.26rem;
      right: 2.46rem;
       
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABGdBTUEAALGPC/xhBQAAAjBJREFUaAXtVztSwzAQjUl6zkFHPj09FFAARbgAcAVoc4acABigCQX0UOcDDfdIH8e8BWtmk2gTaa1UrGY0ku3V03vPK1mu1ayYA+aAOWAOmAPmgDnwfx3IYqWPRqM9jOkXRbGL9rbT6bzGYvD4yWRymOd5L8uyKep1q9X65s839Xc2BXieE/kD3N9HHUDQuScm6NZwODwD+RfCIkzUftBAFhQtAJOQ8640cH2nETEej08Bco/acGBoOTa7LXejBdTr9RvAzRhktAhyfj6fPwCDk89hBmFHlWgBzWbzDTN0UVUiBOdz5P+FZj1FL2JnD7mI/nIKzIhIu91+cnG8Fcb8kseYRx4b2lcLoAkEQl4RQmwl8sShkoBQEdsin0TAJhFYmAVillOtsvM0L5XKb+APRk6n8vnCblOuE1XOu/lcm0wAAQqp4uaiNpnzDjSpAAJdIyI5eZov+jtAg5SF1gLVpCXpG1jjviPt3WLdQ02b7A0I5HOQUn2xQ8UkESCRx25DRw71sSNERGUBAnlKlS4dKXC+ed6miEoCymP08kdqJc+3KUK9iIk8/QvAXf6RWiHP02DN2xIPgHy8r68SoCHvJk8tIloACByBzAB1wXlcd8tUcVzFVhKBASex/wTRawCLs4eJ1ORJlbQmSmwKCS7RAoA8Zei0xwc7z8ZJIjg2Dxf7GgGXcOodiJ/4Pz4OTRsfAxpLGMD7Qv1AvfLF2T1zwBwwB8wBc8AcMAfMAb8DP94/FJqk3I9tAAAAAElFTkSuQmCC);

      
    }
    button {
      position: absolute;
      width: 1.6rem;
      height: 0.48rem;
      line-height: 0.48rem;
      right: 0;
      top: 0.26rem;
      background-color: #fff;
      color: #222;
      font-size: 0.28rem;
      border: 0;
      // outline: 0;
      border-radius: 2px;
      text-align: center;
      padding-left: 0.32rem;
      border-left: 1px solid #ccc;
    }
    input {
      border: 0;
      color: #222;
      padding: 0;
    }
  }
  .login-btn {
    padding-top: 0.6rem;
    button {
      width: 100%;
      height: 1rem;
      line-height: 1rem;
      display: block;
      background-color: #ffcaba;
      border-radius: 1rem;
      font-size: 0.32rem;

      text-align: center;
      button.active{
      background-color: #f10000;

      }
    }
    #loginBtn {
      color: #fff;
      border: 0;
      // background-image: linear-gradient(90deg, #fab3b3, #ffbcb3 73%, #ffcaba);
      
    }
    #loginOneStep {
      box-sizing: border-box;
      border: 1px solid #ff2000;
      color: #f10000;
      background: #fff;
      margin-top: 0.2rem;
    }
  }
}
</style>
