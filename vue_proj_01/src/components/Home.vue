<template>
  <!--头部-->
  <el-container class="home-container">
    <el-header>
      <div>
        <img src="../assets/彩铅.png" class="Img" />
        <span>生成报名问卷</span>
      </div>
      <el-button @click="logout">退出</el-button>
    </el-header>
    <!--主体-->
    <el-container>
      <!--侧边栏-->
      <el-aside width="200px">
        <!--侧边栏菜单-->
        <el-menu
          background-color="#7098da"
          text-color="#fff"
          active-text-color="#ffd04b"
          router="true"
        >
          <!--一级菜单-->
          <el-submenu index="1">
            <!--一级菜单的模板区-->
            <template slot="title">
              <!--图标-->
              <i class="el-icon-location"></i>
              <!--文本-->
              <span>选择题</span>
            </template>
            <!--二级菜单-->
            <el-menu-item index="1-1">
              <template slot="title">
                <!--图标-->
                <i class="el-icon-document"></i>
                <!--文本-->
                <span>单选题</span>
              </template>
            </el-menu-item>
            <el-menu-item index="1-2">
              <template slot="title">
                <!--图标-->
                <i class="el-icon-document"></i>
                <!--文本-->
                <span>多选题</span>
              </template>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <!--一级菜单的模板区-->
            <template slot="title">
              <!--图标-->
              <i class="el-icon-location"></i>
              <!--文本-->
              <span>填空题</span>
            </template>
            <!--二级菜单-->
            <el-menu-item index="2-1">
              <template slot="title">
                <!--图标-->
                <i class="el-icon-document"></i>
                <!--文本-->
                <span>单个填空题</span>
              </template>
            </el-menu-item>
            <el-menu-item index="2-2">
              <template slot="title">
                <!--图标-->
                <i class="el-icon-document"></i>
                <!--文本-->
                <span>多个填空题</span>
              </template>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <!--一级菜单的模板区-->
            <template slot="title">
              <!--图标-->
              <i class="el-icon-location"></i>
              <!--文本-->
              <span>个人中心</span>
            </template>
            <!--二级菜单-->
            <el-menu-item index="3-1">
              <template slot="title">
                <!--图标-->
                <i class="el-icon-document"></i>
                <!--文本-->
                <span>具体信息</span>
              </template>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <!--一级菜单的模板区-->
            <template slot="title">
              <!--图标-->
              <i class="el-icon-location"></i>
              <!--文本-->
              <span>备注说明</span>
            </template>
            <!--二级菜单-->
            <el-menu-item index="4-1">
              <template slot="title">
                <!--图标-->
                <i class="el-icon-document"></i>
                <!--文本-->
                <span>分割线</span>
              </template>
            </el-menu-item>
            <el-menu-item index="4-2">
              <template slot="title">
                <!--图标-->
                <i class="el-icon-document"></i>
                <!--文本-->
                <span>备注说明</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!--右侧内容-->
      <el-main>
        <router-view></router-view>
        <el-card class="box-card">
          <el-form
            :model="TitleForm"
            :rules="TitleRules"
            ref="TitleRef"
            label-width="0px"
            class="Title_form"
          >
            <el-form-item prop="name">
              <el-input
                v-model="TitleForm.name"
                style="font-size: 25px"
              ></el-input>
            </el-form-item>
            <el-form-item prop="show">
              <el-input v-model="TitleForm.show"></el-input>
            </el-form-item>
          </el-form>
        </el-card>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      TitleForm: {
        name: '标题',
        show: '感谢您能抽出几分钟时间来参加本次答题，现在我们就马上开始吧！'
      },
      TitleRules: {
        name: [
          { required: true, message: '请输入标题', trigger: 'blur' },
          {
            min: 2,
            max: 15,
            message: '长度在 3 到 15 个字符',
            trigger: 'blur'
          }
        ],
        show: [
          { required: true, message: '请输入引言', trigger: 'blur' },
          {
            min: 3,
            max: 50,
            message: '长度在 3 到 15 个字符',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    logout() {
      window.sessionStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="less" scoped>
.home-container {
  height: 100%;
}
.el-header {
  background-color: #6eb6ff;
  display: flex;
  justify-content: space-between;
  padding-left: 10px;
  align-items: center;
  color: #fff;
  font-size: 22px;
  > div {
    display: flex;
    align-items: center;
    span {
      margin-left: 15px;
    }
  }
}
.Img {
  height: 50px;
  width: 50px;
}
.el-aside {
  background-color: #7098da;
  .el-menu {
    border-right: none;
  }
}
.el-main {
  background-color: #e0fcff;
}
.el-icon-location {
  color: #fff;
}
.el-icon-document {
  color: #fff;
}
</style>
