<template>
<div class="module hideToShow">
    <ul class="list">
        <li class="cell" v-for="(item,index) in music_list" :key="index" @click="toJump(item.id)">
            <div class="banner-img">
                <p class="mask">
                    <i class="icon">&#xe63f;</i>
                    <span>{{item.playCount}}</span>
                </p>
                <el-image class="img" :lazy="true" :src="item.picUrl" fit="cover" :alt="item.name"></el-image>
            </div>
            <div class="bottom">
                <span>{{item.name}}</span>
            </div>
        </li>
    </ul>
</div>
</template>

<script>
export default {
    data() {
        return {
            music_list: []
        };
    },
    methods: {
        toJump(id) {
            this.$router.push({
                path: "/music/list",
                query: {
                    id: id
                }
            });
        },
        handleCount(data) {
            this.music_list = data;
            for (let i in this.music_list) {
                this.music_list[i].playCount = this.$unit.conversion(
                    this.music_list[i].playCount
                );
            }
            return this.music_list;
        }
    }
};
</script>

<style lang="less" scoped>
.module {
    width: 100%;

    .list {
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        .cell:hover .img {
            transform: scale(1.1);
            transition: all linear 0.2s;
        }

        .cell {
            margin: 10px 0;
            cursor: pointer;
            border-radius: 4px;
            width: 140px;
            height: 140px;

            .banner-img {

                width: 140px;
                height: 140px;
                overflow: hidden;
                border-radius: 4px;
                position: relative;

                .mask {

                    top: 0;
                    right: 0;
                    width: 100%;
                    height: 20px;
                    z-index: 999;
                    display: flex;
                    padding: 0 12px;
                    position: absolute;
                    align-items: center;
                    box-sizing: border-box;
                    justify-content: flex-end;
                    background: rgba(0, 0, 0, 0.2);

                    i,
                    span {
                        font-size: 12px;
                        color: #ffffff;
                        font-family: icon, pingfang;
                    }

                    .icon {
                        margin-right: 3px;
                    }
                }

                .img {
                    width: 100%;
                    height: 100%;
                    transition: all linear 0.2s;
                }
            }

            .bottom {
                width: 140px;

                span {
                    font-size: 13px;
                    font-family: pingfang;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                }
            }
        }
    }
}
</style>
