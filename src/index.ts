import {Client} from "pg";


const pgClient = new Client(process.env.DATABASE_URI);


async function main() {
    await pgClient.connect();
    // const res = await pgClient.query("SELECT * FROM users");
    const res = await pgClient.query("INSERT INTO users(username,email,password) VALUES('priya','priya@pandamail.com','Priya')");
    console.log(res.rows);
};


main();