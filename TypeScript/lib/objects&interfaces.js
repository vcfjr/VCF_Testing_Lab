//== OBJECTS ==//
/**
 * (11) object types can be expressed using {} and property names
 */
let cc;
cc = {
    streetName: "Fake Street",
    houseNumber: 123
};
cc = {
    houseNumber: 33
};
/**
 * 🚨 Property 'streetName'
 * 🚨   is missing in type   '{ houseNumber: number; }'
 * 🚨   but required in type '{ houseNumber: number; streetName: string; }'.
 */
/**
 * (12) You can use the optional operator (?) to
 * indicate that something may or may not be there
 */
let dd;
dd = {
    houseNumber: 33
};
// // and refer to it by name
let ee = { houseNumber: 33 };
