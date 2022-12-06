// Your fetch requests will live here!


console.log('I will be a fetch request!')

//fetch 3 times, get data, then call New UserRepository 
// fetch('https://example.com/', {
//   method: 'GET',
//   body: new FormData(),
// });
//in script, function loadData() => calls the fetches from apiCalls.js, then creates new UserRepository

//const user = new User()
// fetch('https://opentdb.com/api.php?amount=20&category=22')
//     .then((response) => (response.json()))
//     .then((data) => {
//         data.results.forEach(results => console.log(results.correct_answer))
//     })
let userData
let sleepData
let hydroData

function loadUserData() {
    const userURL = 'https://fitlit-api.herokuapp.com/api/v1/users'
    return fetch(userURL)
    .then((response) => response.json())
    .then((data) => {
        userData = data
        console.log(userData)
    })
}
function loadSleepData() {
    const sleepURL = 'https://fitlit-api.herokuapp.com/api/v1/sleep'
    return fetch(sleepURL)
        .then((response) => response.json())
        .then((data) => {
            sleepData = data
            console.log(sleepData)
        })
}
function loadHydrationData() {
    const hydrationURL = 'https://fitlit-api.herokuapp.com/api/v1/hydration'
    return fetch(hydrationURL)
        .then((response) => response.json())
        .then((data) => {
            hydroData = data
            console.log(hydroData)
        })
}

// export default apiCalls;
export default {loadUserData, loadSleepData, loadHydrationData};