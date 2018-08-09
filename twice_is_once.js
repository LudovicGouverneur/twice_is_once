// # twice_is_once


// let input = 0;
// (input += String(input += 1)) % 6;
//   // input: (number, 0)
//   input += 1;
//   // input: (number, 1)
//   String(input);
//   // (string, "1")
//   input += "1";
//   // input: (string, "11")
//   "11" % 6;
//   // (number, 5)
  


debugger;

let a = 0;
const b = 1;
const c = 5;

let actual;

// (a += String(a += b)) % c;
{
  a += b;
  let step_1 = String(a);
  let step_2 = a += step_1; 
  actual = step_2 % c;
};
