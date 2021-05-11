<template>
  <div>
    <div style="background-color: rgb(249, 249, 249)">
      <div class="verticalBar"></div>
      <div class="department">
        部门管理
        <el-button plain style="position: absolute; left: 1650px; top: 5px" @click="goback()">
          <i class="iconfont icon-ffanhui-"></i>
          返回
        </el-button>
      </div>
      <div class="line"></div>
    </div>
    <el-container>
      <div class="verticalBara"></div>
      <el-main>
        <div class="searchHead">
          <div style="padding: 25px">
            <i class="iconfont icon-querylist"></i>
            数据列表
            <el-button plain style="position: absolute; left: 1650px; top: 15px; font-size: 15px;"
              @click="ADDdialogVisible = true"
              >添加部门</el-button
            >
            <el-dialog
            title="添加部门"
            :visible.sync="ADDdialogVisible"
            width="50%"
            :append-to-body="true">
          <el-form :model="addForm" :rules="addFormRules" ref="addFormRef" label-width="80px">
            <el-form-item label="部门名称" prop="departmentname">
              <el-input v-model="addForm.departmentname"></el-input>
            </el-form-item>
            <el-form-item label="部门简介" prop="departmentintro">
              <el-input v-model="addForm.departmentintro"></el-input>
            </el-form-item>
          </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="ADDdialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="ADDdialogVisible = false,addManage()">确 定</el-button>
      </span>
 </el-dialog>
          </div>
        </div>
        <div
          class="line"
          style="width: 100%; height: 0.5px; position: relative; left: -20px"
        ></div>
        <el-table
          ref="multipleTable"
          :data="userlist"
          tooltip-effect="dark"
          style="width: 1778px"
          border :header-cell-style="{background:'rgb(249, 250, 252)',color:'black'}"
        >
          <el-table-column prop="name" label="部门名称" width="300px" align="center">
          </el-table-column>
          <el-table-column prop="introduction" label="部门简介"  width="684px" align="center" show-overflow-tooltip>
          </el-table-column>
          <el-table-column prop="num" label="管理员数量"  width="300px" align="center" show-overflow-tooltip>
          </el-table-column>
          <el-table-column  label="操作" align="center" show-overflow-tooltip>
              <el-button type="text" @click="AdialogVisible = true" > 添加管理员 </el-button>
              <el-button type="text" @click="BdialogVisible = true" > 编辑 </el-button>
              <el-button type="text" @click="CdialogVisible = true" > 删除 </el-button>
          </el-table-column>
        </el-table>
      </el-main>
      <div class="verticalBarb"></div>
    </el-container>
  </div>
</template>

<script>
export default {
    data() {
        return {
        ADDdialogVisible: false,
        AdialogVisible: false,
        BdialogVisible: false,
        CdialogVisible: false,
        userlist: [
            {
                name: '产品部',
                introduction: '说到产品经理，大家肯定会想到苹果的乔布斯、微信的张小龙。他们都是“神”一样的产品经理，然而大部分产品经理只是普普通通的“产品人”。产品经理负责一个产品会对其在生命周期的所有事项负责，例如用户调研、用户分析、功能分析、需求分析到产品运营，数据迭代。 一个好的产品经理需要多学、多交流、多实践、多反思，还需要有远见。就目前的环境来看，学习产品经理的方式比较多各种产品经理相关的网站、书籍都能够学到相关知识，在产品部这里，你可以得到一些学习的资源帮助你成长，和产品部的大家相互交流。如果，你有一个好的点子，也可以动用协会的资源和其他部门一起完成共研项目',
                num: '10'
            },
            {
                name: '产品部',
                introduction: '说到产品经理，大家肯定会想到苹果的乔布斯、微信的张小龙。他们都是“神”一样的产品经理，然而大部分产品经理只是普普通通的“产品人”。产品经理负责一个产品会对其在生命周期的所有事项负责，例如用户调研、用户分析、功能分析、需求分析到产品运营，数据迭代。 一个好的产品经理需要多学、多交流、多实践、多反思，还需要有远见。就目前的环境来看，学习产品经理的方式比较多各种产品经理相关的网站、书籍都能够学到相关知识，在产品部这里，你可以得到一些学习的资源帮助你成长，和产品部的大家相互交流。如果，你有一个好的点子，也可以动用协会的资源和其他部门一起完成共研项目',
                num: '10'
            },
            {
                name: '产品部',
                introduction: '说到产品经理，大家肯定会想到苹果的乔布斯、微信的张小龙。他们都是“神”一样的产品经理，然而大部分产品经理只是普普通通的“产品人”。产品经理负责一个产品会对其在生命周期的所有事项负责，例如用户调研、用户分析、功能分析、需求分析到产品运营，数据迭代。 一个好的产品经理需要多学、多交流、多实践、多反思，还需要有远见。就目前的环境来看，学习产品经理的方式比较多各种产品经理相关的网站、书籍都能够学到相关知识，在产品部这里，你可以得到一些学习的资源帮助你成长，和产品部的大家相互交流。如果，你有一个好的点子，也可以动用协会的资源和其他部门一起完成共研项目',
                num: '10'
            }
        ],
        addForm: {
            departmentname: '',
            departmentintro: ''
        },
        addFormRules: {
        departmentname: [
          { required: true, message: '请输入要添加的部门名称', trigger: 'blur' }
        ],
        departmentintro: [
          { required: true, message: '请输入要添加的部门简介', trigger: 'blur' }
        ]
        }
    }
},
methods: {
  goback() {
       this.$router.go(-1)
    },
    addManage() {
      var data = {
          name: this.addForm.departmentname,
          introduction: this.addForm.departmentintro,
          num: '10'
        }
        this.userlist.push(data)
        this.$refs.addFormRef.resetFields()
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
.searchHead {
  position: relative;
  margin-top: -20px;
  margin-left: -18px;
  margin-right: -10px;
  font-size: 20px;
  color: rgb(102, 102, 102);
  background-color: rgb(243, 243, 243);
  width: 100%;
  height: 74px;
}
.line {
  height: 1px;
  width: 100%;
  margin: 2px auto;
  background-color: rgb(204, 204, 204);
}
.verticalBara {
  width: 1px;
  height: 1500px;
  background: rgb(228, 228, 228);
  display: inline-block;
  margin-left: 37px;
}
.verticalBarb {
  width: 1px;
  height: 1500px;
  background: rgb(228, 228, 228);
  float: right;
  margin-right: 37px;
  margin-left: -37px;
  margin-top: 0px;
}
.el-table{
  position: absolute;
  top: 195px;
  left:40px;
  text-align: center im !important;
  font-size: 15px;
}
</style>
