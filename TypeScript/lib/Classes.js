"use strict";
/* -------------------------------------------------------------------------- */
/*                                   Classes                                  */
/* -------------------------------------------------------------------------- */
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewContact = exports.Temp = exports.Contact = void 0;
class Contact {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}
exports.Contact = Contact;
/* -------------------------------------------------------------------------- */
/*                              Access Specifiers                             */
/* -------------------------------------------------------------------------- */
/**
 * - public
 * - protected
 * - private
 */
/**
 * @class Team
 * @constructor (name: string, email: string, phone: number)
 *
 */
class Temp {
    constructor(name, email = "No Email", phone) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        // we can also define readonlly stuff
        this.property = 1.0;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
}
exports.Temp = Temp;
let a = new Temp("this", "that", 08252);
/* -------------------------------------------------------------------------- */
/*                               Abstract Class                               */
/* -------------------------------------------------------------------------- */
/**
 * @abstract AbstractContact
 * @constructor (name: string , email: string, phone: number)
 * @function sendMail()
 */
class AbstractContact {
    constructor(email, name, phone) {
        this.email = email;
        this.name = name;
        this.phone = phone;
    }
}
/* -------------------------------------------------------------------------- */
/*                      Implementation of Abstract Class                      */
/* -------------------------------------------------------------------------- */
class NewContact {
    constructor(name, email, phone) {
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
    sendMail() {
        //Nothing just for now
    }
}
exports.NewContact = NewContact;
