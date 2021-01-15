/**
 * 网络请求Axios
 * 这里用的是console.log,在项目里使用框架可以直接引用框架里的提示组件
 */
import axios from "axios";

// 错误信息的响应方法
const errorHandle = (status, other) => {
  switch (status) {
    case 400:
      // 请求头和服务器的限制
      console.log("服务器不理解请求语法");
      break;
    case 401:
      // token验证失败
      console.log("未授权，请求要求身份验证");
      break;
    case 403:
      // 用户身份过期,服务器请求限制
      console.log("禁止，服务器拒绝请求");
      break;
    case 404:
      // 网络请求地址错误
      console.log("未找到，服务器找不到请求的网页");
      break;
    default:
      console.log(other);
      break;
  }
};

//创建axios对象
const instance = axios.create({
  baseURL: process.env.VUE_APP_BASEURL, //环境变量接口请求头
  timeout: 5000, //请求超时
});

// 添加请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    config.headers["Content-Type"] = "application/json";
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
instance.interceptors.response.use(
  //成功
  /**
   * 成功和失败
   * 1.请求成功和请求失败
   * 2.结果的成功和失败
   */
  (response) => {
    response.status === 200
      ? Promise.resolve(response)
      : Promise.resolve(response);
    return response.data;
  },
  (error) => {
    // 对响应错误做点什么
    const { response } = error; //ES6的解构赋值
    /**
     * response包含的信息
     * status
     * data
     */
    if (response) {
      // 具体错误信息
      errorHandle(response.status, response.data);
      return Promise.reject(response);
    } else {
      console.log("请求中断了");
    }
  }
);
export default instance;
