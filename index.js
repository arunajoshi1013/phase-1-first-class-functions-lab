// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
   const firstTwo = [];
   firstTwo[0] = drivers[0];
   firstTwo[1] = drivers[1];

   return firstTwo;
}

const returnLastTwoDrivers = function (drivers) {
   const lastTwo = [];
   lastTwo[0] = drivers[drivers.length - 2];
   lastTwo[1] = drivers[drivers.length - 1];

   return lastTwo;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(fare) {
   return function () {
      return (fare * 5);
   };
}

const fareDoubler = function (fare) {
   const fn = createFareMultiplier(fare / 2.5);

   return fn();
}
fareDoubler(fare);

function fareTripler (fare) {
   const fn = createFareMultiplier(fare / (5/3));

   return fn();
}
fareTripler(fare);

function selectDifferentDrivers(drivers, selectorFn) {
  return selectorFn(drivers);
}
