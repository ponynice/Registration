<template>
<div>
  <div style="background-color:rgb(249, 249, 249)">
      <div class="verticalBar"></div>
      <div class="department">
        查看部门信息
        <el-button plain style="position:absolute;left:1650px;top:5px;" @click="goback()">
          <i class="iconfont icon-ffanhui-"></i>
          返回
        </el-button>
      </div>
      <div class="line"></div>
  </div>
  <el-container>
    <div class="verticalBara"></div>
    <el-aside width="380px">
      <div class="arrow" style="top: 100px">
        <i class="el-icon-collection-tag"></i>
        部门名称
      </div>
      <div class="arrow" style="top: 220px">
        <i class="el-icon-collection-tag"></i>
        部门简介
      </div>
      <div class="arrow" style="top: 640px">
        <i class="el-icon-collection-tag"></i>
        部门管理员
      </div>
      <div class="verticalBarb"></div>
    </el-aside>
    <el-main>
      <div style="font-size: 35px; font-family: bold; position: relative; top: 95px;">产品部</div>
      <div class="introduction">
        <el-button @click="AddDialogVisible = true">编辑简介</el-button>
        <div class="newintroduce" :model="InputIntro" prop="IntroContent">
          <p>
            {{InputIntro.IntroContent}}
          </p>
        </div>
      </div>
      <el-dialog title="编辑简介" :visible.sync="AddDialogVisible" width="50%">
        <el-input
          v-model="InputIntro.IntroContent"
          type="textarea"
          autosize
        ></el-input>
        <span slot="footer" class="dialog-footer">
          <el-button @click="AddDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="AddDialogVisible = false"
            >确 定</el-button
          >
        </span>
      </el-dialog>
      <div class="IntroTable">
        <el-table :data="tableData" border :header-cell-style="{background:'rgb(249, 250, 252)',color:'black'}">
          <el-table-column prop="name" label="成员名字" width="243px">
          </el-table-column>
          <el-table-column prop="number" label="学号" width="324px">
          </el-table-column>
          <el-table-column
            prop="status"
            label="职位"
          >
          </el-table-column>
        </el-table>
      </div>
    </el-main>
  </el-container>
</div>
</template>

<script>
export default {
  data() {
    return {
      AddDialogVisible: false,
      InputIntro: {
        IntroContent: '说到产品经理，大家肯定会想到苹果的乔布斯、微信的张小龙。他们都是“神”一样的产品经理，然而大部分产品经理只是普普通通的“产品人”。产品经理负责一个产品会对其在生命周期的所有事项负责，例如用户调研、用户分析、功能分析、需求分析到产品运营，数据迭代。 一个好的产品经理需要多学、多交流、多实践、多反思，还需要有远见。就目前的环境来看，学习产品经理的方式比较多各种产品经理相关的网站、书籍都能够学到相关知识，在产品部这里，你可以得到一些学习的资源帮助你成长，和产品部的大家相互交流。如果，你有一个好的点子，也可以动用协会的资源和其他部门一起完成共研项目'
      },
      tableData: [
        {
          name: '黄林杰',
          number: '221900136',
          status: '管理员'
        },
        {
          name: '黄林杰',
          number: '221900136',
          status: '管理员'
        }
      ]
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
.verticalBara {
        width: 1px;
        height: 1500px;
        background: rgb(228, 228, 228);
        display: inline-block;
        margin-left: 40px;
}
.verticalBarb {
        width: 1px;
        height: 1500px;
        background: rgb(228, 228, 228);
        display: inline-block;
        margin-left: 162px;
        margin-right: 0px;
        margin-top: -245px;
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
  background:linear-gradient(90deg,rgb(252, 252, 252) 270px,white 40px);
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
  /*left: 37px;*/
  border: 2px solid rgb(158, 167, 180);
}
.arrow:after,
.arrow:before {
  border: solid transparent;
  content: " ";
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
  width: 840px;
  position: relative;
  top: 220px;
  font-size: 20px;
  font-family: bold;
  .el-button {
    font-size: 18px;
    position: inherit;
    left: 710px;
  }
  .newintroduce {
    text-indent: 2em;
  }
}
.IntroTable {
  position: relative;
  top: 400px;
  left: 50px;
}
.el-container {
  height: 1500px;
}
.el-main {
  background-color: white;
}
.el-table{
  position: relative;
  top: 80px;
  width: 685px;
  text-align: center im !important;
  font-size: 15px;
}
</style>
