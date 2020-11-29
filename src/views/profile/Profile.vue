<template>
  <div id="profile">
    <!-- NavBar 头部导航 -->
    <nav-bar class="profile-nav">
      <template #center>我的</template>
    </nav-bar>
    <!-- ProfileHeader 头部信息 -->
    <profile-header />
    <!-- ProfileManage 个人信息管理 -->
    <profile-manage
      :profileManage="[
        '我的订单',
        '账号管理',
        '地址管理',
        '人工客服',
        '关于我们',
      ]"
    />
  </div>
</template>

<script>
import ProfileManage from './childComps/Profile-manage'
import ProfileHeader from './childComps/Profile-header'
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "",
  data() {
    return {
      mes: '父组件传递的信息'
    }
  },
  components: {
    ProfileManage,
    NavBar,
    ProfileHeader,
  }
};
</script>

<style scoped>
.profile-nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>
