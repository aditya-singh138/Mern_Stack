// objects

const info = {
    caltax() {
        console.log("tax rate is 10%");
    }
}


const employee={
    name: "ramesh",
    salary: 50000,
    age: 22,
}
employee.__proto__ = info;
