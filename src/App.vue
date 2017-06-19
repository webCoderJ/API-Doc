<template>
  <div class="app-wrapper">
    <div class="sidebar-container">
      <el-menu
        class="sidebar"
        theme="dark"
        :router="true"
        :default-active="defaultActive"
        :unique-opened="true">
        <el-submenu index="/users">
          <template slot="title">用户</template>
          <el-menu-item index="/users/reg">注册</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
    <div class="main-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        defaultActive: '/users/reg'
      }
    }
  }
</script>

<style lang="scss">
  @import 'assets/css/base.scss';
  @import 'assets/css/app.scss';
</style>
