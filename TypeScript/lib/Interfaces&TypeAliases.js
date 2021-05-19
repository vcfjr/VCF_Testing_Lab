"use strict";
/* -------------------------------------------------------------------------- */
/*                                Type Aliases                                */
/* -------------------------------------------------------------------------- */
Object.defineProperty(exports, "__esModule", { value: true });
// // NOTE: we don't need type annotations for contact or message
const emailer = (_contact, _message) => {
    /** ... */
};
const phoneDict = {
    office: { areaCode: 321, num: 5551212 },
    home: { areaCode: 321, num: 22524 } // try editing me
};
phoneDict.home; // definitely present
phoneDict.office; // definitely present
phoneDict.mobile; // MAYBE present
const x = Math.random() > 0.5 ? "b" : ["a"]; // ✅ ok!
exports.default = {};
