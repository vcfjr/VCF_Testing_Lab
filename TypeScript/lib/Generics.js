/* -------------------------------------------------------------------------- */
/*                                  Generics                                  */
/* -------------------------------------------------------------------------- */
/**
 * @deprecated
 */
let val = {
    value: []
};
/**
 * (3) You don't have to use exactly your type parameter as an arg
 * -   things that are based on your type parameter are fine too
 */
function resolveOrTimeout(promise, timeout) {
    return new Promise((resolve, reject) => {
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
function arrayToDict(array) {
    const out = {};
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
function startTuple(a) {
    return function finishTuple(b) {
        return [a, b];
    };
}
const myTuple = startTuple(["first"])(42);
