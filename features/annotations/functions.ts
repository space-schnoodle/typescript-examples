const add = (a: number, b: number): number => {
  return a + b;
};

// return type inferred 
const adder = (a: number, b: number) => {
  return a + b;
};

const subtract = (a: number, b: number): number => {
  return a - b;
}

function divide( a: number, b: number) : number {
  return a / b;
}

// annotations for anonymous functions

const multiply = function(a: number, b: number): number {
  return a * b;
}

// void and never
const logger = (message: string): void => {
  console.log(message);
}

// never, never return anything
const throwError = (message: string): never => {
  throw new Error(message);
}

const todaysWeather = {
  date: new Date(),
  weather: 'sunny'
};

const logWeather = ({ date, weather }: { date: Date; weather: string}) : void => {
  console.log(date);
  console.log(weather);
}

logWeather(todaysWeather);