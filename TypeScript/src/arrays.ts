//== SIMPLE ARRAYS ==//

/**
 * (8) simple array types can be expressed using []
 */
let aa: number[] = [];
aa.push(33);
// aa.push("abc"); // 🚨 ERROR: Argument of type '"abc"' is not assignable to parameter of type 'number'.

/**
 * (9) we can even define a tuple, which has a fixed length
 */
let bb: [number, string, string, number] = [
  123,
  "Fake Street",
  "Nowhere, USA",
  10110
];

// bb = [1, 2, 3]; // 🚨 ERROR: Type 'number' is not assignable to type 'string'.

/**
 * (10) Tuple values often require type annotations (  : [number, number] )
 */
const xx = [32, 31]; // number[];
const yy: [number, number] = [32, 31];