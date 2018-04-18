// 配置API接口地址
// var root = 'http://localhost:9000/api/v1';
var root = 'http://127.0.0.1/workphp';
// 引用axios
var axios = require('axios')

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
function apiAxios (method, url, params, success, failure) {
  axios({
    method: method,
    url: url,
    data: method === 'POST' || method === 'PUT' ? params : null,
    params: method === 'GET' || method === 'DELETE' ? params : null,
    baseURL: root,
    withCredentials: false
  })
  .then(function (res) {
   
      success(res.data);
    
  })
  .catch(function (err) {
    let res = err.response
    if (err) {
      window.alert('api error, HTTP CODE: ' + res.status)
      return
    }
  })
}

// 返回在vue模板中的调用接口
export default {
  get: function (url, params, success, failure) {
    return apiAxios('GET', url, params, success, failure)
  },
  post: function (url, params, success, failure) {
    return apiAxios('POST', url, params, success, failure)
  },
  put: function (url, params, success, failure) {
    return apiAxios('PUT', url, params, success, failure)
  },
  delete: function (url, params, success, failure) {
    return apiAxios('DELETE', url, params, success, failure)
  },
  login:function (id){
      let userid = localStorage.getItem("userid");
      return userid == id;
  }
}
