const express = require("express");

const app = express();

//Test 1 Code * Uncomment statement below
// app.get("/", (req, res) => {
//     //we have not addded any time related functions here, we just observed that gap b/w two responses
//     setTimeout(function () { console.log("hello"); }, 4000)
//     res.send("requested");

// })

//Test 2 Code
app.get("/", (req, res) => {
    //we have not addded any time related functions here, we just observed that gap b/w two responses
    setTimeout(function () { console.log("hello"); res.send("requested"); }, 4000)

})

app.listen(3000 || process.env.PORT, () => {
    console.log("listening...");
})

/* -------------------------------------------------------------------------- */
/*                                    Test  1                                  */
/* -------------------------------------------------------------------------- */

/**
 * This Test was done in the following steps
 * 1. One request is made
 * 2. It is fixed that the console log for this request will come atleast after 4 second
 * 3. Meanwhile another request is made before the console log for previous request come
 * 4. Time gap b/w two console logs is observed
 */

/* -------------------------------------------------------------------------- */
/*                                   RESULT                                   */
/* -------------------------------------------------------------------------- */

/**
 * Time delay b/w two console logs is equal to the time delay b/w each request send
 * hense nodejs takes one request and work on it and in this time period it can also
 * process other requests as well
 */

/* -------------------------------------------------------------------------- */
/*                                    Test  2                                  */
/* -------------------------------------------------------------------------- */

/**
 * This Test was done in the following steps
 * 1. One request is made
 * 2. It is fixed that the response for this request will come atleast after 4 second
 * 3. Meanwhile another request is made before the respose for previous request come
 * 4. Time gap b/w two responses is observed
 */

/* -------------------------------------------------------------------------- */
/*                                   RESULT                                   */
/* -------------------------------------------------------------------------- */

/**
 * Time delay b/w two responses is not equal to the time delay b/w each request send
 * instead it is sent after for seconds of first request's response sent
 * hense nodejs takes one request and work on it and in this time period it can not
 * process other requests
 */


/* -------------------------------------------------------------------------- */
/*                                FINAL RESULT                                */
/* -------------------------------------------------------------------------- */

/**
 * The Results are pretty confusing 
 * Console logs are treated diffrently and res.send is treated diffrently
 * You can try these excercises as well
 */