type Dog = {}

Network.HTTP.get<Dog[]>('http://url.com/dogs');
Network.UDP.send('http://url.com/cats', new ArrayBuffer(123));

// namespace alias
import d = A.B.C.d;

let e = d * 3;
console.log(e);