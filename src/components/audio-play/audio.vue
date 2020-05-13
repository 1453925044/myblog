<template>
<div id="aplayer"></div>
</template>

<script>
import APlayer from 'APlayer';
import 'APlayer/dist/APlayer.min.css';
import {
    songLrc,
    playDetail,
    songDetail,
    playSongList,
} from "@/api/music/playlist.js";
export default {
    data() {
        return {
            songId: "",
            musicUrl: "",
            auths: [],
            musicList: [],
            songDetail: {},
        }
    },
    mounted() {
        this.songId = this.$route.query.id;
        this.getDetail();
    },
    methods: {
        // 加载音乐播放器
        audioInit() {
            const ap = new APlayer({
                container: document.getElementById('aplayer'),
                loop: 'all',
                theme: '#FADFA3',
                order: 'random',
                preload: 'auto',
                volume: 0.7,
                mutex: true,
                listFolded: false,
                listMaxHeight: 90,
                lrcType: 3,
                // audio: {
                //     name: 'Our Happy Ending',
                //     artist: 'IU (아이유)',
                //     url: 'http://localhost:8080/api/IU (아이유) - Our Happy Ending.mp3',
                //     cover: 'http://localhost:8080/api/QRW)W2$]VAV7)VJ4K}UUFOT.jpg',
                //     lrc: 'http://localhost:8080/api/IU (아이유) - Our Happy Ending.lrc',
                // }
                audio: this.musicList
            });
        },
        // 获取歌单详情
        getDetail(item) {
            playDetail({
                    id: 3208627807
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
                    ids: ids,
                })
                .then(res => {
                    if (res.data && res.status == 200) {
                        let newArr = [];
                        let songs = res.data.songs;
                        for (let i in songs) {
                            newArr.push(songs[i].id);
                            this.auths.push({
                                id: songs[i].id,
                                name: songs[i].name,
                                cover: songs[i].al.picUrl,
                                artist: songs[i].ar[0].name,
                                // lrc: this.getLrc(songs[i].id)
                            })
                        }
                        // lrc: this.getLrc(songs[i].id)
                        // console.log(this.auths)
                        newArr = newArr.toString();
                        return this.getSongs(newArr);
                    }
                })
        },
        // 获取歌词
        getLrc() {
            var lrc;
            songLrc({
                id: 1395765555,
            }).then(res => {
                let data = res.data;
                lrc = data.lrc.lyric
                console.log(lrc)
            })
            return lrc;
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
        },
        handleData(data) {
            for (let i in data) {
                this.musicList.push({
                    url: data[i].url,
                    name: this.auths[i].name,
                    artist: this.auths[i].artist,
                    cover: this.auths[i].cover ? this.auths[i].cover : 'http://localhost:8080/api/QRW)W2$]VAV7)VJ4K}UUFOT.jpg'
                })
            }
            return this.audioInit();
        },
    }
}
</script>

<style lang="less">

</style>
