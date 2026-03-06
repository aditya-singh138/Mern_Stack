// asynchronous

// console.log("hello");
// console.log("hello");

// setTimeout(() => {
//     console.log("welcome!");
// },
// 2000)

// console.log("hii");
// console.log("hii");


// callback
// function sum(a,b){
//     console.log(a+b);
// }
// function calculate(a,b,sumcallback){
//     sumcallback(a,b);
// }
// calculate(1,4,sum);

// const hello = () => {
//     console.log("helloo");
// }
// setTimeout(hello,3000);



function getdata(dataId,getnextdata){
    setTimeout(()=>{
        console.log(dataId);
        if(getnextdata){
            getnextdata();
        }
    },2000)
}
//callback hell
getdata(1,() => {
    getdata(2,()=>{
        getdata(3,()=>{
            getdata(4);
        });
    })
});
