<template>
  <div id="profile">
    <nar-bar class="nav-bar">
      <div slot="center">个人信息</div>
    </nar-bar>
    <user-info @click.native="userClick"></user-info>

    <section class="account">
      <div class="account-item" @click="balanceClick">
        <div class="number">
          <span class="balance">0.00</span>元
        </div>
        <div class="account-info">我的余额</div>
      </div>
      <div class="account-item" @click="discountClick">
        <div class="number">
          <span class="balance">0</span>个
        </div>
        <div class="account-info">我的优惠</div>
      </div>
      <div class="account-item" @click="integralClick">
        <div class="number">
          <span class="balance">0</span>元
        </div>
        <div class="account-info">我的积分</div>
      </div>
    </section>
    <list-view />
  </div>
</template>

<script>
import NarBar from "@/components/common/narbar/NarBar";
import UserInfo from "./childComps/UserInfo";
import ListView from "./childComps/ListView";
export default {
  name: "Profile",
  components: {
    NarBar,
    UserInfo,
    ListView
  },
 
  methods: {
    balanceClick() {
      this.$toast.show("点击了余额");
    },
    discountClick() {
      this.$toast.show("点击了优惠");
    },
    integralClick() {
      this.$toast.show("点击了积分");
    },
    userClick() {
      this.$router.push("/login");
    }
  }
  // watch :{
  //   isLogin
  //   this.$store.state.userInfo
  // }
};
</script>

<style scoped>
.nav-bar {
  background-color: #ff8198;
  color: #fff;
}
.account {
  display: flex;
  border-bottom: 10px solid #f2f2f2;
}

.account-item {
  color: #666;
  font-size: 13px;
  padding: 18px;
  width: 100%;
  background-color: #fff;
  text-align: center;
}
.account-item:nth-child(2) {
  border-left: 1px solid #f2f2f2;
  border-right: 1px solid #f2f2f2;
}
.account-item .balance {
  font-size: 24px;
  font-weight: 700;
  color: #ff5f3e;
}
.account-info {
  margin-top: 6px;
}
</style>