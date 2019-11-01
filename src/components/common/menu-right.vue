<template>
  <div class="box">
    <module :title="'点击排行'">
      <ul class="moudle-list">
        <li class="cell" v-for="(item,index) in rankList" :key="index">
          <p>
            <i class="icon" v-html="index <3 ? '&#xe6e7;':index"></i>
            <span>{{item.text}}</span>
          </p>
        </li>
      </ul>
    </module>
    <module :title="'最新文章'">
      <ul class="moudle-list">
        <li class="cell" v-for="(item,index) in rankList" :key="index">
          <p>
            <i class="icon" v-html="index <3 ? '&#xe6e7;':index"></i>
            <span>{{item.text}}</span>
          </p>
        </li>
      </ul>
    </module>
    <module :title="'标签云'">
      <div class="btn-tag">
        <span class="btn" v-for="(item,index) in tags" :key="index">{{item}}</span>
      </div>
    </module>
  </div>
</template>
<script>
import module from "@/components/common/module";
import $ from "jquery";
export default {
  components: {
    module
  },
  data() {
    return {
      rankList: [
        {
          text: "网站文章排行"
        },
        {
          text: "网站文章排行"
        },
        {
          text: "网站文章排行"
        },
        {
          text: "网站文章排行"
        },
        {
          text: "网站文章排行"
        }
      ],
      tags: [
        "unbuntu",
        "Vue",
        "nodeJS",
        "Windows",
        "C++",
        "Android",
        "前端开发",
        "微信小程序"
      ]
    };
  },
  mounted() {
    // 自定义彩色标签
    $(function() {
      // 自定义彩色标签
      let tag = $(".btn");
      function selectFrom() {
        return Math.floor(Math.random() * 16777215).toString(16);
      }
      for (var i = 0; i < tag.length; i++) {
        var color = selectFrom();
        $(tag[i]).css({
          color: "#" + color,
          background: "#fafafa",
          "font-family": "pingfang"
        });
        $(tag[i])
          .mouseenter(function() {
            var target = $(this).css("color");
            $(this).css({
              background: target,
              color: "#ffffff"
            });
          })
          .mouseleave(function() {
            var target = $(this).css("background-color");
            $(this).css({
              background: "#fafafa",
              color: target
            });
          });
      }
    });
  }
};
</script>
<style lang="less" scoped>
.box {
  width: 100%;
}
</style>