<template>
  <div class="login">
    <nav-bar class="login-bar">
      <span slot="center">{{title}}</span>
    </nav-bar>
    <div v-if="isLogin" class="content">
      <span>{{user.name}}</span>
      <el-button type="danger" @click="logout">退出</el-button>
    </div>
    <div v-else>
      <div class="form">
        <el-input v-model="username" placeholder="请输入用户名"></el-input>
        <el-input v-model="password" type="password" placeholder="请输入密码"></el-input>
        <el-button type="primary" @click="submit">登录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "../navBar/NavBar";
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  components: {
    NavBar
  },
  computed: {
    user() {
      return this.$store.getters.getUser;
    },
    isLogin() {
      return !(this.user == undefined || this.user == null);
    },
    title() {
      return this.isLogin ? "会员信息" : "会员登录";
    }
  },
  methods: {
    submit() {
      if (this.username == "ruz" && this.password == "123") {
        this.$store.commit("login", { name: this.username });
      } else {
        this.$message({
          showClose: true,
          message: "登录失败，请检查用户名或密码是否正确。",
          type: "error",
          customClass: "message"
        });
      }
    },
    logout() {
      this.$store.commit("logout");
    }
  }
};
</script>

<style scoped>
.login {
  height: 100vh;
  width: 100vw;
}

.login-bar {
  border-bottom: solid 1px rgba(236, 235, 235, 0.2);
  background: var(--color-title);
  color: #fff;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
}

.content {
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 10px;
  margin-top: 44px;
}

.form {
  margin-top: 44px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  flex: 1;
}
.form * {
  margin-top: 20px;
}
</style>