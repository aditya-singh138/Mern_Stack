let a= document.createElement("button");
a.innerText="click me";
a.style.backgroundColor="red";
a.style.color="white";
document.querySelector("body").prepend(a);
console.dir(a);