const express = require('express')
const  myApp = express()
myApp.use(express.json())
myApp.use(express.urlencoded({entended: true}))
myApp.get('/users', (res,req)=>{
    res.status(200).join({
        users:[
            {
                name: 'matthabbey',
                email: 'matthabbey@yahoo.com',
                password: 'matt@2020'
            }
        ]
    })
})
port = process.env.PORT || 4005
myApp.listen(port)


const add = (a, b)=>{
    return a + b
}

const eRR = ()=>{
    throw Error("I am error to happen")
}

const promiseTest = (a, b)=>{
    return new Promise((resolve, reject)=>{
        if(a - b > 0){
            resolve('+ve')
        }else{
            reject('-ve')
        }
    })
}

const arr = ()=>{
    return ['Matt']
}

module.exports = {
    add,
    eRR,
    promiseTest,
    arr,
    myApp
}