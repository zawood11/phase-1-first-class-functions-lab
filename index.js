// Code your solution in this file!
function returnFirstTwoDrivers(){
    const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

    const firstTwoDrivers = drivers.slice(0, 2);

    return firstTwoDrivers;
}

function returnLastTwoDrivers(){
    const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

    const lastTwoDrivers = drivers.slice(2, 4);

    return lastTwoDrivers;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(fare){
    const faremultiplier = () => fare * 5;

    return faremultiplier;
}

function fareDoubler(fare){
    return fare * 2;
}

function fareTripler(fare){
    return fare * 3;
}

function selectDifferentDrivers(arrayOfDrivers, fn){
    const newArr = fn();

    return newArr;
}