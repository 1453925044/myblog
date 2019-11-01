<template>
  <section class="aboutMe">
    <article class="article">
      <div class="whitebg about">
        <div class="ab_box">
          <i class="avatar_pic">
            <a href="https://weichaooqx.com/?page_id=56" target="_blank">
              <img src="https://s2.ax1x.com/2019/01/29/kQlivQ.jpg" />
            </a>
          </i>
          <div class="ab-right">
            <h3>魏超</h3>
            <p>一个90后草根站长！Web前端开发工程师、网页设计师。</p>
            <p>17年入行,现目前在成都传晟信息技术有限公司,从事app、pc端网站开发.</p>
          </div>
        </div>
        <h2 class="gd_title">个人独白</h2>
        <p class="ab_dubai">
          我叫魏超,一个性格开朗,幽默的90后草根站长！17年入行，一边潜心研究前端开发技术，一边工作积累经验，平常有时间就写写博客，分享一些自我的技术心得，以及生活。我是个性格开朗、谈吐风趣的人。我喜欢很静很静的生活，虽然工作给我带来不少新的冲击，但我从不妥协。可能就是缘至这份坚持吧，所以到此刻我还是对工作充满热情。在工作上我对自我的潜力是从不怀疑，在生活上可能我是一个开发工程师、设计师的原故，所以对生活充满了期盼，对任何事也尽求完美。有人说，程序员的世界是枯燥的，乏味的。但在我看来，人活着就是为了生存，而生存易生活难。踏足这个行业之前，我从来没想过，有朝一日，自己会希望向着自己所竭力避免的那条路走下去。程序员最初给我的印象是在明亮的环境中喝着咖啡相互放肆地玩着计算机的怪物，或者是半夜缩在电脑前一脸热切地盯着屏幕敲着键盘的怪物，这一切都使我感觉生动而有趣，这是这个行业的魅力所在，面对缓慢进步的世界，在另一个领域，我们能够创造一个快速的自由的世界出来，这是把小时候玩积木的热情发挥到极致的一种体现。
          <br />
          <br />记得某个人说过一句话“不要在应该奋斗的年华里，选择安逸”。确实，时光匆匆，在该拼搏奋斗的年华里选择了安逸，多年后回首，可能会对曾今的自己唏嘘不已。所以，对我来说，人生价值的实现，就是把握住青春的年华，在该拼搏的年纪，奋勇直前。
        </p>
      </div>
    </article>
  </section>
</template>
<script>
export default {
  name: "about",
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
.aboutMe {
  max-width: 1200px;
  margin: auto;
  padding: 80px 0 0 0;
}
.article {
  margin: 24px 0;
}
.whitebg {
  background: url("https://www.yangqq.com/skin/jxhx/images/abbg.png") no-repeat
    right top #fff;
  padding: 20px 40px;
  border-radius: 3px;
  margin-bottom: 20px;
  overflow: hidden;
}
.ab_box {
  overflow: hidden;
  margin: 20px 0;
}
.avatar_pic {
  position: relative;
  display: block;
  float: left;
  margin-right: 10px;
  background: -o-linear-gradient(
    bottom left,
    rgba(0, 153, 255, 0.9),
    rgba(42, 228, 197, 0.7)
  );
  background: linear-gradient(
    to top right,
    rgba(0, 153, 255, 0.9),
    rgba(42, 228, 197, 0.7)
  );
  padding: 2px;
  width: 100px;
  border-radius: 50%;
}
.avatar_pic:before {
  position: absolute;
  content: "";
  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAtJJREFUWMPNWEFr1EAUDvgH9H8k7ipeRE+K4kGQIiJCF7148qYnjyIoHsTeBAWh9ShsWl26pdYNVlaQgnWtqAtStEWLVIvsVmsmyYzzZutkayaZl3QjCQyE5M2bb+Z98743YxgpH1azdrm2OUyq5iixTce1rTZ/70IT7/wb/AMbsDXyevxxc4gP1CC25blVk2Ea2EIf6DswIN5E+QCfdRMLIh6c2QRfmYEwdmoHdzKyXSAKYCPgOx0Yu7yTVK3pQYORoLhvGAMNhhPybV5gZONjaEGJMOW4MsqVSgpfHpzBcCp2N/1vMH+bcvcpt/bkIRb8aEeaWzuYki8lFqzMyv7EORNJCZGkF+eMbqyyfx/y/EK6FVi4KfsGn2eUNluSJ2TTOGf+8mQEkP/+Lh7Q1DFG/Q3Rj5KuWHU1wc2G1KYkOfBeXokAClbn0ICCr03Zz5u/migzQvuIXaokOp0+HgEEM3btsj5Uc5fDSXybR+y4UgXIPKYzVPKocTp5AE58+nutN4GAMPL4BCYFjBmihNAYqnjkta4n9/n0MOTcu9vYnOQYUMNol17BI3+5Hu/42fkwvJ1F5o7vQaYHq22IwkpnqOLRrxW17cQ+RteXejaUMvL0bAopMbsQsg7GWMUjt344Gqr2vXAVFx+klZEOKmSxPHpxaavDJyc5gb3e6vAJuI/2p8zoEDIEqWN59OF+n81uFqwt9IG9mEVoHUMU5JgOCh4BAAm4dSP8/sXJWI6Yo/rEmMAjCA+Q2K0fYdT7uSkP60puIYu2Ya106HhEZs8JJZehenUtY120KR06cdXq2vfXfe8tbmdlDVcDVX7oeBSGj8vDzFDmIi1ydsOevVT5qFeS3NnWmS1zCaviEe1+5PKwd7AlLLbIV/EIiD3wIh99DJo6yvylmmzem1v5HYMKd1As5FG6kJcNhbyOKeyFlepKDwQZCvLYKz3xr1TJcqX3B9KdR6Yd1V4RAAAAAElFTkSuQmCC")
    no-repeat;
  bottom: 0px;
  right: 10px;
  height: 24px;
  width: 24px;
  background-size: 24px;
}
.avatar_pic img {
  width: 95px;
  height: 95px;
  border-radius: 50%;
}
.ab_box h3 {
  margin: 10px 0 10px;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 1px;
}
.ab_box p {
  color: #666;
  margin-bottom: 5px;
}
.ab-right {
  float: left;
}
.gd_title {
  margin: 20px 0;
  font-size: 18px;
  background: url("https://www.yangqq.com/skin/jxhx/images/hline.png") no-repeat
    bottom right;
  width: 120px;
  clear: both;
  background-size: 40px;
  border-bottom: #000 1px dashed;
  padding-left: 10px;
  padding-bottom: 5px;
  display: inline-block;
}
.ab_dubai {
  margin-bottom: 15px;
  display: inline-block;
}
</style>