import axios from "axios";


const getData = (id) => {
    return new Promise (async(resolve,reject) => {

        const {data: user} = await axios("https://jsonplaceholder.typicode.com/users/" + id);

        const {data: post} = await axios("https://jsonplaceholder.typicode.com/posts/" + id);

        resolve(["User upload",user,"Post upload",post]);
        reject("Hatalı");
    })
};

export default getData;
 

