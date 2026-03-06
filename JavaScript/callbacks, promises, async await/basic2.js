// promises

// let promise= new Promise((resolve,reject)=>{
//     console.log("i am promise");
//     //resolve("solveddd");
//     reject("some error occured");
// })


// const getpromise =()=>{
//     return new Promise((resolve,reject)=>{
//         console.log("welcome back!");
//         resolve("success");
//         //reject("error! besharam insan");

//     })
// }
// let promise= getpromise();
// promise.then((res)=>{
//     console.log("happy",res);
// })
// promise.catch((err)=>{
//     console.log("sad",err);
// })



// function asyncFunc(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("hii3");
//             resolve("success");
//         },3000)
//     })
// }

// console.log("hii4");
// let p1= asyncFunc();
// p1.then(()=>{
//     console.log("hii5");
// })

//promise chain
function asyncFunc1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data1");
            resolve("success");
        },3000)
    })
}

function asyncFunc2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data2");
            resolve("success");
        },3000)
    })
}
console.log("fetching data1");
asyncFunc1().then(()=>{
    console.log("fetching data2");
    asyncFunc2().then(()=>{
        console.log("hello5");
    })
})

const a= await func1;
const b= await func2;
console.log()