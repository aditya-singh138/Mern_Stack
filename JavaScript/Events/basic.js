let a= document.querySelector("#k1");
a.innerText="click me";
a.onclick=() => {
    console.log("button was clicked");

}

let b= document.querySelector("#k2");
b.innerText="hello";
b.ondblclick=() => {
    console.log("double clicked on me");
}

let c= document.querySelector("#k3");
c.onmouseover=(e) => {
    console.log("alert! you entered in a div");
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    
}