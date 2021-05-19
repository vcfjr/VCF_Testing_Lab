//== OBJECTS ==//

/**
 * (11) object types can be expressed using {} and property names
 */
 let cc: { houseNumber: number; streetName: string };
 cc = {
   streetName: "Fake Street",
   houseNumber: 123
 };
 
//  cc = {
//    houseNumber: 33
//  };
 /**
  * 🚨 Property 'streetName'
  * 🚨   is missing in type   '{ houseNumber: number; }'
  * 🚨   but required in type '{ houseNumber: number; streetName: string; }'.
  */
 
 /**
  * (12) You can use the optional operator (?) to
  * indicate that something may or may not be there
  */
 let dd: { houseNumber: number; streetName?: string };
 dd = {
   houseNumber: 33
 };
 
 // (13) if we want to re-use this type, we can create an interface
 interface Address {
   houseNumber: number;
   streetName?: string;
 }
 // // and refer to it by name
 let ee: Address = { houseNumber: 33 };
 