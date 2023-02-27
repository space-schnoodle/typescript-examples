const carMakers: string[] = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [
  ['f150'],
  ['corolla'],
  ['camaro']
];

// Help with inference when extracting values
const car = carMakers[0];
const mycar = carMakers.pop();

// Prevent incompatible values
//carMakers.push(100);

// We got help with built in fuctions
carMakers.map((car: string) : string => {
  return car.toUpperCase();
});

// Multiple types in array
const importantDates: (Date | string)[] = [new Date(), '2030-10-10'];

