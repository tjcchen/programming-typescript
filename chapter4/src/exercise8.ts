export {};

// 4.1.7 invoke function signature
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
