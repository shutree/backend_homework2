<template>
  <div class="Aside">
      <div :key="index" v-for="(tab, index) in tabs">
        <div class="tab_wrapper">
          <div class="title">{{tab.title}}</div> 
          <div :key="index" v-for="(item, index) in tab.arrs" class="item">
            <router-link :to="item.path">{{item.name}}</router-link>
          </div>
        </div>
      </div>
  </div>
</template>


<script>
export default {
  name: "Aside",
  data() {
    return {
      tabs: [
        {
          title: "商品管理",
          arrs: [
            {
              name: "商品分类",
              path: "/productcategory"
            },
            {
              name: "商品列表",
              path: "/productlist"
            }
          ]
        },
        {
          title: "用户管理",
          arrs: [
            {
              name: "修改密码",
              path: "/productcategory"
            },
            {
              name: "资料修改",
              path: "/productlist"
            }
          ]
        },
        {
          title: "交易管理",
          arrs: [
            {
              name: "订单列表（可选）",
              path: "/productcategory"
            }
          ]
        }
      ]
    };
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.Aside {
  height: 100%;
  .tab_wrapper {
    text-align: center;
    .title {
      font-size: 16px;
      background: rgb(230, 230, 230);
      padding: 10px;
      border-bottom: 1px solid gray;
    }
    .item {
      padding: 5px;
      border-bottom: 1px solid gray;
      font-size: 12px;
    }
  }
}
</style>
