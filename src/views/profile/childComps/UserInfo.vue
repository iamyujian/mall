<template>
  <div id="user-info">
    <div class="avatar">
      <slot name="user-icon">
        <img src="@/assets/img/profile/avatar.svg" alt />
      </slot>
    </div>

    <div class="login-info left">
      <slot name="user-nickname">
        <div>登录/注册</div>
      </slot>
      <div class="phone">
        <span>
          <img src="@/assets/img/profile/phone.svg" />
        </span>
        <slot name="user-phone">暂无绑定手机号</slot>
      </div>
    </div>
    <span class="arrow">
      <img src="@/assets/img/profile/arrow.svg" />
    </span>
  </div>
</template>

<script>
export default {
  name: "UserInfo"
};
</script>

<style scoped>
#user-info {
  background-color: #ff8198;
  padding: 15px;
  margin-top: -5px;
  overflow: hidden;
  position: relative;
}
.login-info {
  color: #fff;
  margin: 10px 0 0 5px;
}
.left {
  float: left;
}
.avatar {
  float: left;
  width: 75px;
  height: 75px;
}
.avatar img {
  width: 100%;
  border-radius: 50%;
}
.phone {
  margin-top: 5px;
  margin-left: -5px;
  font-size: 14px;
}
.phone img {
  width: 25px;
  height: 25px;
  vertical-align: middle;
}
.arrow {
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translate(0, -50%);
}
.arrow img {
  height: 15px;
}
</style>