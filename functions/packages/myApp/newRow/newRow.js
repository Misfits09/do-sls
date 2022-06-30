const { Client } = require("pg");
const client = new Client({
  user: "username",
  host: process.env.DB_HOSTNAME,
  database: "myapp",
  password: "p@ssw0rd",
  port: 5432,
});

async function main(args) {
  let name = args.name || "stranger";
  let greeting = `Hello ${name} ! ${process.env.DB_HOSTNAME}`;
  try{
    console.log(greeting);
    console.log("Attempting connection...")
    
    console.log("Done ? ", await client.connect())
    const res = await client.query("INSERT INTO data VALUES (111,?)",[name])
    console.log("Insert response:" , res);
  }catch(e){
    console.log("Error happened", e);
    return {body: "Unhappy !"}
  }
  
  return { body: greeting };
}

module.exports.main = main;
