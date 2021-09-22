export {};

// 3.2.12 null, undefined, void, never
// (a) a function returns number or null
function a(x: number) {
  if (x < 10) {
    return x;
  }
  return null;
}

// (b) a function returns undefined
function b() {
  return undefined;
}

// (c) a function returns void
function c() {
  let a = 2 + 2;
  let b = a * a;
}

// (d) a function returns never
function d() {
  throw TypeError('I always error');
}

// (e) a function return never
function e() {
  while (true) {
    d();
  }
}