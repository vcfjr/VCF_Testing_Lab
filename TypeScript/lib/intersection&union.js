"use strict";
//== UNION & INTERSECTION ==//
Object.defineProperty(exports, "__esModule", { value: true });
let data = {
    name: "This",
    email: "thisisamail@gmail.com"
};
let contactInfo = Math.random() > 0.5
    ? {
        // we can assign it to a HasPhoneNumber
        name: "Mike",
        phone: 3215551212
    }
    : {
        // or a HasEmail
        name: "Mike",
        email: "mike@example.com"
    };
contactInfo.name; // NOTE: we can only access the .name property  (the stuff HasPhoneNumber and HasEmail have in common)
/**
 * (15) Intersection types
 */
let otherContactInfo = {
    // we _must_ initialize it to a shape that's asssignable to HasEmail _and_ HasPhoneNumber
    name: "Mike",
    email: "mike@example.com",
    phone: 3215551212
};
otherContactInfo.name; // NOTE: we can access anything on _either_ type
otherContactInfo.email;
otherContactInfo.phone;
exports.default = {};
