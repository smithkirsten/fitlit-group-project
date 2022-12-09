import { Chart } from "chart.js/auto";
// import { getRelativePosition } from "chart.js/helpers";

//query selects for the canvases
const stepChart = document.getElementById("stepGoalChart").getContext('2d'); //bar graph
const sleepChart = document.getElementById("weeksSleepChart").getContext('2d'); //double line graph??? or 2 graphs
const hydroDayChart = document.getElementById("todaysHydrationChart").getContext('2d'); //doughnut chart
const hydroWeekChart = document.getElementById("weeksHydrationChart").getContext('2d');//line graph

//variables that will be chart names
let stepComparisonChart;
let sleepDblDataChart;
let todaysHydroChart;
let weeksHydroChart;

// functions to update charts (data passed in as parameter)

const updateHydroDateChart = (ozToday) => {
    todaysHydroChart = new Chart(hydroDayChart, {
        type: 'doughnut',
        data: {
            labels: ['Today\'s Intake', 'Recommended Daily Intake'],
            datasets: [
                {
                    //label: optional and probably not helpful here
                    data: [ 50, 25 ], //[ ozToday, conditional parameter? if larger than 64, this is 0. else (64 - ozToday)]
                    backgroundColor: [ '#BF1363', '#F39237' ]
                }
            ],
        }
        //options
    })
} //sizing of this done in CSS

const updateHydroChart = (ozToday) =>
let weeksHydroChart;

export default updateHydroChart;