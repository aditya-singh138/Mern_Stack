//async
async function holo(){
    console.log("hello");
}

//async-await

function nonsense(value){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data= ",value);
            resolve("happy");
        },2000)
    })
}

// async function dimak(){
//     await nonsense(1);
//     await nonsense(3);
//     await nonsense(8);
//     await nonsense(4);
//     await nonsense(7);
// }
//or
(async function(){
    await nonsense(1);
    await nonsense(3);
    await nonsense(8);
    await nonsense(4);
    await nonsense(7);
})();
