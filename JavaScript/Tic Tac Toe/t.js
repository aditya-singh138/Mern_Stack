let boxes= document.querySelectorAll(".box");
let m= document.querySelector("#k4");
let r= document.querySelector("#k3");
const arr= [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

let turn=true;
boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        if(turn){
            box.innerText="0";
            turn= false;
        }
        else{
            box.innerText="X";
            turn= true;
        }
        box.disabled= true;
        checkwinner();
    });
});

let checkwinner= ()=> {
    for(let pattern of arr){
        let p1= boxes[pattern[0]].innerText;
        let p2= boxes[pattern[1]].innerText;
        let p3= boxes[pattern[2]].innerText;

        if(p1!="" && p2!="" && p3!=""){
            if(p1==p2 && p2==p3){
                console.log("winner");
                m.innerText= "congratulations"+", winner is "+p1;
                m.style.visibility="visible";
                disablebox(); 
            }
        }
    }
}

const disablebox=() => {
    for(let box of boxes){
        box.disabled=true;
    }
}

const resetgame = ()=> {
    for(let box of boxes){
        box.disabled= false;
        box.innerText="";
        m.style.visibility="hidden";
        turn= true;
    }
}
r.addEventListener("click",resetgame);
