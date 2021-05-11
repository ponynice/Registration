<template>
    <div>
       <div style="background-color: rgb(249, 249, 249)">
      <div class="verticalBar"></div>
      <div class="department">
        生成考核内容
        <el-button plain style="position: absolute; left: 1650px; top: 5px" @click="goback()">
          <i class="iconfont icon-ffanhui-"></i>
          返回
        </el-button>
      </div>
      <div class="line"></div>
    </div>
    <el-container>
        <el-aside width="295px">
        <!--侧边栏菜单-->
        <el-menu
          background-color="rgb(252, 252, 252)"
          text-color="rgb(153, 153, 153)"
          active-text-color="green"
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
                <span>设置截止时间</span>
              </template>
            </el-menu-item>
            <el-menu-item index="link">
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
       <div class="verticalBara"></div>
      <el-main>
          <div class="box1">
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
                style="font-size: 32px"
              ></el-input>
            </el-form-item>
            <el-form-item prop="show">
              <el-input v-model="TitleForm.show" ></el-input>
            </el-form-item>
          </el-form>
    </div>
<router-view></router-view>
      </el-main>
    </el-container>
    </div>
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
  goback() {
       this.$router.go(-1)
    }
}
}
</script>

<style lang="less" scoped>
.verticalBar {
  width: 5px;
  height: 29px;
  background: rgb(26, 188, 156);
  display: inline-block;
  margin-top: 10px;
  margin-bottom: 10px;
  /*vertical-align: top;*/
  margin-right: 29px;
  margin-left: 30px;
}
.department {
  position: absolute;
  top: 2px;
  left: 40px;
  font-size: 30px;
}
.verticalBara {
  width: 1px;
  height: 1500px;
  background: rgb(228, 228, 228);
  display: inline-block;
  margin-left: 0px;
}
.line {
  height: 1px;
  width: 100%;
  margin: 2px auto;
  background-color: rgb(204, 204, 204);
}
.el-aside {
  background-color: rgb(252, 252, 252);
  .el-menu {
    border-right: none;
  }
}
.box1 {
  border-style: solid;
  border-width:1px;
  border-radius: 0px;
  border-color: rgb(121, 121, 121);
  width: 1114px;
  height: 190px;
  background-color: rgb(248, 248, 248);
  position: absolute;
  left: 18%;
}
.Title_form {
  width: 70%;
  position: absolute;
  left: 15%;
  top: 10%;
  .el-input_inner {
    height: 30px;
  }
}
</style>
