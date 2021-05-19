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
/* -------------------------------------------------------------------------- */
/*                        Function Signature OverLoding                       */
/* -------------------------------------------------------------------------- */
function contactPeople(method, ...people) {
    if (method == "email") {
        people.forEach(sendMail);
    }
    else {
        people;
    }
}
contactPeople("email", { name: "name", email: "email" });
contactPeople("phone", { name: "name", phone: 1020 });
contactPeople("email", { name: "name", phone: 1020 });
/* -------------------------------------------------------------------------- */
/*    the lexical scope (this) of a function is part of its signature    */
/* -------------------------------------------------------------------------- */
function sendMessage(preferredMethod) {
    if (preferredMethod === "email") {
        console.log("sendEmail");
        sendMail(this);
    }
    else {
        console.log("sendTextMessage");
        sendTextMessage(this);
    }
}
const c = { name: "Mike", phone: 3215551212, email: "mike@example.com" };
function invokeSoon(cb, timeout) {
    setTimeout(() => cb.call(null), timeout);
}
// 🚨 this is not satisfied
// invokeSoon(() => sendMessage("email"), 500);
// ✅ creating a bound function is one solution
const bound = sendMessage.bind(c, "email");
invokeSoon(() => bound(), 500);
// 
// ✅ call/apply works as well
invokeSoon(() => sendMessage.apply(c, ["phone"]), 500);
function sendTextMessage(arg0) {
    throw new Error("Function not implemented.");
}
