<template>
    <el-container class="original-container">
        <!--头部-->
        <el-header>
            <h3>产品部</h3>
            <el-menu :default-active="activeIndex" mode="horizontal" background-color="rgb(70, 76, 91)" text-color="rgb(204, 204, 204)" active-text-color="white" router="true" class="original-menu">
                <el-menu-item index="1" >部门信息</el-menu-item>
                <el-menu-item index="2" >报名考核</el-menu-item>
                <el-menu-item index="3" >审核报名</el-menu-item>
                <el-menu-item index="4" >报名统计</el-menu-item>
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
            AddDialogVisible: false
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
.original-container {
    height: 100%;
}
.el-header {
    background-color: rgb(70, 76, 91);
    display: flex;
    justify-content: space-between;
    padding-left: 10px;
    align-items: center;
    >h3 {
        color: white;
        font-size: 35px;
        float: left;
        margin-left: 40px;
    }
}
/*.verticalBar {
        width: 5px;
        height: 29px;
        background: rgb(26, 188, 156);
        display: inline-block;
        margin-top: 10px;
        margin-bottom: 10px;
        /*vertical-align: top;*/
 /*       margin-right: 29px;
        margin-left: 30px;
    }
.department {
    position: absolute;
    top:62px;
    left:40px;
    font-size: 30px;
}
 .line {
    height: 1px;
    width: 100%;
    margin: 2px auto;
    background-color: rgb(204, 204, 204);
    }
.el-aside {
    background-color: rgb(252, 252, 252);
    color: white;
    font-size: 25px;
    font-family: bold;
    text-align: center;
}
.arrow {
    width: 270px;
    height: 75px;
    background-color: rgb(158, 167, 180);
    position: relative;
    left:37px;
    border: 2px solid rgb(158, 167, 180);
}
.arrow:after,.arrow:before {
    border:solid transparent;
    content:' ';
    height: 0;
    left: 100%;
    position: absolute;
    width: 0;
}
.arrow:after {
    border-width: 41px;
    border-left-color: rgb(158, 167, 180);
    top: -4px;
}
.arrow:before {
    border-width: 12px;
    border-left-color: rgb(158, 167, 180);
    top: 18px;
}
.introduction {
    position: relative;
    top:140px;
    font-size: 20px;
    font-family: bold;
    .el-button {
        font-size:18px;
        position: inherit;
        left:1200px;
    }
    .newintroduce {
        text-indent:2em;
    }
}
.IntroTable {
    position: relative;
    top: 400px;
    left:50px;
}
.el-main {
    background-color: white;
}*/
.el-menu-item:hover {
    background-color: rgb(26, 188, 156) !important;
}
.el-menu-item.is-active {
    border-bottom: none!important;
    /*background-color:rgba(0,0,0,0);*/
}
.el-menu-item {
  padding: 0 30px;
  font-size: 20px;
  .goback {
      position: absolute;
      right: 0px;
      padding: 0;
      font-size:30px;
  }
}
.original-menu{
    /* border-bottom-color:none!important; */
    position: absolute;
    left: 300px;
}
</style>
