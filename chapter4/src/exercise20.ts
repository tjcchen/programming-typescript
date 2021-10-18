// 4.3 type-driven development
// declare type signature first, then write implementation
function map<T, U>(array: T[], fn: (item: T) => U): U[] {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result[i] = fn(array[i]);
  }
  return result;
}

// (T3) 
type Reservation = unknown;

type Reserve = {
  (from: Date, to: Date, destination: string): Reservation
  (from: Date, destination: string): Reservation
  (destination: string): Reservation
};

let reserve: Reserve = (
  fromOrDestination: Date | string,
  toOrDestination?: Date | string,
  destination?: string
) => {
  if (
    fromOrDestination instanceof Date &&
    toOrDestination instanceof Date &&
    destination !== undefined
  ) {
    // Book a one-way trip
  } else if (
    fromOrDestination instanceof Date &&
    typeof toOrDestination === 'string'
  ) {
    // Book a round trip
  } else if (
    typeof fromOrDestination === 'string'
  ) {
    // Book a trip right away
  }
 };

reserve('beijing');