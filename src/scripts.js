// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// console.log(userData,"<>>>>userData")
// An example of how you tell webpack to use a CSS file
import './html-css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

console.log('This is the JavaScript entry file - your code begins here.');

// An example of how you tell webpack to use a JS file
const header1 = document.querySelector('h1')
const userPromise = apiCalls.loadUserData()
const hydrationPromise = apiCalls.loadHydrationData()
const sleepPromise = apiCalls.loadSleepData()

Promise.all([userPromise, hydrationPromise, sleepPromise])
    .then((values) => {
        {
            let userRepo = new UserRepository(values[0],values[1],values[2])
            console.log(userRepo)
            console.log('script: ',values[0].userData[0].id);
            header1.innerText = values[0].userData[0].name
        }
})


// console.log(userRepo)
// apiCalls.loadUsers(userRepo)

// import userData from './data/users';
import apiCalls from './apiCalls';
import UserRepository from './UserRepository';
// import hydrationTestData from '../test/hydration-test-data';
// import sleepTestData from '../test/sleep-test-data';

