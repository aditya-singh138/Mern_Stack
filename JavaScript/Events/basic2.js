// event listeners

let a= document.querySelector("#k1");
a.addEventListener("click" ,() =>{
    console.log("somebody clicked on me 1!");
})
a.addEventListener("click" ,() =>{
    console.log("somebody clicked on me 2!");
})


let b= document.querySelector("#k2");
b.addEventListener("mouseover",(e) => {
    console.log("hooo what is this ? someone clicked on me!");
    console.log(e);
    console.log(e.type);
    console.log(e.target);

})

// const random= () => {
//     console.log("somebody clicked on me 3!");
// }
// a.addEventListener("click",random);
// a.removeEventListener("click",random);