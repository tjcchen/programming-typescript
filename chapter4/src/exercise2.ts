export {};

// 4.1.1 optional parameter & default value
// (1) optional parameter
function log(message: string, userId?: string) {
  let time = new Date().toLocaleTimeString();
  console.log(time, message, userId || 'Not signed in');
}

log('Page loaded');                 // 9:45:50 PM Page loaded Not signed in
log('User signed in', 'da763be');   // 9:45:50 PM User signed in da763be

// (2) default value
function log1(message: string, userId = 'Not signed in') {
  let time = new Date().toISOString();
  console.log(time, message, userId);
}

log1('User clicked on a button', 'da763be');
log1('User signed out');

