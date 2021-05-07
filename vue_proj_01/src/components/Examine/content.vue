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
              <el-input v-model="TitleForm.show" type="textarea" :rows="5"></el-input>
            </el-form-item>
          </el-form>
    </div>
    <div class="box2">
      <sapn>请输入正确的个人信息：</sapn>
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
  <el-form-item label=" 学号">
    <el-input v-model="formInline.numbers" placeholder="请输入内容"></el-input>
  </el-form-item>
  <el-form-item label="姓名">
    <el-input v-model="formInline.region" placeholder="请输入内容">
    </el-input>
  </el-form-item>
</el-form>
    </div>
    <div class="box3">
    </div>
    <el-button type="success" class="generate">生成考核链接</el-button>
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
      TitleForm: {
        name: '考核标题',
        show: '请输入考核详细内容'
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
.line {
  height: 1px;
  width: 100%;
  margin: 2px auto;
  background-color: rgb(204, 204, 204);
}
.box1 {
  border-style: solid;
  border-width:1px;
  border-radius: 0px;
  border-color: rgb(121, 121, 121);
  width: 1114px;
  height: 240px;
  background-color: rgb(248, 248, 248);
  position: absolute;
  left: 18%;
}
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
  top: 330px;
  >sapn {
    color: rgb(121, 121, 121);
    position: absolute;
    left: 10px;
    top: 15px;
    font-size: 22px;
  }
  .el-form {
    font-size: 25px;
    position: absolute;
    left: 20%;
    top: 60px;
  }
}
.box3 {
  border-style: solid;
  border-width:1px;
  border-radius: 0px;
  border-color: rgb(121, 121, 121);
  width: 1114px;
  height: 370px;
  background-color: rgb(248, 248, 248);
  position: absolute;
  left: 18%;
  top: 530px;
}
.generate {
  position: absolute;
  left: 44%;
  top: 910px;
  font-size: 15px;
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
