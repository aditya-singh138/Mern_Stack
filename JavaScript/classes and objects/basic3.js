// inheritance

// class person {
//     constructor(){
//         this.species= "homo sepiens";
//     }
//     eat() {
//         console.log("eat now.");
//     }
//     sleep(){
//         console.log("sleep early.");
//     }
//     work(){
//         console.log("i am busy.")
//     }
// }

// class engineer extends person {
//     work(){
//         console.log("hii! i am working on projects.");
//     }
// }

// let aditya= new engineer();



class person {
    constructor(name){
        this.species= "homo sepiens";
        this.name= name;
    }
    eat() {
        console.log("eat now.");
    }
    sleep(){
        console.log("sleep early.");
    }
}

class engineer extends person {
    constructor(name) {
        super(name);
    }
    work(){
        super.eat();
        console.log("hii! i am working on projects.");
    }
}

let aditya= new engineer("cse");