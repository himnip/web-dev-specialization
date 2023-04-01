const express = require("express");
const { Pool } = require("pg");

const app = express();
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded());

(async () => {
    const connectionString = "postgresql://himni:lUzbRwZfdcXxeQxXCbV7bQ@coping-stork-6519.6wr.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full";
    const pool = new Pool({
      connectionString,
      application_name: "$ docs_simplecrud_node-postgres",
    }); 
    const client = await pool.connect();
    const insertStatement =
    "INSERT INTO reviews (user_id, rating, review) VALUES ($1, $2, $3)"; 
    const user_id = 'you6';
    const rating = 3;
    const review = 'worst service ever';
    // await client.query(insertStatement, [user_id, rating, review]);
    app.get('/api/reviews', async (req, res) => {
        const { rows } = await client.query("SELECT * FROM reviews") 
        console.log(req)
        res.json(rows)
    })
    app.post('/api/reviews', async (req, res) => {
        console.log(req.body)
        console.log(req)
        res.end()
    })
    
    app.listen(65436)
})();

