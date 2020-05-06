<template>
  <div class="home">
    <el-row>
      <el-col :offset="2" :span="20">
        <el-row>
          <el-col :span="12">
            <div>
              <span style="font-size: 20px">个人中心</span>
            </div>
          </el-col>
          <el-col :span="12">
            <div>
              <el-button style="float: right; padding: 3px 0; margin-top:4px" type="text">退出登录</el-button>
            </div>
          </el-col>
        </el-row>

        <el-divider></el-divider>
        <el-tabs v-model="activeName" type="card">
          <el-tab-pane label="个人信息" name="first">
            <el-form
              :model="ruleForm"
              status-icon
              :rules="rules"
              ref="ruleForm"
              label-width="100px"
              class="demo-ruleForm"
              style="width: 360px"
            >
              <el-form-item label="用户名" prop="age">
                <el-input v-model.number="ruleForm.age"></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="pass">
                <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="确认密码" prop="checkPass">
                <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">修改</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
              </el-form-item>
            </el-form>

            <el-divider></el-divider>
            <el-row>
              <el-col :span="3">
                <div>我的会员:</div>
              </el-col>
              <el-col :span="18">
                <div>会员简介</div>
              </el-col>
            </el-row>
            <div style="height: 20px"></div>
            <el-row>
              <el-col :span="8">
                <div>到期日期: 2020年5月20日</div>
              </el-col>
              <el-col :span="10">
                <div>
                  <el-button type="primary" size="small">续费</el-button>
                </div>
              </el-col>
            </el-row>
            <div style="height: 10px"></div>
            <el-row>
              <el-col :span="8">
                <div>未开通此服务</div>
              </el-col>
              <el-col :span="10">
                <div>
                  <el-button type="success" size="small">开通</el-button>
                </div>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="收藏" name="second">
            <div>
              <ul class="list-unstyled">
                <b-media tag="li">
                  <template v-slot:aside>
                    <b-img blank blank-color="#abc" width="64" alt="placeholder"></b-img>
                  </template>
                  <h5 class="mt-0 mb-1">新闻一</h5>
                  <p class="mb-0">
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
                    Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc
                    ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                  </p>
                </b-media>

                <b-media tag="li" class="my-4">
                  <template v-slot:aside>
                    <b-img blank blank-color="#cba" width="64" alt="placeholder"></b-img>
                  </template>

                  <h5 class="mt-0 mb-1">新闻二</h5>
                  <p class="mb-0">
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
                    Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc
                    ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                  </p>
                </b-media>

                <b-media tag="li">
                  <template v-slot:aside>
                    <b-img blank blank-color="#bac" width="64" alt="placeholder"></b-img>
                  </template>

                  <h5 class="mt-0 mb-1">新闻三</h5>
                  <p class="mb-0">
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
                    Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc
                    ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                  </p>
                </b-media>
              </ul>
            </div>
          </el-tab-pane>
          <el-tab-pane label="我的关注" name="third">
            <div>
              <ul class="list-unstyled">
                <b-media tag="li">
                  <template v-slot:aside>
                    <b-img blank blank-color="#abc" width="64" alt="placeholder"></b-img>
                  </template>
                  <h5 class="mt-0 mb-1">股票预测一</h5>
                  <p class="mb-0">
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
                    Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc
                    ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                  </p>
                </b-media>

                <b-media tag="li" class="my-4">
                  <template v-slot:aside>
                    <b-img blank blank-color="#cba" width="64" alt="placeholder"></b-img>
                  </template>

                  <h5 class="mt-0 mb-1">股票预测二</h5>
                  <p class="mb-0">
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
                    Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc
                    ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                  </p>
                </b-media>

                <b-media tag="li">
                  <template v-slot:aside>
                    <b-img blank blank-color="#bac" width="64" alt="placeholder"></b-img>
                  </template>

                  <h5 class="mt-0 mb-1">股票预测三</h5>
                  <p class="mb-0">
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
                    Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc
                    ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                  </p>
                </b-media>
              </ul>
            </div>
          </el-tab-pane>
          <el-tab-pane label="历史记录" name="fourth">
                <div>
              <ul class="list-unstyled">
                <b-media tag="li">
                  <template v-slot:aside>
                    <b-img blank blank-color="#abc" width="64" alt="placeholder"></b-img>
                  </template>
                  <h5 class="mt-0 mb-1">记录一</h5>
                  <p class="mb-0">
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
                    Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc
                    ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                  </p>
                </b-media>

                <b-media tag="li" class="my-4">
                  <template v-slot:aside>
                    <b-img blank blank-color="#cba" width="64" alt="placeholder"></b-img>
                  </template>

                  <h5 class="mt-0 mb-1">记录二</h5>
                  <p class="mb-0">
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
                    Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc
                    ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                  </p>
                </b-media>

                <b-media tag="li">
                  <template v-slot:aside>
                    <b-img blank blank-color="#bac" width="64" alt="placeholder"></b-img>
                  </template>

                  <h5 class="mt-0 mb-1">记录三</h5>
                  <p class="mb-0">
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
                    Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc
                    ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                  </p>
                </b-media>
              </ul>
            </div>
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("用户名不能为空"));
      }
      setTimeout(() => {
        console.log(value, "ss");
        if (Number.isInteger(value)) {
          callback(new Error("用户名不能全是数字，请重新输入"));
        } else {
          if (value.length < 4) {
            callback(new Error("用户名不能少于三位"));
          }
        }
      }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };

    return {
      value: 1,
      activeName: "first",
      ruleForm: {
        pass: "",
        checkPass: "",
        age: ""
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        age: [{ validator: checkAge, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
