<template>
  <div>
    登录
    <el-button @click="login">登录</el-button>
  </div>
</template>
<script>
export default {
  mounted() {},
  methods: {
    login() {
      localStorage.setItem("token", "666");
      this.$router.push("/");
    },
  },
};
</script>
