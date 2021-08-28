/**
 * Custom Fual KPL Calculator
 * Using let or const multiplication and division.
 */

const totalDistance = 900; // kilometers
const fullCapacity = 12; // liters

const pricePerLiter = 88.75; // Fual Price per Liter

const totalFualPrice = fullCapacity * pricePerLiter;

const kpl = totalDistance / fullCapacity;

console.log(`Distance ${totalDistance} km`);
console.log(`Fual Capacity: ${fullCapacity} Taka`);
console.log(`Fual Price Per Liter: ${pricePerLiter} liter`);
console.log(`Total Fual Price: ${totalFualPrice} Taka`);
console.log(`Kilometer Per Liter: ${kpl} kpl`);

/** Output: 
 * Distance 900 km
    Fual Capacity: 12 Taka
    Fual Price Per Liter: 88.75 liter
    Total Fual Price: 1065 Taka
    Kilometer Per Liter: 75 kpl
*/
