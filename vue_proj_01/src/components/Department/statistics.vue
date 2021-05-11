<template>
<div>
  <div style="background-color: rgb(249, 249, 249)">
    <div class="verticalBar"></div>
    <div class="department">
      报名统计
    <el-button plain style="position:absolute;left:1650px;top:5px;" @click="goback()">
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
            <i class="el-icon-search"></i>
            筛选查询
            <span style="position:absolute;left:1530px;top:20px;">
            <i class="el-icon-arrow-up"></i>
            收起筛选
            </span>
            <el-button plain style="position:absolute;left:1650px;top:15px;">查询结果</el-button>
          </div>
        </div>
        <div
          class="line"
          style="width: 100%; height: 0.5px; position: relative; left: -20px"
        ></div>
        <div class="goto_test">
          <el-row :gutter="10">
            <el-col :span="6">
              <div style="position: relative; margin-left: 60px">
                <span>部门:</span>
                <span style="font-size: 30px; font-family: bold">产品部</span>
              </div>
            </el-col>
            <el-col :span="6">
              <div>
                考核周期：
                <el-select v-model="value" placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </div>
            </el-col>
            <el-col :span="6">
              <div>
                考核轮次：
                <el-select v-model="num" placeholder="请选择">
                  <el-option
                    v-for="item in numbers"
                    :key="item.num"
                    :label="item.label"
                    :value="item.num"
                  >
                  </el-option>
                </el-select>
              </div>
            </el-col>
            <el-col :span="6">
              <div>
                通过情况：
                <el-select v-model="pass" placeholder="请选择">
                  <el-option
                    v-for="item in passes"
                    :key="item.pass"
                    :label="item.label"
                    :value="item.pass"
                  >
                  </el-option>
                </el-select>
              </div>
            </el-col>
          </el-row>
        </div>
        <div
          class="line"
          style="width: 100%; height: 1px; position: relative; left: -20px"
        ></div>
        <div class="queryHead">
          <el-row :gutter="2">
            <el-col :span="10">
              <div style="position: relative; margin-left: 26px">
                <i class="iconfont icon-querylist"></i>
                数据列表
              </div>
            </el-col>
            <el-col :span="2" push="8">
              <el-button @click="dialogVisible = true">添加学生成员</el-button>
            </el-col>
            <el-col :span="2" push="8">
              <el-button>群发确认邮件</el-button>
            </el-col>
            <el-col :span="2" push="8">
              <el-button>群发通知邮件</el-button>
            </el-col>
          </el-row>
        </div>
        <el-dialog
            title="添加学生成员"
            :visible.sync="dialogVisible"
            width="30%"
            :append-to-body="true"
            @close="addFormClosed">
          <el-form :model="addForm" :rules="addFormRules" ref="addFormRef" label-width="70px">
            <el-form-item label="学号" prop="studentnum">
              <el-input v-model="addForm.studentnum"></el-input>
            </el-form-item>
            <el-form-item label="姓名" prop="studentname">
              <el-input v-model="addForm.studentname"></el-input>
            </el-form-item>
            <el-form-item label="QQ" prop="studentqq">
              <el-input v-model="addForm.studentqq"></el-input>
            </el-form-item>
            <el-form-item label="邮箱" prop="studentemail">
              <el-input v-model="addForm.studentemail"></el-input>
            </el-form-item>
          </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false,addToStudent()">确 定</el-button>
      </span>
        </el-dialog>
        <div
          class="line"
          style="width: 100%; height: 1px; position: relative; left: -20px"
        ></div>
        <el-table
          ref="multipleTable"
          :data="userlist"
          tooltip-effect="dark"
          style="width: 1778px"
          @selection-change="handleSelectionChange"
          border :header-cell-style="{background:'rgb(249, 250, 252)',color:'black'}"
        >
          <el-table-column type="selection" width="71"> </el-table-column>
          <el-table-column prop="nums" label="学号" width="250" align="center">
          </el-table-column>
          <el-table-column prop="name" label="姓名"  width="235" align="center" show-overflow-tooltip>
          </el-table-column>
          <el-table-column prop="qq" label="QQ"  width="150" align="center" show-overflow-tooltip>
          </el-table-column>
          <el-table-column prop="email" label="邮箱"  width="368" align="center" show-overflow-tooltip>
          </el-table-column>
          <el-table-column prop="operate" label="操作" align="center" show-overflow-tooltip>
          <el-button type="text" @click="AdialogVisible = true" > 删除学生信息 </el-button>
          <el-button type="text" @click="BdialogVisible = true" > 修改学生信息 </el-button>
          <el-dialog
            title="删除学生信息"
            :visible.sync="AdialogVisible"
            width="30%"
            :append-to-body="true">
          <el-form >
          </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="AdialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="AdialogVisible = false,deleteStudent(index)">确 定</el-button>
      </span>
 </el-dialog>
 <el-dialog
            title="修改学生信息"
            :visible.sync="BdialogVisible"
            width="30%"
            :append-to-body="true"
            @click="reviseForm()">
   <el-form :model="editForm" :rules="editFormRules" ref="editFormRef" label-width="70px">
            <el-form-item label="学号" prop="studentnum">
              <el-input v-model="editForm.studentnum"></el-input>
            </el-form-item>
            <el-form-item label="姓名" prop="studentname">
              <el-input v-model="editForm.studentname"></el-input>
            </el-form-item>
            <el-form-item label="QQ" prop="studentqq">
              <el-input v-model="editForm.studentqq"></el-input>
            </el-form-item>
            <el-form-item label="邮箱" prop="studentemail">
              <el-input v-model="editForm.studentemail"></el-input>
            </el-form-item>
          </el-form>
  <span slot="footer" class="dialog-footer">
    <el-button @click="BdialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="BdialogVisible = false">确 定</el-button>
  </span>
 </el-dialog>
          </el-table-column>
        </el-table>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="1"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="10"
          background
          layout="total, sizes, prev, pager, next, jumper"
          :total="100"
          >
        </el-pagination>
      </el-main>
      <div class="verticalBarb"></div>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    var checkEmail = (rule, value, cb) => {
        const regEmail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/
          if (regEmail.test(value)) {
            return cb()
          }
          cb(new Error('请输入合法的邮箱'))
      }
    return {
      options: [
        {
          value: '选项1',
          label: '19级上'
        },
        {
          value: '选项2',
          label: '19级下'
        },
        {
          value: '选项3',
          label: '20级上'
        },
        {
          value: '选项4',
          label: '西二寒假考核'
        }
      ],
      value: '',
      num: '',
      numbers: [
        {
          num: '选项1',
          label: '西二报名'
        },
        {
          num: '选项2',
          label: '第一轮考核'
        },
        {
          num: '选项3',
          label: '第二轮考核'
        },
        {
          num: '选项4',
          label: '寒假考核'
        }
      ],
      pass: '',
      passes: [
        {
          pass: '选项1',
          label: '已通过'
        },
        {
          pass: '选项2',
          label: '未通过'
        },
        {
          pass: '选项3',
          label: '待审核'
        }
      ],
      userlist: [
        {
          name: '黄林杰',
          nums: '221900136',
          qq: '1624060852',
          email: '13779964554@163.com'
        },
        {
          name: '黄林杰',
          nums: '221900136',
          qq: '1624060852',
          email: '13779964554@163.com'
        },
        {
          name: '黄林杰',
          nums: '221900136',
          qq: '1624060852',
          email: '13779964554@163.com'
        }
      ],
      AdialogVisible: false,
      BdialogVisible: false,
      dialogVisible: false,
      addForm: {
        studentnum: '',
        studentname: '',
        studentqq: '',
        studentemail: ''
      },
      editForm: {
        studentnum: '',
        studentname: '',
        studentqq: '',
        studentemail: ''
      },
      addFormRules: {
        studentnum: [
          { required: true, message: '请输入要增加的学生学号', trigger: 'blur' },
          { min: 9, max: 9, message: '学生学号长度为 9 个字符', trigger: 'blur' }
        ],
        studentname: [
          { required: true, message: '请输入要增加的学生姓名', trigger: 'blur' },
          { min: 2, max: 10, message: '学生姓名长度在 2 到 10 个字符', trigger: 'blur' }
        ],
        studentqq: [
          { required: true, message: '请输入要增加的学生QQ', trigger: 'blur' },
          { min: 8, max: 12, message: '长度在 8 到 12 个字符', trigger: 'blur' }
        ],
        studentemail: [
          { required: true, message: '请输入要增加的学生邮箱', trigger: 'blur' },
          { validator: checkEmail, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`)
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`)
      },
      addFormClosed() {
        this.$refs.addFormRef.resetFields()
      },
      reviseForm() {
        this.BdialogVisible = true
      },
      goback() {
        this.$router.go(-1)
      },
      addToStudent() {
        var data = {
          name: this.addForm.studentname,
          nums: this.addForm.studentnum,
          qq: this.addForm.studentqq,
          email: this.addForm.studentemail
        }
        this.userlist.push(data)
        this.$refs.addFormRef.resetFields()
      },
      deleteStudent(index) {
        this.userlist.splice(index, 1)
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
.queryHead {
  position: relative;
  margin-top: 0px;
  margin-left: -18px;
  margin-right: -10px;
  font-size: 20px;
  color: rgb(102, 102, 102);
  background-color: rgb(243, 243, 243);
  width: 100%;
  height: 74px;
  line-height: 74px;
  .el-row {
    width: 100%;
    position: absolute;
    top: 2px;
  }
}
.goto_test {
  font-size: 22px;
  width: 100%;
  height: 92px;
  line-height: 92px;
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
  top: 373px;
  left:40px;
  text-align: center im !important;
  font-size: 15px;
}
.el-pagination {
  position: absolute;
  top: 1400px;
  right:100px;
}
/*设置xx条/页的框的颜色*/
.el-select .el-input.is-focus .el-input__inner,
.el-pagination__sizes .el-input .el-input__inner:hover,
.el-select .el-input__inner:focus {
    border-color: #18ab8f;
}
/*设置当前页码的样式，及鼠标移上其他页码时的样式,以及左右箭头鼠标移上的样式*/
.el-pager li.active,.el-pager li:hover,
.el-pagination button:hover {
    color: #18ab8f;
}
/*设置当前选中的“xx条/页”的样式，是点击以后弹出来的框里的*/
li.el-select-dropdown__item.selected {
    color: #18ab8f;
}
</style>
