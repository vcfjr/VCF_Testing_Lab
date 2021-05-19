/* -------------------------------------------------------------------------- */
/*                                   Classes                                  */
/* -------------------------------------------------------------------------- */

import { HasEmail, HasPhoneNumber } from "./Functions";

export class Contact implements HasEmail {
    name: string;
    email: string;
    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
    }

}

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

export class Temp implements HasEmail, HasPhoneNumber {

    // we can also define readonlly stuff
    readonly property : number = 1.0;

    constructor(public name: string, public email: string = "No Email", public phone:number) {
        this.name = name;
        this.email = email;
        this.phone = phone
    }
}

let a = new Temp("this", "that", 08252);

/* -------------------------------------------------------------------------- */
/*                               Abstract Class                               */
/* -------------------------------------------------------------------------- */

/**
 * @abstract AbstractContact
 * @constructor (name: string , email: string, phone: number) 
 * @function sendMail()
 */

abstract class AbstractContact implements HasEmail, HasPhoneNumber{

    constructor(public email:string, public name: string, public phone: number){

    }

    abstract sendMail():void

}


/* -------------------------------------------------------------------------- */
/*                      Implementation of Abstract Class                      */
/* -------------------------------------------------------------------------- */

export class NewContact implements AbstractContact{
    constructor(public name:string, public email: string,public phone: number){

    }
    sendMail(){
        //Nothing just for now
    }
}