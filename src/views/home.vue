<template>
  <div>
    <el-button @click="remove">退出登录</el-button>
    <el-button @click="toLogin">去登录</el-button>
    <router-link to="/about">去about</router-link>
    <el-menu
      class="el-menu-vertical-demo"
      background-color="#7cabb1"
      text-color="#141e1b"
      active-text-color="#ffd04b"
    >
      <slide-bar
        :menuList="menuList"
        v-for="menu in menuList"
        :key="menu.path"
        :itemMenu="menu"
      />
    </el-menu>
    <el-select v-model="value">
      <el-option
        v-for="(item, index) in list"
        :key="index"
        :value="item.value"
        :label="item.label"
      />
    </el-select>
    <el-button @click="changeList">换List</el-button>
  </div>
</template>
<script>
import SlideBar from "@/components/SlideBar.vue";
export default {
  name: "Home",
  components: {
    SlideBar,
  },
  props: {},
  data() {
    return {
      value: "1",
      s: "",
      list: [
        {
          value: "1",
          label: "你好",
        },
        {
          value: "2",
          label: "好",
        },
      ],
      menuList: [
        {
          path: "1", //菜单项所对应的路由路径
          title: "功能1", //菜单项名称
          children: [
            {
              path: "1-1",
              title: "功能1-1",
              children: [],
            },
          ], //是否有子菜单，若没有，则为[]
        },
        {
          path: "2",
          title: "功能2",
          children: [],
        },
        {
          path: "3",
          title: "功能3",
          children: [
            {
              path: "3-1",
              title: "功能3-1",
              children: [],
            },
            {
              path: "3-2",
              title: "功能3-2",
              children: [
                {
                  path: "3-2-1",
                  title: "功能3-2-1",
                  children: [
                    {
                      path: "3-2-1-1",
                      title: "递归调用",
                      children: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    };
  },
  mounted() {
    this.s =
      '<p>22<link rel="stylesheet" href="https://g.alicdn.com/de/prismplayer/2.7.4/skins/default/aliplayer-min.css"/></p>';
  },
  methods: {
    changeList() {
      this.list = [
        {
          value: "1",
          label: "秀啊",
        },
        {
          value: "2",
          label: "天亮",
        },
      ];
    },
    remove() {
      localStorage.removeItem("token");
      this.$router.push("/login");
    },
    toLogin() {
      this.$router.push("/login");
    },
  },
};
</script>
<style>
.el-menu {
  width: 500px;
}
</style>
