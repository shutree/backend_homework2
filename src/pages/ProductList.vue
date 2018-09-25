<template>
  <div class="product_list">
      <el-row :gutter="20">
        <el-col :span="2">关键字</el-col>
        <el-col :span="6"><el-input placeholder="请输入商品名称"></el-input></el-col>
        <el-col :span="2">商品分类</el-col>
        <el-col :span="6"><el-input placeholder="请选择分类"></el-input></el-col>
        <el-col :span="2"><el-button type="primary">查找</el-button></el-col>
      </el-row>

      <el-row class="btn_group">
        <el-button type="danger">删除</el-button>
        <el-button type="success">添加</el-button>
      </el-row>

      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        
        <el-table-column
          label="ID"
          width="120">
          <template slot-scope="scope">{{ scope.row.ID }}</template>
        </el-table-column>
        <el-table-column
          label="商品分类"
          width="120">
          <template slot-scope="scope">{{ scope.row.productCategory }}</template>
        </el-table-column>
        <el-table-column
          label="商品名称"
          width="250"
        >
          <template slot-scope="scope">{{ scope.row.productName }}</template>
        </el-table-column>
        <el-table-column
          label="价格"
          width="120">
          <template slot-scope="scope">{{ scope.row.price }}</template>
        </el-table-column>
        <el-table-column
          label="上传时间"
          width="120">
          <template slot-scope="scope">{{ scope.row.loadTime }}</template>
        </el-table-column>
        <el-table-column
          label="发布状态"
          width="120">
          <template slot-scope="scope">{{ scope.row.state }}</template>
        </el-table-column>
        <el-table-column
          label="操作"
          width="240">
          <template slot-scope="scope">
            <el-button-group>
              <el-button size="mini">编辑</el-button><el-button size="mini">删除</el-button>
            </el-button-group>
          </template>
        </el-table-column>

      </el-table>

      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="prev, pager, next, jumper, total, sizes"
          :total="400">
        </el-pagination>
      </div>

  </div>
</template>


<script>
export default {
  name: "product_list",

  data() {
    return {
      tableHeaderArr: [
        {
          name: "ID",
          type: "price"
        },
        {
          name: "商品分类",
          type: "price"
        },
        {
          name: "商品名称",
          type: "price"
        },
        {
          name: "价格",
          type: "price"
        },
        {
          name: "上传时间",
          type: "price"
        },
        {
          name: "发布状态",
          type: "price"
        },
        {
          name: "操作",
          type: "price"
        }
      ],
      tableData: [
        {
          ID: "001",
          productCategory: "美食",
          productName: "舌尖上的中国第一季",
          price: 79,
          loadTime: 20180925,
          state: "已发布"
        },
        {
          ID: "001",
          productCategory: "美食",
          productName: "舌尖上的中国第一季",
          price: 79,
          loadTime: 20180925,
          state: "已发布"
        },
        {
          ID: "001",
          productCategory: "美食",
          productName: "舌尖上的中国第一季",
          price: 79,
          loadTime: 20180925,
          state: "已发布"
        },
        {
          ID: "001",
          productCategory: "美食",
          productName: "舌尖上的中国第一季",
          price: 79,
          loadTime: 20180925,
          state: "已发布"
        },
        {
          ID: "001",
          productCategory: "美食",
          productName: "舌尖上的中国第一季",
          price: 79,
          loadTime: 20180925,
          state: "已发布"
        },
        {
          ID: "001",
          productCategory: "美食",
          productName: "舌尖上的中国第一季",
          price: 79,
          loadTime: 20180925,
          state: "已发布"
        }
      ],
      multipleSelection: [],
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4
    };
  },

  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.product_list {
  .btn_group {
    margin: 20px 0;
  }
}
</style>