// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// console.log(userData,"<>>>>userData")
// An example of how you tell webpack to use a CSS file
import './html-css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

console.log('This is the JavaScript entry file - your code begins here.');

// An example of how you tell webpack to use a JS file

const userPromise = apiCalls.loadUserData()
const sleepPromise = apiCalls.loadSleepData()
const hydrationPromise = apiCalls.loadHydrationData()


Promise.all([userPromise, sleepPromise, hydrationPromise])
    .then((values) => {
        {
            console.log(values);
        }
})

// console.log(userRepo)
// apiCalls.loadUsers(userRepo)

// import userData from './data/users';
import apiCalls from './apiCalls';
import UserRepository from './UserRepository';
// import hydrationTestData from '../test/hydration-test-data';
// import sleepTestData from '../test/sleep-test-data';

