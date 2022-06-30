const { Client } = require("pg");
const client = new Client({
  connectionString: process.env.DB_URL,
  ssl: {
    rejectUnauthorized: false,
    ca: process.env.DB_CA
  }
});

async function main(args) {
  let name = args.name || "stranger";
  let greeting = `Hello ${name} !`;
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
