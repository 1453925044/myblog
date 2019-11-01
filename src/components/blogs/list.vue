<template>
  <div class="blogs-container hideToShow">
    <div class="artic">
      <!-- 文章列表页 -->
      <!-- <articles></articles> -->
      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
        ></el-pagination> 
      </div>
    </div>
    <!-- 侧边菜单栏 -->
    <div class="menu-right">
      <menu-right></menu-right>
    </div>
  </div>
</template>
<script>
import menuRight from "@/components/common/menu-right";
import articles from "@/components/common/article";
export default {
  components: {
    articles,
    menuRight
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  },
  data() {
    return {
      currentPage4: 4
    };
  }
};
</script>
<style lang="less" scoped>
.blogs-container {
  display: flex;
  justify-content: space-between;
  width: 1200px;
  max-width: 1200px;
  margin: auto;
  padding-top: 70px;
  .artic {
    width: 74%;
  }
  .menu-right {
    width: 25%;
  }
  .block {
    display: flex;
  }
}
</style>
<style lang="less">
.el-pagination {
  padding: 24px 0;
  margin: auto;
}
::-webkit-scrollbar {
  height: 0px !important;
}
::-webkit-scrollbar-track {
  background: #ffffff;
  border-radius: 0px;
}
</style>