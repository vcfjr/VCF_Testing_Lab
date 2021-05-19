"use strict";
/**
 * @type Interface for hasphone number
 * @property name : string
 * @property phone : number
 * @summary validate the input to be HasPhoneNumber
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 * @param to HasEmail
 * @returns r: string, m: string
 */
function sendMail(to) {
    return {
        r: "${to.email} <${to.email}>",
        m: "You have got the loan"
    };
}
const mailIt = (to) => {
    return {
        r: "${to.email} <${to.email}>",
        m: "You have got the loan"
    };
};
function contactPeople(method, ...people) {
    if (method == "email") {
        people.forEach(sendMail);
    }
}
