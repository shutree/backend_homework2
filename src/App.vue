<template>
  <div id="app">
    <el-container style="height: 100%; border: 1px solid #eee">
      <el-aside width="200px" style="border: 1px solid gray;">
        <app-aside></app-aside>
      </el-aside>
      
      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <span>王小虎</span>
        </el-header>
        
        <el-main>
          <router-view></router-view>
        </el-main>

      </el-container>
    </el-container>
  </div>
</template>

<script>
import Aside from './components/Aside.vue';
import ProductCategory from './pages/ProductCategory.vue'

export default {
  components: {
    appAside: Aside
  },
  data() {
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄"
    };
    return {
      tableData: Array(10).fill(item)
    };
  }
};
</script>

<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>
