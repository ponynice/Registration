<template>
  <div>
    <div style="background-color: rgb(249, 249, 249)">
      <div class="verticalBar"></div>
      <div class="department">
        审核报名
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
                <el-button size="medium" font-size="15px">进入审核</el-button>
              </div>
            </el-col>
          </el-row>
        </div>
        <div
          class="line"
          style="width: 100%; height: 1px; position: relative; left: -20px"
        ></div>
        <div class="queryHead">
              <div style="position: relative; margin-left: 26px">
                <i class="iconfont icon-querylist"></i>
                数据列表
              </div>
        </div>
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
          :cell-style="cellStyle"
        >
          <el-table-column type="selection" width="71"> </el-table-column>
          <el-table-column prop="condition" label="审核状态" width="278" align="center">
          </el-table-column>
          <el-table-column prop="nums" label="学号" width="328" align="center">
          </el-table-column>
          <el-table-column prop="name" label="姓名"  width="308" align="center" show-overflow-tooltip>
          </el-table-column>
          <el-table-column prop="operate" label="操作" align="center" show-overflow-tooltip>
          <el-button type="text" @click="dialogVisible = true" > 查看学生提交 </el-button>
          <el-button type="text" @click="dialogVisible = true" > 修改审核状态 </el-button>
          <el-dialog
            title="修改审核状态"
            :visible.sync="dialogVisible"
            width="50%"
            :append-to-body="true">
          <el-form :model="formInline" ref="formInline" :rules="rules">
            <el-form-item label="您对该学生的审核结果为：" prop="resource" >
              <el-radio-group v-model="formInline.resource">
                <el-radio v-model="formInline.radio" label="1">已通过</el-radio>
                <el-radio v-model="formInline.radio" label="2">未通过</el-radio>
                <el-radio v-model="formInline.radio" label="3">待审核</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-form>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
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
          label: '20级下'
        }
      ],
      value: this.$route.query.name,
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
      userlist: [
        {
          name: '黄林杰',
          nums: '221900136',
          condition: '已通过',
          radio: '1'
        },
        {
          name: '黄林杰',
          nums: '221900136',
          condition: '未通过',
          radio: '2'
        },
        {
          name: '黄林杰',
          nums: '221900136',
          condition: '待审核',
          radio: '3'
        }
      ],
      dialogVisible: false,
      formInline: {
         resource: '',
         radio: ''
      },
      rules: {
        resource: [
            { required: true, message: '请选择考核结果', trigger: 'change' }
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
      cellStyle(row, column, rowIndex, columnIndex) {
        if (row.column.label === '审核状态' && row.row.condition === '待审核'){
          return 'color:rgb(170, 178, 200)'
        }
      },
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
