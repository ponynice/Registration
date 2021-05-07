<template>
  <el-container class="original-container">
    <!--头部-->
    <el-header>
      <el-select v-model="value" placeholder="产品部" @change="ChangeSaler(item)">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <el-menu
        :default-active="activeIndex"
        mode="horizontal"
        background-color="rgb(70, 76, 91)"
        text-color="rgb(204, 204, 204)"
        active-text-color="white"
        router="true"
        class="original-menu"
      >
        <el-menu-item index="one">部门信息</el-menu-item>
        <el-menu-item index="two">报名考核</el-menu-item>
        <el-menu-item index="three">审核报名</el-menu-item>
        <el-menu-item index="four">报名统计</el-menu-item>
        <el-menu-item index="five">部门管理</el-menu-item>
        <el-menu-item>
          <i class="el-icon-s-custom" style="color: white"></i>
          账户设置
        </el-menu-item>
        <el-menu-item class="goback" @click="logout()">
          <i class="el-icon-switch-button" style="color: white"></i>
          退出登录
        </el-menu-item>
      </el-menu>
    </el-header>
    <router-view></router-view>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '1',
      value: '',
      options: [
          {
              value: '1',
              label: '产品部'
          },
          {
              value: '2',
              label: 'java部'
          },
          {
              value: '3',
              label: 'iOS部'
          },
          {
              value: '4',
              label: '前端部'
          }
      ]
    }
  },
  methods: {
    logout() {
      window.sessionStorage.clear()
      this.$router.push('/login')
    },
    ChangeSale(item) {
      this.$http({
        url: 'api/department?id=options.item.value',
        method: 'get'
      })
    }
  }
}
</script>

<style lang="less" scoped>
.original-container {
  height: 100%;
}
.el-header {
  background-color: rgb(70, 76, 91);
  display: flex;
  justify-content: space-between;
  padding-left: 10px;
  align-items: center;
  > h3 {
    color: white;
    font-size: 35px;
    float: left;
    margin-left: 40px;
  }
}
.el-menu-item:hover {
  background-color: rgb(26, 188, 156) !important;
}
.el-menu-item.is-active {
  border-bottom: none !important;
  /*background-color:rgba(0,0,0,0);*/
}
.el-menu-item {
  padding: 0 30px;
  font-size: 20px;
  .goback {
    position: absolute;
    right: 0px;
    padding: 0;
    font-size: 30px;
  }
}
.original-menu {
  /* border-bottom-color:none!important; */
  position: absolute;
  left: 300px;
}
</style>
