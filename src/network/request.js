import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    baseURL:'http://123.207.32.32:8000',
    timeout:5000
  })
  //发送拦截
  instance.interceptors.request.use(config=>{
    return config
  },error => {

  })
  //响应拦截
  instance.interceptors.response.use(res=>{
     return res.data
  },error => {

  })
  //不用自己封装一个promise  它return的就是一个promise
  return instance(config)

}



//封装一个请求函数
// export function request(config) {
//   const instance = axios.create({
//     baseURL:'http://123.207.32.32:8000',
//     timeout:5000
//   })
//   //不用自己封装一个promise  它return的就是一个promise
//   return instance(config)
//
// }


//封装一个axios请求函数 用es6的promise return方式
// export function request(config) {
//   return new Promise((resolve,reject)=>{
//     const instance = axios.create({
//       baseURL:'http://123.207.32.32:8000',
//       timeout:5000
//     })
//     instance(config)
//       .then(res=>{
//         resolve(res)
//       })
//       .catch(arr=>{
//         reject(arr)
//       })
//   })
// }


//封装一个axios请求函数 回调方式
/*export function request(config,success,failure){
  const intance1 = axios.create({
    baseURL:'http://123.207.32.32:8000',
    timeout:5000
  })
  intance1(config)
    .then(res=>{
      success(res)
  })
    .catch(arr=>{
      failure(arr)
    })
}*/


// 1,基本使用
/*axios({
  url:'http://123.207.32.32:8000/home/data',
  params:{
    type:"pop",
    page:1
  }
}).then(res=>{
  console.log(res)
})*/

/*axios({
  url:'http://123.207.32.32:8000/home/multidata',
}).then(res=>{
  console.log(res)
})*/

// 2
/*//并发请求axios.all()
axios.all([
  axios({
    url:'http://123.207.32.32:8000/home/multidata',
  }),
  axios({
    url:'http://123.207.32.32:8000/home/data',
    params: 'pop',
    // params: 'sell',
    page:2
  })
]).then(axios.spread((res1,res2)=>{
  console.log(res1);
  console.log(res2);
}))
  // .then(results=>{
  console.log(results);
// )*/


// 3 全局axios的对应的配置在进行网络请求
/*axios.defaults.baseURL='http://123.207.32.32:8000'
axios.defaults.timeout= 5000

axios.all([
  axios({
    url:'/home/multidata',
  }),
  axios({
    url:'/home/data',
    params: 'pop',
    // params: 'sell',
    page:2
  })
]).then(axios.spread((res1,res2)=>{
  console.log(res1);
  console.log(res2);
}))*/


//4 axios实例
/*const instance1 = axios.create({
  baseURL: 'http://123.207.32.32:8000',
  timeout: 4000
})
instance1({
  url: '/home/multidata'
}).then(res => {
  console.log(res);
})
instance1({
  url: '/home/data',
  params: {
    type: "pop",
    page: 2
  }
}).then(res => {
  console.log(res);
})*/





