<template>
  <div id="login">
    <div class="login-box">
      <div class="title">注 册</div>
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

        <div class>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-youxiang" />
          </svg>
          <input
            class="email"
            type="email"
            placeholder="请输入邮箱"
            @focus="getFocus"
            @blur="loseFocus"
            value
          />
        </div>

        <div>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-weibiaoti-" />
          </svg>
          <input
            class="tel"
            type="tel"
            placeholder="请输入手机号码"
            @focus="getFocus"
            @blur="loseFocus"
            value
            number
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

        <button class="btn" @click.prevent="btnClick">注 册</button>
      </form>
      <div class="sign" @click="login">已有账号，去登录！</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Registered",
  methods: {
    getFocus(even) {
      let num = 0;
      let parent = even.target.parentNode;
      if (num < 1) {
        let span = document.createElement("span");
        parent.style.position = "relative";
        span.setAttribute("class", "warn-show");
        span.style.position = "absolute";
        span.style.left = "0px";
        span.style.bottom = "-19px";
        span.style.color = "#f8e5a5";
        span.style.backgroundColor = "rgba(247,234,166,.5)";
        span.style.borderRadius = "3px";
        span.style.fontSize = "12px";
        span.style.padding = "3px";
        switch (even.target.type) {
          case "text":
            span.innerHTML = "字母开头，允许5-16字节，允许字母数字下划线";
            break;
          case "email":
            span.innerHTML = "填写您的邮箱地址";
            break;
          case "tel":
            span.innerHTML = "填写您的手机号码";
            break;
          case "password":
            span.innerHTML = "长度在6~18之间";
            break;
        }
        parent.append(span);
        num = 2;
      }

      even.target.style.borderBottom = "1px solid #73d13d";
    },
    loseFocus(even) {
      let parent = even.target.parentNode;
      even.target.style.borderBottom = "1px solid #f5f5f5";
      if (parent.lastElementChild.nodeName === "SPAN") {
        parent.removeChild(parent.lastElementChild);
      }
    },
    login() {
      this.$router.push("/login");
    },
    btnClick() {
      let userObj = {};
      let user = document.querySelector(".user").value;
      let pwd = document.querySelector(".pwd").value;
      let email = document.querySelector(".email").value;
      let tel = document.querySelector(".tel").value;
      let testUser = new RegExp("^[a-zA-Z][a-zA-Z0-9_]{4,15}$");
      let testTel = new RegExp("^[1]([3-9])[0-9]{9}$");
      let testEmail = new RegExp(
        "^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(.[a-zA-Z0-9_-]+)+$"
      );
      if (!testUser.test(user)) {
        return this.$toast.show("请填写正确的用户名", 2000);
      } else if (!testEmail.test(email)) {
        return this.$toast.show("请填写正确的邮箱", 2000);
      } else if (!testTel.test(tel)) {
        return this.$toast.show("请填写正确的手机号码", 2000);
      } else if (pwd.length < 6) {
        return this.$toast.show("请填写正确的密码", 2000);
      }
      userObj.username = user;
      userObj.pwd = pwd;
      userObj.email = email;
      userObj.tel = tel;
     this.$store.state.userInfo = userObj;
      this.$router.push('/login')
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
  border-bottom: 1px solid #fff;
}
::-webkit-input-placeholder {
  /* WebKit browsers */
  color: #bfbfbf;
  font-size: 16px;
}
.username {
  margin-top: 30px;
}
.last {
  margin-bottom: 15px;
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
</style>