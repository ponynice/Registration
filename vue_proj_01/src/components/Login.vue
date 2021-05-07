<template>
    <div class="login_container">
        <div class="login_box">
            <h3 class="login_title">西二报名管理系统</h3>
            <!--登录-->
            <el-form ref="LoginFormRef" :model="LoginForm" :rules="LoginFormRules" label-width="0px" class="login_form">
                <!--用户名-->
                <el-form-item prop="username">
                    <el-input v-model="LoginForm.username" prefix-icon="iconfont icon-dengluyonghu"></el-input>
                </el-form-item>
                <!--密码-->
                <el-form-item prop="password">
                    <el-input type="password" v-model="LoginForm.password" prefix-icon="iconfont icon-denglu-mima" show-password></el-input>
                </el-form-item>
                <el-radio v-model="LoginForm.radio" label="1">普通管理员</el-radio>
                <el-radio v-model="LoginForm.radio" label="2">超级管理员</el-radio>
                <!--按钮-->
                <el-row :gutter="20">
                    <el-col :span="10">
                        <el-button type="text" @click="dialogVisible = true">忘记密码</el-button>
                    </el-col>
                    <el-col :span="10" push="4">
                        <el-form-item class="btns">
                            <el-button type="primary" @click="login()">登录</el-button>
                            <el-button type="info" @click="resetLoginForm">重置</el-button>
                         </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
        </div>
        <el-dialog
                    title="通过邮箱找回密码"
                    :visible.sync="dialogVisible"
                    width="40%">
                   <el-form :model="findForm" :rules="findFormRules" ref="findFormRef" label-width="70px">
                     <el-form-item label="邮箱" prop="email">
                        <el-row :gutter="10">
                            <el-col :span="19">
                                <el-input v-model="findForm.email" placeholder="请输入用户邮箱"></el-input>
                            </el-col>
                            <el-col :span="4">
                                <el-button type="success">发送验证码</el-button>
                            </el-col>
                        </el-row>
                    </el-form-item>
                    <el-form-item label="验证码" prop="rightnum">
                        <el-input v-model="findForm.rightnum" placeholder="请输入6位验证码"></el-input>
                    </el-form-item>
                   </el-form>
                    <span slot="footer" class="dialog-footer">
                            <el-button @click="dialogVisible = false">取 消</el-button>
                            <el-button type="primary" @click="dialogVisible = false,AdialogVisible = true">确 定</el-button>
                    </span>
                 </el-dialog>
                 <el-dialog
                    title="修改密码"
                    :visible.sync="AdialogVisible"
                    width="40%">
                   <el-form :model="wordForm" :rules="wordFormRules" ref="wordFormRef" label-width="130px">
                     <el-form-item label="请输入新密码" prop="reword">
                                <el-input v-model="wordForm.reword" placeholder="请输入新密码" type="password"></el-input>
                    </el-form-item>
                    <el-form-item label="再次输入新密码" prop="rreword">
                        <el-input v-model="wordForm.rreword" placeholder="再次输入新密码" type="password"></el-input>
                    </el-form-item>
                   </el-form>
                    <span slot="footer" class="dialog-footer">
                            <el-button @click="AdialogVisible = false">取 消</el-button>
                            <el-button type="primary" @click="AdialogVisible = false">确 定</el-button>
                    </span>
                 </el-dialog>
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
            dialogVisible: false,
            AdialogVisible: false,
            LoginForm: {
                username: '',
                password: '',
                radio: '1'
            },
            LoginFormRules: {
                username: [
                    { required: true, message: '请输入登录名称', trigger: 'blur' },
                    { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入用户密码', trigger: 'blur' },
                    { min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur' }
                ]
            },
            findForm: {
                email: '',
                rightnum: ''
            },
            findFormRules: {
                email: [
                    { required: true, message: '请输入用户邮箱', trigger: 'blur' },
                    { validator: checkEmail, trigger: 'blur' }
                ],
                rightnum: [
                    { required: true, message: '请输入六位验证码', trigger: 'blur' },
                    { min: 6, max: 6, message: '长度为 6 个字符', trigger: 'blur' }
                ]
            },
            wordForm: {
                reword: '',
                rreword: ''
            },
            wordFormRules: {
                reword: [
                    { required: true, message: '请输入用户新密码', trigger: 'blur' },
                    { min: 8, max: 15, message: '长度在 8 到 15 个字符', trigger: 'blur' }
                ],
                rreword: [
                    { required: true, message: '请再次输入用户新密码', trigger: 'blur' },
                    { min: 8, max: 15, message: '长度在 8 到 15 个字符', trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        resetLoginForm() {
           this.$refs.LoginFormRef.resetFields()
        },
        login() {
            this.$refs.LoginFormRef.validate(async valid => {
                console.log(valid)
                if (valid) {
                    const { data: res } = await this.$http.get('api/csrf/token')
                        window.sessionStorage.setItem('token', res.data.token)
                    this.$http({
                        url: 'api/auth/login',
                        method: 'post',
                        data: {
                            uid: this.LoginForm.username,
                            paswd: this.LoginForm.password
                        }
                    }).then(function(res){
                    document.write(res.body)
                    if (this.LoginForm.radio === '1') this.$router.push('/original')
                else this.$router.push('/super')
                         }, function(res){
                    console.log(res.status)
                })
                }
            })
        }
    }
}
</script>

<style lang="less" scoped>
.login_container{
    background-color: rgb(26, 188, 156);
    height: 100%;
}
.login_box{
    width: 450px;
    height: 300px;
    background-color: #fff;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);

    /*.avater_box{
        height: 130px;
        width: 130px;
        border: 1px solid #eee;
        border-radius: 50%;
        padding: 10px;
        position: absolute;
        left: 50%;
        transform: translate(-50%,-50%);
        background-color: #fff;
        img{
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background-color: #eee;
        }
    }*/
}
.login_title {
    font-size: 30px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: rgb(26, 188, 156);
    text-align: center;
}
.login_form {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
}
.btns {
    display: flex;
    justify-content: flex-end;
}
</style>
