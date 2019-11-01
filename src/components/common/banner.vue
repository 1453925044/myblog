<template>
  <div class="banner">
    <div class="box">
      <h2>Mr.Wei</h2>
      <p>不轻诺，故我不负人。不信诺，故人不负我</p>
    </div>
    <!-- 雪花组件 -->
    <canvas id="Snow"></canvas>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
.banner {
  position: relative;
  width: 100%;
  height: 320px;
  background-image: url(https://s2.ax1x.com/2019/01/29/kQQfBR.jpg);
  background-position: top;
  background-size: cover;
  overflow: hidden;
  .box {
    width: 100%;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    h2 {
      color: #fff;
      text-transform: none;
      font-size: 40px;
      margin-bottom: 10px;
    }
    p {
      color: #fff;
      margin-bottom: 30px;
      font-size: 25px;
      letter-spacing: 1px;
    }
  }
  #Snow {
    width: 100%;
    pointer-events: none;
  }
}
</style>