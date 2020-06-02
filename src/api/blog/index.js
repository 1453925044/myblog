import { httpGet, httpPost } from '@/http/http.js'

//新增博客
const addblog = (info) => httpPost('/blog/newBlog', info)

// 获取博客
const getBlogList = (info) => httpGet('/blog/list', info)

// 获取博客详情
const getBlogDate = (info) => httpGet('/blog/detail', info)

// 更新博客
const updateBlog = (info) => httpPost('/blog/update', info);

// 删除博客
const delBlog = (info) => httpPost('/blog/del', info);

// 获取博客标签分类
const blogTags = (info) => httpGet('/blog/tags', info);


export {
    addblog,
    delBlog, 
    blogTags,
    getBlogDate,
    updateBlog,
    getBlogList,
}