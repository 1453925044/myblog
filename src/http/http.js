import Qs from 'qs'
import axios from 'axios'
import { Loading } from 'element-ui';

// 请求超时时间
axios.defaults.timeout = 60000;
//接口基路径
axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? '/api' : 'http://www.weichaooqx.com:3000';
// 允许所有跨域来源
axios.defaults.headers.common['Access-Control-Allow-Origin'] = "*";
axios.defaults.headers['Content-Type'] = 'application/json;charset=UTF-8'
//参数格式化
axios.defaults.transformRequest = [function (data, config) {
    if (!config['Content-Type']) return Qs.stringify(data);
    switch (config['Content-Type'].toLowerCase()) {
        case 'application/json;charset=utf-8':
            {
                return JSON.stringify(data)
            }
        // 上传类型请求,返回原生对象
        case 'multipart/form-data;charset=utf-8':
            {
                return data
            }
        default:
            {
                return Qs.stringify(data);
            }
    };
}];
// 设置请求加载loading
let loading;
// 声明一个对象用于存储请求个数
let needLoadingRequestCount = 0;
// loading开始动画
function startLoading() {
    loading = Loading.service({
        lock: true,
        text: '努力加载中...',
        background: 'rgba(0, 0, 0, 0.7)'
    })
}
// loading结束动画
function closeLoading() {
    loading.close();
}
export function showFullScreenLoading() {
    if (needLoadingRequestCount === 0) {
        startLoading()
    }
    needLoadingRequestCount++
}

export function tryHideFullScreenLoading() {
    if (needLoadingRequestCount <= 0) return
    needLoadingRequestCount--
    if (needLoadingRequestCount === 0) {
        closeLoading()
    }
}
// 请求拦截器
axios.interceptors.request.use(
    config => {
        showFullScreenLoading();
        return config;
    },
    error => {
        return Promise.error(error);
    });

// 响应拦截器
axios.interceptors.response.use(
    response => {
        if (response.status === 200) {
            tryHideFullScreenLoading()
            return Promise.resolve(response);
        } else {
            tryHideFullScreenLoading()
            return Promise.reject(response);
        }
    },
    // 服务器状态码不是200的情况 
    error => {
        tryHideFullScreenLoading()
        console.log(error)
        if (error.response.status) {
            switch (error.response.status) {
                // 401: 未登录    
                // 未登录则跳转登录页面，并携带当前页面的路径    
                // 在登录成功后返回当前页面，这一步需要在登录页操作。    
                case 401:
                    console.log(error.response.status)
                    break;
                // 403 token过期    
                // 登录过期对用户进行提示    
                // 清除本地token和清空vuex中token对象    
                // 跳转登录页面    
                case 403:
                    console.log(error.response.status)
                    // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
                    // MessageBox.alert('登录过期，请重新登录', "提示", {
                    //     confirmButtonText: "确定",
                    //     showClose: false,
                    //     callback: () => {
                    //     }
                    // });
                    break;
                case 404:
                    console.log(error.response.status)
                    // MessageBox.alert('接口请求不存在', "提示", {
                    //     confirmButtonText: "确定"
                    // });
                    break;
                case 500:
                    console.log(error.response.status)
                    // MessageBox.alert('api内部错误', "提示", {
                    //     confirmButtonText: "确定"
                    // });
                    break;
                case 504:
                    console.log(error.response.status)
                    // MessageBox.alert('网关超时,请检查环境再试', "提示", {
                    //     confirmButtonText: "确定"
                    // });
                    break;
                // 其他错误，直接抛出错误提示    
                default:
                    console.log(error.response.status)
                // MessageBox.alert(error.response.data.Message, "提示", {
                //     confirmButtonText: "确定"
                // });
            }
        }
        return Promise.reject(error);
    }
);
/** 
 * get方法，对应get请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
const httpGet = (url, params) => {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        })
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err)
            })
    });
}
/** 
 * post方法，对应post请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
const httpPost = (url, params) => {
    let config = {
        headers: {
            "Content-Type": "application/json;charset=UTF-8"
        }
    };
    return new Promise((resolve, reject) => {
        axios.post(url, params, config)
            .then(res => {
                resolve(res);
            })
            .catch(err => {
                reject(err)
            })
    });
}

/**
 * 文件上传
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
const upLoadFile = (url, params) => {
    let config = {
        headers: {
            "Content-Type": "multipart/form-data;charset=UTF-8"
        }
    };
    return new Promise((resolve, reject) => {
        axios.post(url, params, config)
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err)
            })
    });
}
export {
    httpGet,
    httpPost,
    upLoadFile
}