// Union and Intersection
export {}

// (1)
type Cat = { name: string, purrs: boolean };
type Dog = { name: string, barks: boolean, wags: boolean };
type CatOrDogBoth = Cat | Dog;
type CatAndDog = Cat & Dog;


