let a=0;
let b=0;
let choices= document.querySelectorAll(".choice");
let msg= document.querySelector(".button");
let uscore= document.querySelector("#k2");
let cscore= document.querySelector("#k3");

const showwinner=(userwin) => {
    if(userwin){
        msg.innerText="You Win";
        a++;
        uscore.innerText= a;
        msg.style.backgroundColor="yellowgreen";

    }
    else{
        msg.innerText="You Lose";
        b++;
        cscore.innerText= b;
        msg.style.backgroundColor="red";
    }
}

const playgame=(uchoice)=>{
    console.log("your choice=",uchoice);

    let cchoice= getcompchoice();
    console.log("comp choices=",cchoice);

    if(uchoice==cchoice){
        //console.log("draw");
        msg.innerText="Draw";
        msg.style.backgroundColor="black";
    }
    else{
        let userwin= true;
        if(uchoice=="rock"){
            //paper scissor
            userwin= cchoice=="paper" ? false : true;
        }
         else if(uchoice=="paper"){
            // rock scissor
            userwin= cchoice=="rock" ? true : false;
        }
        else{
            //rock paper
            userwin= cchoice=="rock" ? false : true;
        }

        showwinner(userwin);
    }

}


choices.forEach((choice) =>{
    choice.addEventListener("click",() => {
        let uchoice= choice.getAttribute("id");
        playgame(uchoice);
    })
})

const getcompchoice=() => {
    const options= ["rock","paper","scissors"];
    ranidx= Math.floor(Math.random()*3);
    return options[ranidx];
    
}