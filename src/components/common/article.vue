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
                        <img class="cover" src="/static/images/b3.jpeg" alt="文章封面" />
                    </div>
                    <div class="content">
                        <h2 @click="jump(index)">使用win10自带的虚拟机搭建胸痛</h2>
                        <p class="tags">
                            <i v-for="(tag,value) in item.tag" :key="value">{{tag}}</i>
                        </p>
                        <div class="text">asdasdasdasdasd</div>
                    </div>
                </div>
                <div class="foot-box">
                    <div class="foot-left">
                        <ul class="foot-list">
                            <li class="foot-cell">
                                <i class="fa fa-calendar"></i>
                                <span>2019年2月13日</span>
                            </li>
                            <li class="foot-cell">
                                <i class="fa fa-commenting-o"></i>
                                <span>4条评论</span>
                            </li>
                            <li class="foot-cell">
                                <i class="fa fa-eye"></i>
                                <span>143次浏览</span>
                            </li>
                            <li class="foot-cell">
                                <i class="fa fa-thumbs-o-up"></i>
                                <span>2人点赞</span>
                            </li>
                            <li class="foot-cell">
                                <i class="fa fa-user"></i>
                                <span>w_o</span>
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
export default {
    data() {
        return {
            pageFiles: [],
            article: [{
                    tag: ["1", "2", "3", "4"]
                },
                {
                    tag: ["1", "2", "3", "4"]
                },
                {
                    tag: ["1", "2", "3", "4"]
                },
                {
                    tag: ["1", "2", "3", "4"]
                }
            ]
        };
    },
    methods: {
        jump() {
            this.$router.push({
                path: "/blogs/detail",
                qurey: {}
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
                            transition: all linear .4s;
                        }

                        img:hover {
                            transform: scale(1.1);
                            transition: all linear .4s;
                        }
                    }

                    .content {
                        flex: 1;
                        height: 125px;
                        display: flex;
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

                            i {
                                width: 40px;
                            }
                        }

                        .text {
                            width: 100%;
                            color: #666666;
                            overflow: hidden;
                            display: -webkit-box;
                            -webkit-line-clamp: 3;
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
