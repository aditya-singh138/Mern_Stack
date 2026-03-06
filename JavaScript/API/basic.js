const url= "https://cat-fact.herokuapp.com/facts";

const getfacts = async () => {
    let response= await fetch(url);
    console.log(response);

}