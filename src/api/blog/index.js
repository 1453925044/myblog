import { httpGet, httpPost } from '@/http/http.js'

//新增博客
const addblog = (info) => httpPost('/blog/new', info)

// 获取博客
const getList = (info) => httpGet('/blog/list', info)

// 更新博客
const updateBlog = (info) => httpPost('/blog/update', info);

// 获取博客标签分类
const blogTags = (info) => httpGet('/tags', info);


export {
    addblog,
    getList,
    blogTags,
    updateBlog
}