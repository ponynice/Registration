<template>
    <div class="box2">
      <el-form :inline="true" :model="formInline" class="demo-form-inline1">
  <el-form-item label=" 学号">
    <el-input v-model="formInline.numbers" placeholder="请输入内容"></el-input>
  </el-form-item>
  <el-form-item label="姓名">
    <el-input v-model="formInline.region" placeholder="请输入内容">
    </el-input>
  </el-form-item>
</el-form>
<el-form :inline="true" :model="formInline2" class="demo-form-inline2">
  <el-form-item label="QQ">
    <el-input v-model="formInline2.qq" placeholder="请输入内容"></el-input>
  </el-form-item>
  <el-form-item label="邮箱">
    <el-input v-model="formInline2.email" placeholder="请输入内容">
    </el-input>
  </el-form-item>
</el-form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            formInline: {
        numbers: '',
        region: ''
      },
       formInline2: {
        qq: '',
        email: ''
      }
        }
    }
}
</script>

<style  lang="less" scoped>
.box2 {
  border-style: solid;
  border-width:1px;
  border-radius: 0px;
  border-color: rgb(121, 121, 121);
  width: 1114px;
  height: 160px;
  background-color: rgb(248, 248, 248);
  position: absolute;
  left: 18%;
  top: 298px;
  .demo-form-inline1 {
    font-size: 25px;
    position: absolute;
    left: 20%;
    top: 20px;
  }
  .demo-form-inline2 {
    font-size: 25px;
    position: absolute;
    left: 20%;
    top: 80px;
  }
}
</style>
