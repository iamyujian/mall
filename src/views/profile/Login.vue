<template>
  <div id="login">
    <div class="login-box">
      <div class="title">登 录</div>
      <form action>
        <div class="username">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-yonghu" />
          </svg>
          <input
            class="user"
            type="text"
            placeholder="请输入用户名"
            autofocus
            @focus="getFocus"
            @blur="loseFocus"
            value
          />
       
        </div>

        <div class="password">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-mima" />
          </svg>
          <input
            class="pwd"
            type="password"
            placeholder="请输入密码"
            @focus="getFocus"
            @blur="loseFocus"
            value
          />
       
        </div>

        <button class="btn" @click.prevent="btnClick">登 录</button>
      </form>
      <div class="sign" @click="registered">没有账号，去注册一个！</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      userInfo: this.$store.state.userInfo
    };
  },
  methods: {
    getFocus(even) {
      even.target.style.borderBottom = "1px solid #73d13d";
    },
    loseFocus(even) {
      let parent = even.target.parentNode;
      even.target.style.borderBottom = "1px solid #f5f5f5";
    },
    registered() {
      this.$router.push("/registered");
    },
    btnClick() {
      let user = document.querySelector(".user").value;
      let pwd = document.querySelector(".pwd").value;
      if (!user) {
        this.$toast.show("请填写账号");
      } else if (!pwd) {
        this.$toast.show("请填写密码");
      } else if (this.$store.state.userInfo.username === user && this.$store.state.userInfo.pwd === pwd) {
        this.$toast.show("登录成功");
        this.$set(this.$store.state.userInfo,'isLogin','true')
        this.$router.push('/home')
      } else {
        this.$toast.show("账号密码错误");
      }
    }
  }
};
</script>

<style scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  font-size: 16px;
  position: absolute;
  margin-top: 36px;
  color: #fff;
}
#login {
  height: 100vh;
  background: transparent url(~@/assets/img/profile/beijing.jpg) no-repeat;
  background-size: 100% 100%;
  padding: 40px 25px;
  color: #fff;
}

.title {
  font-size: 30px;
  text-align: center;
}
#login input {
  outline-style: none;
  border: 0;
  background-color: transparent;
  padding: 7px;
  margin-bottom: 3px;
  width: 100%;
  height: 100%;
  font-size: 15px;
  padding-left: 25px;
  color: #fff;
  margin-top: 30px;
  border-bottom: 1px solid #f5f5f5;
}
.username {
  margin-top: 30px;
  position: relative;
}
.password {
  margin-bottom: 15px;
  position: relative;
}
::-webkit-input-placeholder {
  /* WebKit browsers */
  color: #bfbfbf;
  font-size: 16px;
}

.btn {
  margin-top: 40px;
  text-align: center;
  border: 1px solid #fff;
  padding: 10px;
  border-radius: 15px;
  font-size: 18px;
  width: 100%;
  background-color: transparent;
  color: #fff;
}

.sign {
  margin-top: 30px;
  float: right;
  font-size: 14px;
}
.errShow {
  position: absolute;
  color: #fd4848;
  background-color: rgba(245, 216, 216, 0.5);
  border-radius: 3px;
  font-size: 12px;
  left: 25px;
  bottom: -18px;
  padding: 3px;
}
</style>