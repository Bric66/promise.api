require('dotenv').config();
const usernameApi=process.env.USERKEY;
const foodApi=process.env.FOODKEY

const axios = require('axios');


const foodList = axios.get(`${foodApi}/learning-area/javascript/apis/fetching-data/can-store/products.json`);
const userApi =  axios.get(`${usernameApi}/api/`);

// todo transform this in a new async await function.
function getUserInfosWithThen() {
   userApi.then(response => {
    console.log(response.data.results[0].name.title + ' ' + response.data.results[0].name.first + ' ' + response.data.results[0].name.last);
        foodList.then(food => console.log(food.data.map(foodName => foodName.name)))
   })
}
 
async function getUserInfosWithAsyncAwait() {
    const userApi =  await axios.get(`${usernameApi}/api/`);
    const foodList = await axios.get(`${foodApi}/learning-area/javascript/apis/fetching-data/can-store/products.json`);
    console.log(userApi.data.results[0].name.title + ' ' + userApi.data.results[0].name.first + ' ' + userApi.data.results[0].name.last);
    console.log(foodList.data.map(foodName => foodName.name))
}


(async() => {getUserInfosWithThen()}) ();

(async() => {getUserInfosWithAsyncAwait()}) ();