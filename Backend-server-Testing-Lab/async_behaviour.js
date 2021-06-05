const express = require("express");

const app = express();

app.get("/", (req, res)=>{
    //we have not addded any time related functions here, we just observed that gap b/w two responses
    setTimeout(function(){console.log("hello"); res.send("requested");}, 4000)
    
})

app.listen(3000 || process.env.PORT, ()=>
{
    console.log("listening...");
})


/* -------------------------------------------------------------------------- */
/*                                    Test                                    */
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
 * Time delay b/w two responses is equal to the time delay b/w each request send 
 * hense nodejs takes one request and work on it and in this time period it can also 
 * process other requests as well
 */