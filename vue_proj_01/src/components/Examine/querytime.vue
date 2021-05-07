<template>
  <div>
    <div style="background-color: rgb(249, 249, 249)">
      <div class="verticalBar"></div>
      <div class="department">
        考核周期内部
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
            <i class="el-icon-search"></i>
            考核周期
          </div>
        </div>
        <div
          class="line"
          style="width: 100%; height: 0.5px; position: relative; left: -20px"
        ></div>
        <div class="goto_test">
            <el-row>
                <el-col :span="6">
              <div style="position: relative; margin-left: 60px">
                <span>考核周期名字:</span>
                <span class="wordstyle">考核周期——19级上</span>
              </div>
            </el-col>
            <el-col :span="2" push="13">
              <el-button>结束考核周期</el-button>
            </el-col>
            <el-col :span="2" push="13">
              <el-button>删除考核周期</el-button>
            </el-col>
            </el-row>
        </div>
        <div
          class="line"
          style="width: 100%; height: 1px; position: relative; left: -20px"
        ></div>
        <div class="queryHead">
          <el-row :gutter="2">
            <el-col :span="6">
              <div style="position: relative; margin-left: 26px">
                <i class="iconfont icon-querylist"></i>
                问卷/考核列表
              </div>
            </el-col>
            <el-col :span="2" push="14">
              <el-button>生成报名问卷</el-button>
            </el-col>
            <el-col :span="2" push="14">
              <el-button>生成考核任务</el-button>
            </el-col>
          </el-row>
        </div>
        <el-table
          ref="multipleTable"
          :data="querylist"
          tooltip-effect="dark"
          style="width: 1778px"
          @selection-change="handleSelectionChange"
          border :header-cell-style="{background:'rgb(249, 250, 252)',color:'black'}"
        >
          <el-table-column type="selection" width="71"> </el-table-column>
          <el-table-column prop="name" label="问卷/考核名字" width="280" align="center">
          </el-table-column>
          <el-table-column prop="link" label="问卷/考核链接"  width="330" align="center" show-overflow-tooltip>
          </el-table-column>
          <el-table-column prop="condition" label="问卷/考核状态"  width="307" align="center" show-overflow-tooltip>
          </el-table-column>
          <el-table-column label="操作" align="center" show-overflow-tooltip>
          <el-button type="text" > 进入审核页面 </el-button>
          <el-button type="text" @click="dialogVisible = true"> 修改问卷状态 </el-button>
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
        <el-dialog
            title="修改问卷状态"
            :visible.sync="dialogVisible"
            width="30%"
            :append-to-body="true">
          <el-form :model="formInline" ref="formInline" :rules="rules">
            <el-form-item label="您将该问卷的状态修改为：" prop="resource" >
              <el-radio-group v-model="formInline.resource">
                <el-radio v-model="formInline.radio" label="1">进行中</el-radio>
                <el-radio v-model="formInline.radio" label="2">已截止</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-form>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
 </el-dialog>
      </el-main>
      <div class="verticalBarb"></div>
    </el-container>
  </div>
</template>

<script>
export default {
    data() {
        return {
            dialogVisible: false,
            querylist: [
                {
                    name: '报名问卷',
                    link: 'https://qz8y68.axshare.com',
                    condition: '进行中'
                },
                {
                    name: '考核1',
                    link: 'https://qz8y68.axshare.com',
                    condition: '已截止'
                },
                {
                    name: '考核2',
                    link: 'https://qz8y68.axshare.com',
                    condition: '进行中'
                }
            ],
    formInline: {
         resource: '',
         radio: ''
      },
      rules: {
        resource: [
            { required: true, message: '请选择问卷状态', trigger: 'change' }
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
.verticalBarb {
  width: 1px;
  height: 1500px;
  background: rgb(228, 228, 228);
  float: right;
  margin-right: 37px;
  margin-left: -37px;
  margin-top: 0px;
}
.goto_test {
  font-size: 22px;
  width: 100%;
  height: 92px;
  line-height: 92px;
  .wordstyle {
      font-weight:bold;
  }
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
.el-table{
  position: absolute;
  top: 309px;
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
