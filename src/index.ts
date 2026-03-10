import {Client} from "pg";


const pgClient = new Client(process.env.DATABASE_URI);


async function main() {
    await pgClient.connect();
    const res = await pgClient.query("SELECT * FROM users");
    console.log(res.rows);
 
};

main();