// 导入axios 
import axios from 'axios'

// 设置axios 实例对象 
const instance = axios.create({
    baseURL:'https://mock.presstime.cn/mock/67f33492aa477834147779e7/WYW'
})


// 暴露axios实例对象
export default instance