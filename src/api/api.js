import axios from 'axios'
import qs from 'qs'

const BASEURL = 'http://nc.niowoo.cn/'

const instance = axios.create({
  baseURL: BASEURL,
  timeout: 5000,
  headers: {
  	'X-Requested-With': 'XMLHttpRequest',
  	'Content-Type': 'application/x-www-form-urlencoded',
  }
});

// 请求拦截器 发送请求之前做一些处理
instance.interceptors.request.use(function(config) {
  if(sessionStorage.openid){
  	// 初始化openid
  	if(config.url.indexOf('user_id') > 0){
  		config.url = config.url
  	}else if(config.url.indexOf('?') > 0) {
	    config.url += '&openid=' + sessionStorage.openid
	  } else {
	    config.url += '?openid=' + sessionStorage.openid
	  }
	  // 数据的处理
    if(config.method === 'post' || config.method === 'put'){
  		config.data = qs.stringify(config.data)
    }
  }
  return config
}, function(error) {
  // 当请求异常时做一些处理
  return Promise.reject(error)
})

export const baseURL = BASEURL
