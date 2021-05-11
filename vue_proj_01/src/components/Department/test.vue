<template>
  <div style="background-color: rgb(249, 249, 249)">
    <div class="verticalBar"></div>
    <div class="department">
      选择考核周期
      <el-button plain style="position: absolute; left: 1650px; top: 5px" @click="goback()">
        <i class="iconfont icon-ffanhui-"></i>
        返回
      </el-button>
    </div>
    <div class="line"></div>
    <el-row>
      <el-col :span="24"
        ><div class="grid-content bg1">
          <span>考核周期——19级上</span>
          <el-button type="info" icon="el-icon-arrow-right" circle @click="tonext1()"></el-button>
          </div
      ></el-col>
    </el-row>
    <el-row>
      <el-col :span="24"
        ><div class="grid-content bg2">
          <span>考核周期——19级下</span>
          <el-button type="info" icon="el-icon-arrow-right" circle @click="tonext2()"></el-button>
          </div
      ></el-col>
    </el-row>
    <el-row>
      <el-col :span="24"
        ><div class="grid-content bg3">
          <span>考核周期——20级上</span>
          <el-button type="info" icon="el-icon-arrow-right" circle @click="tonext3()"></el-button>
          </div
      ></el-col>
    </el-row>
    <el-row>
      <el-col :span="24"
        ><div class="grid-content bg4">
          <span>考核周期——20级下</span>
          <el-button type="info" icon="el-icon-arrow-right" circle @click="tonext4()"></el-button>
          </div
      ></el-col>
    </el-row>
   <el-button type="success" class="add" @click="dialogVisible = true">
    <i class="el-icon-circle-plus"></i>
     新建考核周期
  </el-button>
  <el-dialog
  title="新建考核周期"
  :visible.sync="dialogVisible"
  width="40%"
  :before-close="handleClose">
  <span>请输入即将新创建的考核周期名字：</span>
  <el-input v-model="input" placeholder="请输入内容"></el-input>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
</el-dialog>
</div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false
    }
  },
  methods: {
    goback() {
        this.$router.go(-1)
      },
      tonext1() {
        this.$router.push({ path:'/3', query:{ name:'19级上' } })
      },
      tonext2() {
        this.$router.push({ path:'/3', query:{ name:'19级下' } })
      },
      tonext3() {
        this.$router.push({ path:'/3', query:{ name:'20级上' } })
      },
      tonext4() {
        this.$router.push({ path:'/3', query:{ name:'20级下' } })
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
  top: 62px;
  left: 40px;
  font-size: 30px;
}
.line {
  height: 1px;
  width: 100%;
  margin: 2px auto;
  background-color: rgb(204, 204, 204);
}
.grid-content {
  position: absolute;
  left:20%;
  width: 1092px;
  height: 65px;
  background-color: rgb(244, 247, 250);
  border-radius: 4px;
  >span {
    line-height: 65px;
    color: rgb(153, 153, 153);
    font-size:20px;
    position: relative;
    margin-left: 25px;
  }
  >span :hover{
    color:rgb(26, 188, 156);
  }
  .el-button {
    position: absolute;
    left: 1040px;
    top:15px;
  }
}
.bg1 {
  position: absolute;
  top: 10px;
}
.bg2 {
  position: absolute;
  top: 90px;
}
.bg3 {
  position: absolute;
  top: 170px;
}
.bg4 {
  position: absolute;
  top: 250px;
}
.add{
  position: absolute;
  top: 450px;
  left:43%;
  font-size:20px;
}
</style>
