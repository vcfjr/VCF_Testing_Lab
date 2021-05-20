/* -------------------------------------------------------------------------- */
/*                                  Generics                                  */
/* -------------------------------------------------------------------------- */

/**
 * @param Template type of object
 */

interface IValue<Template>{
    value : Template
}
/**
 * @deprecated
 */
let val:IValue<string[]> = {
    value:[]
}

interface INew<Template = any>{
    value : Template
}


/**
 * (3) You don't have to use exactly your type parameter as an arg
 * -   things that are based on your type parameter are fine too
 */

function resolveOrTimeout<T>(promise: Promise<T>, timeout: number): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    // start the timeout, reject when it triggers
    const task = setTimeout(() => reject("time up!"), timeout);

    promise.then(val => {
      // cancel the timeout
      clearTimeout(task);
      // resolve with the value
      resolve(val);
    });
  });
}
resolveOrTimeout(fetch(""), 3000);



/**
 * (4) Type parameters can have constraints
 */

function arrayToDict<T extends { id: string }>(array: T[]): { [k: string]: T } {
  const out: { [k: string]: T } = {};
  array.forEach(val => {
    out[val.id] = val;
  });
  return out;
}

const myDict = arrayToDict([
  { id: "a", value: "first", lisa: "Huang" },
  { id: "b", value: "second" }
]);

/**
 * (5) Type parameters are associated with scopes, just like function arguments
 */

function startTuple<T>(a: T) {
  return function finishTuple<U>(b: U) {
    return [a, b] as [T, U];
  };
}
const myTuple = startTuple(["first"])(42);
