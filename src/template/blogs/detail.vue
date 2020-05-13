import less from 'less';
<template>
  <div class="blogs-detail">
    <banner
      :bHeight="300"
      :bgImg="'https://res.talklee.com/koilee/images/2.jpg'"
      :title="'文章详情'"
      :ctx="'Mr.Wei文章详情'"
    ></banner>
  </div>
</template>
<script>
import banner from "@/components/common/banner";
export default {
  components: {
    banner
  },
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
.blogs-detail {
  width: 100%;
}
</style>