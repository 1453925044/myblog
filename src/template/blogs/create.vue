<template>
<div class="create-blogs">
    <div class="main">
        <h1>文章发布</h1>
        <el-button type="primary" @click="submit">发布</el-button>
    </div>
    <div class="head">
        <div class="head-cell">
            <span>标题</span>
            <el-input v-model="title" placeholder="请输入文章标题"></el-input>
        </div>
        <div class="head-cell">
            <span>描述</span>
            <el-input v-model="descript" placeholder="请输入文章描述"></el-input>
        </div>
        <div class="head-cell">
            <span>分类</span>
            <el-input v-model="classify" placeholder="多个分类请用“,”分隔开来"></el-input>
        </div>
        <div class="head-cell">
            <span>标签</span>
            <el-select @change="selectChange" v-model="tag" multiple collapse-tags style="width:100%" placeholder="请选择分类标签">
                <el-option v-for="item in tags" :key="item.id" :label="item.name" :value="item.name"></el-option>
            </el-select>
        </div>
    </div>
    <div class="upload">
        <span>文章封面</span>
        <el-upload class="upload-demo" drag action="/api/upload" list-type="picture" multiple :on-success="upload">
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">
                将文件拖到此处，或
                <em>点击上传</em>
            </div>
        </el-upload>
    </div>
    <!-- <img :src="src"> -->
    <div class="edit">
        <span>内容编辑</span>
        <editor @updata="updata"></editor>
    </div>
</div>
</template>

<script>
import {
    addblog,
    getBlogList,
    blogTags,
    updateBlog
} from "@/api/blog/index.js";
import editor from "@/components/editor/editor";
import module from "@/components/common/module";
export default {
    components: {
        editor,
        module
    },
    data() {
        return {
            src: "",
            tag: "",
            title: "",
            articles: "",
            descript: "",
            classify: "",
            tags: []
        };
    },
    mounted() {
        this.getTags();
    },
    methods: {
        upload(e) {
            console.log(e);
            this.src = e.url;
        },
        // 获取标签分类
        getTags() {
            blogTags({}).then(res => {
                if (res.success && res.data) {
                    this.tags = res.data;
                    return;
                }
            });
        },
        // 博客内容更新
        updata(e) {
            e = e.replace(/'/g, '"');
            this.articles = e;
            console.log(e);
        },
        // 下拉选择框
        selectChange(e) {
            console.log(e);
        },
        // 文章发布
        submit() {
            this.tag = this.tag.toString();
            addblog({
                state: 1,
                author: "魏超",
                tags: this.tag,
                updateTime: '',
                title: this.title,
                createTime: this.$unit.getNowFormatDate(),
                content: this.articles,
                classify: this.classify,
                descript: this.descript,
                cover: this.src
            }).then(res => {
                if (res.success) {
                    console.log(res);
                }
            });
        }
    }
};
</script>

<style lang="less" scoped>
.create-blogs {
    margin: 20px auto;
    overflow: hidden;
    max-width: 1200px;

    .main {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    img {
        width: 100px;
        height: 100px;
    }

    .head {
        width: 100%;
        margin-top: 24px;

        .head-cell {
            display: flex;
            margin-bottom: 12px;
            flex-direction: column;
            align-items: flex-start;
            justify-content: space-between;

            span {
                font-size: 18px;
                font-weight: bold;
                margin-bottom: 6px;
            }
        }
    }

    .edit {
        overflow: hidden;

        span {
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 6px;
        }
    }

    .upload {
        width: 100%;

        span {
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 6px;
            display: inline-block;
        }

        .upload-demo {
            width: 100%;

            /deep/.el-upload {
                width: 100%;
                height: 260px;

                .el-upload-dragger {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;

                    .el-icon-upload {
                        margin: 0;
                    }
                }
            }
        }
    }
}
</style><style>
::-webkit-scrollbar {
    height: 0px !important;
}

::-webkit-scrollbar-track {
    background: #ffffff;
    border-radius: 0px;
}
</style>
