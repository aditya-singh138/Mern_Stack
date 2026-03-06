// class and object made by class

// class maruti{
//     start(){
//         console.log("start");
//     }
//     stop(){
//         console.log("stop");
//     }
// }

// let car= new maruti();


//constructor

class maruti{
    constructor(brand,milege){
        console.log("hello");
        this.brand= brand;
        this.milege= milege;
    }
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }
}

let car= new maruti("car",10);
let car2= new maruti("car2",20);