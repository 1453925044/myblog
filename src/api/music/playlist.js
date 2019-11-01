import { get, post } from '@/http/http.js'

// 音乐banner封面
const musicBanner = (info) => get('/banner', info)
// 歌单列表
const playList = (info) => get('/personalized', info)
// 歌单详情
const playDetail = (info) => get('/playlist/detail', info)
// 歌单能看到歌单名字 , 但看不到具体歌单内容 , 调用此接口 , 传入歌单 id, 可 以获取对应歌单内的所有的音乐，但是返回的trackIds是完整的，tracks 则是不完整的，可拿全部 trackIds 请求一次 song/detail 接口获取所有歌曲的详情
const playSongList = (info) => get('/song/detail', info)
// 获取音乐详情
const songDetail = (info) => get('/song/url', info)

export {
    playList,
    musicBanner,
    playDetail,
    playSongList,
    songDetail
}