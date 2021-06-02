// After npm install node-fetch definining fetch
const fetch = require('node-fetch');
// Async/Await with Fetch
const fetchCityData = async () => {
    // HTTP GET call to download raw data
    const response = await fetch('https://geocode.xyz/austin?json=1'); 
    // convert to json format
    const refactor = await response.json();
    // prints in the console the lattitude and longitude
    console.log(refactor.latt, refactor.longt);
}
// Calling the function
fetchCityData();



