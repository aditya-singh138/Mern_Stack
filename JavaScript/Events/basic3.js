let a= document.querySelector("#k1");
a.innerText="click me";
let mode="light";
a.addEventListener("mouseover" ,() => {
    if(mode=="light"){
        document.querySelector("p").style.color="white";
        document.querySelector("body").style.backgroundColor="black";
        mode="black";
    }
    else{
        document.querySelector("p").style.color="black";
        document.querySelector("body").style.backgroundColor="white";
        mode="light";
    }
})