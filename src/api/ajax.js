import axios from "axios"

//封装ajax方法
export default function ajax(url, data = {}, type = "GET") {
    new Promise(function(resolve, reject) {
        let promise
        if (type === "GET") {
            let dataStr = ''
            Object.keys(data).forEach(key => {
                //数据拼接字符串
                dataStr += key + data[key] + '&'
            })
            if (dataStr !== '') {
                dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
                url = url + '?' + dataStr
            }
            promise = axios.get(url)
        } else {
            promise = axios.post(url)
        }
        promise.then((response) => {
            resolve(response.data)
        }).catch((err) => {
            reject(err)
        })
    })

}