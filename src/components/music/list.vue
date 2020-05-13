<template>
<div class="music-list hideToShow">
    <!-- 歌单封面 -->
    <div class="banner">
        <div class="banner-img">
            <img :src="songDetail.coverImgUrl" alt-="歌单封面" />
        </div>
        <div class="banner-detail">
            <p class="title">{{songDetail.name}}</p>
            <p class="tags">
                标签:&nbsp;&nbsp;
                <span v-for="(tag,key) in songDetail.tags" :key="key">{{tag}}</span>
            </p>
            <p class="detail">简介:&nbsp;&nbsp;{{songDetail.description}}</p>
        </div>
    </div>
    <!-- 歌单列表 -->
    <div class="list-box">
        <el-table :data="musicList" :stripe="true" :border="true" empty-text="s" style="width: 100%">
            <el-table-column prop="name" label="歌曲标题" width="320"></el-table-column>
            <el-table-column prop="cp" label="时长" width="180"></el-table-column>
            <el-table-column prop="ar[0].name" label="歌手" width="180"></el-table-column>
            <el-table-column prop="al.name" label="专辑"></el-table-column>
            <el-table-column class="aaaa" prop="name" label="#" width="80">
                <span @click="playMusic()">
                    <i class="icon">&#xe600;</i>
                </span>
            </el-table-column>
        </el-table>
    </div>
    <palyer></palyer>
    <audio :src="musicUrl" :autoplay="false"></audio>
</div>
</template>

<script>
import {
    playDetail,
    playSongList,
    songDetail
} from "@/api/music/playlist.js";
import palyer from "./common/player";
import {
    data
} from "autoprefixer";
export default {
    components: {
        palyer
    },
    data() {
        return {
            songId: "",
            songDetail: {},
            musicList: [],
            auths: [],
            musicUrl: ""
        };
    },
    mounted() {
        this.songId = this.$route.query.id;
        this.getDetail();
    },
    methods: {
        // 获取歌单详情
        getDetail(item) {
            playDetail({
                    id: this.songId
                })
                .then(res => {
                    if (res.data && res.status == 200) {
                        let newArr = [];
                        let playList = res.data.playlist;
                        this.songDetail = playList;
                        let trackIds = playList.trackIds;
                        for (let i in trackIds) {
                            newArr.push(trackIds[i].id);
                        }
                        newArr = newArr.toString();
                        return this.getSongList(newArr);
                    }
                })
        },
        // 获取歌单详情歌曲列表
        getSongList(ids) {
            playSongList({
                    ids: ids
                })
                .then(res => {
                    if (res.data) {
                        let songs = res.data.songs;
                        let newArr = [];
                        this.$set(this, "musicList", songs);
                        for (let i in songs) {
                            newArr.push(songs[i].id);
                            this.auths = songs[i].ar;
                        }
                        console.log(this.auths)
                        newArr = newArr.toString();
                        return this.getSongs(newArr);
                    }
                })
                .catch(err => {
                    console.log(err);
                });
        },
        // 获取歌曲详情
        getSongs(ids) {
            songDetail({
                    id: ids
                })
                .then(res => {
                    if (res.data && res.status == 200) {
                        let data = res.data.data;
                        this.handleData(data);
                    }
                })
                .catch(err => {
                    console.log(err);
                });
        },
        handleData(data) {
            for (let i in data) {
                this.musicList[i].url = data[i].url;
            }
        },
        // 歌曲播放
        playMusic(e) {
            console.log(e);
        }
    }
};
</script>

<style lang="less" scoped>
.music-list {
    max-width: 1200px;
    margin: auto;
    padding: 70px 24px;
    box-sizing: border-box;
    background: #ffffff;

    .banner {
        width: 100%;
        display: flex;
        justify-content: flex-start;

        &-img {
            width: 180px;
            height: 180px;

            img {
                width: 100%;
                height: 100%;
            }
        }

        &-detail {
            width: 78%;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            margin-left: 30px;

            .title {
                font-size: 18px;
                font-family: pingfang;
                color: #333333;
            }

            .tags,
            .detail {
                display: flex;
                align-items: center;
                font-size: 14px;

                span {
                    font-family: pingfang;
                    color: #777;
                    background: #f3f3f3;
                    border-radius: 50px;
                    margin-right: 6px;
                    padding: 1px 9px;
                    border: 1px solid #d9d9d9;
                }
            }
        }
    }

    .list-box {
        width: 100%;
        border: 1px solid #d9d9d9;
        border-collapse: collapse;
        margin-top: 24px;
        border-top: 3px solid #c20c0c;
    }
}

.icon {
    color: #da1e1e;
}
</style><style lang="less">
.el-table_1_column_5 {
    .cell {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        font-size: 18px;
    }
}
</style>
