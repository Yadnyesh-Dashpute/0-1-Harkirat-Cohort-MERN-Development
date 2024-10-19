# Following are the Basic Operation Learned in These Chapter - 
- Connection To Server (Neon Database)
```
import { Client } from 'pg'
const client = new Client({
    connectionString: "postgresql://neondb_owner:vW6r8zqRgepl@ep-shiny-moon-a5a1ihdy.us-east-2.aws.neon.tech/neondb?sslmode=require"
})
```
- Creating Table In Database:
```
async function createUsersTable() {
    await Client.connect()
    const result = await Client.query(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `)
    console.log(result)
}
```
- Inserting Data in Database Efficiently:
```
async function insertUser(username:string, password: string, email:string){
    await client.connect()


    const result = await client.query(`
        INSERT INTO users (username, password, email)
        VALUES ($1, $2, $3)`
    ,[username,password,email])

console.log(result)
    }

insertUser('Shivam','ABC','ABC@gmail.com');
```
