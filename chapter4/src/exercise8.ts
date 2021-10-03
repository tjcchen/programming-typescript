export {};

// 4.1.7 invoke function signature
// (1)
type Add = (a: number, b: number) => number;

type Greet = (name: string) => string;

type Log = (message: string, userId?: string) => void;

type SumVariadicSafe = (...numbers: number[]) => number;

// simple log demo
type LogSafe = (message: string, userId?: string) => void;

let log: LogSafe = (
  message,
  userId = 'Not signed in',
) => {
  let time = new Date().toISOString();
  console.log(time, message, userId);
};

log('Andy'); // 2021-10-03T03:44:29.667Z Andy Not signed in


// (2) type level and value level
function area(radius: number): number | null {
  if (radius < 0) {
    return null;
  }
  return Math.PI * (radius ** 2);
}

let r: number = 3;
let a = area(r);
if (a !== null) {
  console.info('result: ', a); // result:  28.274333882308138
}
