<template>
  <div v-if="itemMenu.children">
    <template v-if="itemMenu.children.length == 0">
      <el-menu-item :index="itemMenu.path">
        <i class="el-icon-document"></i>
        <span slot="title">{{ itemMenu.title }}</span>
      </el-menu-item>
    </template>
    <el-submenu v-else :index="itemMenu.path">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span slot="title">{{ itemMenu.title }}</span>
      </template>
      <slide-bar
        v-for="item in itemMenu.children"
        :key="item.path"
        :index="item.title"
        :itemMenu="item"
      />
    </el-submenu>
  </div>
</template>
<script>
export default {
  name: "SlideBar",
  components: {},
  props: {
    itemMenu: {
      type: Object,
      default: () => ({}),
    },
    menuList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {};
  },
};
</script>
