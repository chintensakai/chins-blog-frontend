import axios from 'axios'
import store from '../store'
import { Message } from 'element-ui';

export function request(config) {
    // 1. 创建axios实例
    const instance = axios.create({
        baseURL: 'http://localhost:8082',
        timeout: 5000,
        headers: {
            'content-type': 'application/json'
        }
    })

    // 2. axios拦截器
    instance.interceptors.request.use(config => {
        if (store.state.token) {

            config.headers[Authorization] = store.state.token;
        }
        return config
    }, err => {
        console.log('err ===> ' + err);
    })

    instance.interceptors.response.use(res => {
        // if (res.data.status != 200) {
        //     Message("Token Invalid!");
        // }
        return res.data;
    }, err => {
        console.log(err);
    })

    // 3. 发送真正的网络请求
    return instance(config);
    // 返回的是Promise，调用这个函数的时候直接then()就可以
}