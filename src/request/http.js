import axios from 'axios'
import common from '../common/common'
axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';


const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 90000 // request timeout
})


//POST传参序列化(添加请求拦截器)
service.interceptors.request.use((config) => {
  //在发送请求之前做某件事
  // let token = common.getCookie("token")
  // if(process.env.NODE_ENV !== 'production'){
  //   token=''
  // }
  // config.headers.Token = token;
  // token && (config.headers.Token = token);

  return config;
}, (error) => {
  console.log('错误的传参')
  return Promise.reject(error);
});

service.interceptors.response.use((res) => {
  if (!res.data.success) {
    return Promise.resolve(res)
  }
  return res
}, (error) => {
  console.log(error)
  return Promise.reject(error)
})




// 返回一个Promise(发送post请求)
export function post(url, params,) {
  // window.pageLoad.show()
  return new Promise((resolve, reject) => {
    service.post(url, params)
      .then(response => {
        resolve(response);
        // window.pageLoad.hide()

      }, err => {
        reject(err);
        // window.pageLoad.hide()

      })
      .catch((error) => {
        reject(error)
        // window.pageLoad.hide()

      })
  })
}

//返回一个Promise(发送get请求)
export function get(url, params) {
  // window.pageLoad.show()
  return new Promise((resolve, reject) => {
    service.get(url, {
        params: params
    })
    .then(response => {
      // window.pageLoad.hide()
      resolve(response);
    }, err => {
      // window.pageLoad.hide()
      reject(err);
    })
    .catch((error) => {
      reject(error);
    })
  })
}

