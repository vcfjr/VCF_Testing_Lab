/* -------------------------------------------------------------------------- */
/*                           Variables in TypeScript                          */
/* -------------------------------------------------------------------------- */

/**
 * (1) Default : Without any kind of type scpecification
 */

let a = 10

/**
 * (2) Type Specified variable but not initialization
 */

let b : number; 

/**
 * (3) Inicialized
 */

let c  = "Hello String"

/**
 * (4) Initialized with type specification
 */

let d : string = "Get Up"


/**
 * ! You will get errs if
 * (1) You decalre variable without initializing and then don't specify any type
 * (2) Can't store another type of value in an already specified variable
 */
