<template>
<div class="box">
    <!-- 面包屑导航 -->
    <div class="breadcrumb" v-if="$route.name =='myBlogs'">
        <p class="dicator">博客日记</p>
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">博客日记</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/' }">程序人生</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/' }">设计心得</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/' }">人生规划</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
    <article>
        <ul class="list">
            <li class="cell hideToShow" v-for="(item,index) in article" :key="index">
                <div class="head-box">
                    <div class="cell-left">
                        <img class="cover" :src="item.cover || '/static/images/b3.jpeg'" alt="文章封面" />
                    </div>
                    <div class="content">
                        <h2 @click="jump(item.id)">{{item.title || '暂无数据'}}</h2>
                        <p class="tags">
                            <i v-for="(tag,value) in item.tags" :key="value">{{tag}}</i>
                        </p>
                        <div class="text" v-html="item.content"></div>
                    </div>
                </div>
                <div class="foot-box">
                    <div class="foot-left">
                        <ul class="foot-list">
                            <li class="foot-cell">
                                <i class="fa fa-calendar"></i>
                                <span>{{item.createTime}}</span>
                            </li>
                            <li class="foot-cell">
                                <i class="fa fa-commenting-o"></i>
                                <span>{{item.review || 0}}条评论</span>
                            </li>
                            <li class="foot-cell">
                                <i class="fa fa-eye"></i>
                                <span>{{item.views || 0}}次浏览</span>
                            </li>
                            <li class="foot-cell">
                                <i class="fa fa-thumbs-o-up"></i>
                                <span>{{item.praise || 0}}人点赞</span>
                            </li>
                            <li class="foot-cell">
                                <i class="fa fa-user"></i>
                                <span>{{item.author}}</span>
                            </li>
                        </ul>
                    </div>
                    <div class="foot-right">
                        <span>阅读全文</span>
                        <i class="fa fa-chevron-circle-right"></i>
                    </div>
                </div>
            </li>
        </ul>
    </article>
</div>
</template>

<script>
import {
    getBlogList
} from "@/api/blog/index.js";
export default {
    data() {
        return {
            article: [],
            pageFiles: []
        };
    },
    mounted() {
        this.getList();
    },
    methods: {
        getList() {
            getBlogList({
                author: "魏超",
                keyword: ""
            }).then(res => {
                if (res.success && res.data) {
                    let data = res.data;
                    // 列表去富文本格式
                    data.forEach(item => {
                        item.content = item.content.replace(/(\n)/g, "");
                        item.content = item.content.replace(/(\t)/g, "");
                        item.content = item.content.replace(/(\r)/g, "");
                        item.content = item.content.replace(/<\/?[^>]*>/g, "");
                        if (item.tags) {
                            item.tags = item.tags.split(",");
                        }
                    });

                    this.article = data;
                    console.log(this.article)
                    return;
                }
            });
        },
        jump(id) {
            this.$router.push({
                path: "/blogs/detail",
                query: {
                    id: id
                }
            });
        }
    }
};
</script>

<style lang="less" scoped>
.box {
    width: 100%;
    padding: 0 16px;
    border-radius: 3px;
    box-sizing: border-box;
    background-color: #ffffff;

    article {
        width: 100%;
        margin-top: 24px;

        .list {
            width: 100%;
            display: block;

            .cell {
                width: 100%;
                cursor: pointer;
                margin-bottom: 24px;

                .head-box {
                    width: 100%;
                    display: flex;
                    padding: 10px 0;
                    align-items: center;
                    justify-content: space-between;

                    .cell-left {
                        width: 180px;
                        height: 120px;
                        overflow: hidden;
                        margin-right: 22px;

                        img {
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                            transition: all linear 0.4s;
                        }

                        img:hover {
                            transform: scale(1.1);
                            transition: all linear 0.4s;
                        }
                    }

                    .content {
                        flex: 1;
                        height: 125px;
                        display: flex;
                        overflow: hidden;
                        flex-direction: column;
                        justify-content: space-around;

                        h2 {
                            width: 100%;
                            overflow: hidden;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                        }

                        .tags {
                            width: 100%;
                            display: flex;
                            overflow: hidden;

                            i {
                                color: #333;
                                font-size: 13px;
                                margin-right: 6px;
                                padding: 4px 8px;
                                background: #f2f2f2;
                                border-radius: 4px;
                                box-sizing: border-box;
                            }
                        }

                        .text {
                            width: 100%;
                            color: #666666;
                            font-size: 15px;
                            overflow: hidden;
                            display: -webkit-box;
                            -webkit-line-clamp: 2;
                            -webkit-box-orient: vertical;
                        }
                    }
                }

                .foot-box {
                    width: 100%;
                    display: flex;
                    padding: 12px 16px;
                    box-sizing: border-box;
                    border-top: 1px dashed #d3d3d3;
                    border-bottom: 1px dashed #d3d3d3;
                    justify-content: space-between;

                    .foot-left {
                        width: 50%;

                        .foot-list {
                            width: 100%;
                            display: flex;
                            justify-content: space-between;

                            .foot-cell {
                                font-size: 12px;
                            }
                        }
                    }

                    .foot-right {
                        font-size: 12px;
                    }
                }
            }
        }
    }
}

.content h2:hover,
.foot-cell:hover,
.foot-right:hover {
    cursor: pointer;
    color: #337ab7;
}
</style><style lang="less">
.breadcrumb {
    width: 100%;
    display: flex;
    align-items: center;
    background-color: #ffffff;
    justify-content: space-between;
    border-bottom: 1px solid #d8d8d8;

    .dicator {
        color: #409eff;
        font-size: 15px;
        padding: 12px 0;
        font-weight: 700;
        border-bottom: 3px solid #409eff;
    }

    .el-breadcrumb {
        display: flex;
        padding: 12px 0;
        justify-content: flex-end;

        .el-breadcrumb__inner,
        .is-link {
            font-size: 15px;
        }
    }
}
</style>
