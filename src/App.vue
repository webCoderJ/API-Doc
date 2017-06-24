<template>
  <div class="app-wrapper">
    <div class="sidebar-container">
      <el-menu
        class="sidebar"
        theme="dark"
        :router="true"
        :default-active="defaultActive"
        :unique-opened="true">
        <el-menu-item index="/">首页</el-menu-item>
        <el-submenu index="/users">
          <template slot="title">用户</template>
          <el-menu-item index="/users/reg">注册</el-menu-item>
          <el-menu-item index="/users/login">登录</el-menu-item>
        </el-submenu>
        <el-submenu index="/me">
          <template slot="title">我的</template>
          <el-menu-item index="/me/query">查询用户信息</el-menu-item>
          <el-menu-item index="/me/update">修改用户信息</el-menu-item>
        </el-submenu>        
        <el-submenu index="/record">
          <template slot="title">运动记录</template>
          <el-menu-item index="/record/query">查询运动记录</el-menu-item>
          <el-menu-item index="/record/rank">查询排行榜</el-menu-item>
        </el-submenu>
        <el-submenu index="/relation">
          <template slot="title">用户关系</template>
          <el-menu-item index="/relation/follow">关注</el-menu-item>
          <el-menu-item index="/relation/unfollow">取消关注</el-menu-item>
        </el-submenu>
        <el-submenu index="/project">
          <template slot="title">运动项目</template>
          <el-menu-item index="/project/query">查询项目信息</el-menu-item>
          <el-menu-item index="/project/create">创建多人项目</el-menu-item>
        </el-submenu>
        <el-submenu index="/moment">
          <template slot="title">动态</template>
          <el-menu-item index="/moment/query">查询动态</el-menu-item>
          <el-menu-item index="/moment/create">创建动态</el-menu-item>
          <el-menu-item index="/moment/delete">删除动态</el-menu-item>
          <el-menu-item index="/moment/query-comment">查询动态评论</el-menu-item>
          <el-menu-item index="/moment/add-comment">增加动态评论</el-menu-item>
          <el-menu-item index="/moment/delete-comment">删除动态评论</el-menu-item>
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
        defaultActive: '/'
      }
    }
  }
</script>

<style lang="scss">
  @import 'assets/css/base.scss';
  @import 'assets/css/app.scss';
</style>
