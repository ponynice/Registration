<template>
  <div class="box3">
    <span class="time">(设置截止时间)</span>
    <div class="block">
      <span>选择截止日期：</span>
      <el-date-picker v-model="value1" type="date" placeholder="选择日期">
      </el-date-picker>
    </div>
      <div class="block1">
        <span>选择截止时间：</span>
        <el-time-select
          v-model="value"
          :picker-options="{
            start: '21:30',
            step: '00:15',
            end: '24:00',
          }"
          placeholder="选择时间"
        >
        </el-time-select>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
             value1: '',
            value: ''
        }
    }
}
</script>

<style lang="less" scoped>
.box3 {
  border-style: solid;
  border-width:1px;
  border-radius: 0px;
  border-color: rgb(121, 121, 121);
  width: 1114px;
  height: 187px;
  background-color: rgb(248, 248, 248);
  position: absolute;
  left: 18%;
  top: 300px;
  .time {
    color: rgb(121, 121, 121);
    font-size: 30px;
    position: absolute;
    left:5%;
    top:5%;
  }
  .block {
    position: absolute;
    width:50%;
    top: 20%;
    left: 30%;
    >span {
      font-szie: 30px;
    }
  }
  .block1 {
    position: absolute;
    width:60%;
    top: 100px;
    left: 30%;
    >span {
      font-szie: 30px;
    }
  }
}
</style>
