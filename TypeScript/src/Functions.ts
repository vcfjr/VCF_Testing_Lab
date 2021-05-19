/**
 * @type Interface for hasphone number
 * @property name : string
 * @property phone : number
 * @summary validate the input to be HasPhoneNumber
 */

export interface HasPhoneNumber {
    name: string;
    phone: number;
}

/**
 * @type Interface for hasmail
 * @property name : string
 * @property phone : number
 * @summary validate the input to be HasMail
 */


export interface HasEmail {
    name: string;
    email: string;
}

/**
 * 
 * @param to HasEmail
 * @returns r: string, m: string
 */

function sendMail(to: HasEmail): { r: string, m: string } {
    return {
        r: "${to.email} <${to.email}>",
        m: "You have got the loan"
    }
}

const mailIt = (to: HasEmail): { r: string, m: string } => {
    return {
        r: "${to.email} <${to.email}>",
        m: "You have got the loan"
    }
}


/* -------------------------------------------------------------------------- */
/*                        Function Signature OverLoding                       */
/* -------------------------------------------------------------------------- */

function contactPeople(method : "email" | "phone", ...people : (HasEmail | HasPhoneNumber)[]) : void {
    if(method == "email"){
        (people as HasEmail[]).forEach(sendMail)
    }
    else{
        (people as HasPhoneNumber[])
    }
}

contactPeople("email", {name:"name", email:"email"})
contactPeople("phone", {name:"name", phone:1020})
contactPeople("email", {name:"name", phone:1020})