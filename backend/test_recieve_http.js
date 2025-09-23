const { body,validationResult } = require("express-validator");

const _ = body("name").custom((value) => {
    console.log("lambda entered");
    console.log(value);
});
//console.log(body("email"));


