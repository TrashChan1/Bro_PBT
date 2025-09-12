const { body,validationResult } = require("express-validator");

const _ = body("email").custom((value) => {
    console.log("lambda entered");
    console.log(value);
});
//console.log(body("email"));


