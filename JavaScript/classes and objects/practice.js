// class user{
//     constructor(name,email){
//         this.name= name;
//         this.email= email;
//     }

//     viewdata(){
//         console.log("data");
//     }
// }
// let std1= new user("aditya","adi@123gmail.com");
// let std2= new user("raj","raj@123gmail.com");
// let std3= new user("rahul","rahul@123gmail.com");




class user{
    constructor(name,email){
        this.name= name;
        this.email= email;
    }

    viewdata(){
        console.log("data");
    }
}

class admin extends user {
    constructor(name,email){
        super(name,email);
    }
    editdata(){
        console.log("data is changed");
    }
}
let per1= new admin("admin","admin@123gmail.com");