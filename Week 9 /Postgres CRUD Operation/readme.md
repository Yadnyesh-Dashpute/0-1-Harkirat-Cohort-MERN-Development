# Following are the Basic Operation Learned in These Chapter - 
- For Connection To Server (Neon Database) 
import { Client } from 'pg'
const client = new Client({
    connectionString: "postgresql://neondb_owner:vW6r8zqRgepl@ep-shiny-moon-a5a1ihdy.us-east-2.aws.neon.tech/neondb?sslmode=require"
})
