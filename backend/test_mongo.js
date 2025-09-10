/* Sample code to show how to use nodeJS to perform CRUD on a mongoDB database
 * Note that many more users are inserted than deleted by this file;
 * Repeatedly running it will result in an expanding list of duplicates of Users.
 */
const { MongoClient } = require("mongodb");

async function updateUser() {
    const uri = "mongodb://127.0.0.1:27017/";
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const db = client.db("test3");
        // update
// Set the age of all users named Alice to 69
        const update_result = await db.command({ 
            update: "Users",
            updates: [
                {
                    q: { name: "Alice" },
                    u: { $set: {age : 69}},
                    multi: true
                }
            ]
        });
        // Create
        const newUsers = [
            {name: "Harry", age: 47, email: "harry.baggage@yahoo.com"},
            {name: "Vanessa", age: 32, email: "vbeauooty@thot.com"},
            {name: "Charlotte", age: 22, email: "cqt.witch_hunt@gmail.com"}
        ];
        const create_result = await db.collection("Users").insertMany(newUsers);
        console.log(`${create_result.insertedCount} documents were inserted.`);
    // Read
        const read_result = await db.collection("Users").findOne({
            name: "Harry"
        });
        console.log(`Harry's age is: ${read_result.age}`);
        // delete
        const deleteQuery = { name: "Vanessa" };
        const sortAgeDescending = { 
            sort: {age: -1 }
        };
        const delete_result = await db.collection("Users").deleteOne(deleteQuery);
        console.log(`Vanessa deletion result:`);
        console.log(delete_result);
    }
    finally {
        await client.close();
    }
}

updateUser().catch(console.dir);
