export {};

// 4.1.9 reserve function
// (1)
type Reservation = {
  from: Date;
  to: Date;
  destination: string;
};

type Reserve = {
  (from: Date, to: Date, destination: string): Reservation
};

let reserve: Reserve = (from, to, destination) => {
  return {
    from,
    to,
    destination
  };
};

let retVal = JSON.stringify(reserve(new Date(), new Date(), 'Tianjin'));
console.log(retVal); // {"from":"2021-10-05T15:19:27.979Z","to":"2021-10-05T15:19:27.979Z","destination":"Tianjin"}

// (2)
type Reservation1 = {
  from: Date,
  toOrDestination: Date | string,
  destination?: string
};

type Reserve1 = {
  (from: Date, to: Date, destination: string): Reservation1
  (from: Date, destination: string): Reservation1
};

let reserve1: Reserve1 = (
  from: Date,
  toOrDestination: Date | string,
  destination?: string
) => {
  return {
    from,
    toOrDestination,
    destination
  };
};

let retVal1 = JSON.stringify(reserve1(new Date, 'Beijing'));
console.log(retVal1); // {"from":"2021-10-05T15:35:22.875Z","toOrDestination":"Beijing"}
