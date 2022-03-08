import getData from "./my-module.js";

getData(1)
    .then((data)=>console.log(data))
    .catch((error)=>console.log(error));

