const express = require("express");
const bodyParser = require('body-parser')
const PORT = 3000;

const app = express();

app.use(bodyParser.urlencoded({ extended: true })) 

app.get("/", (req, res) => {
  res.send(`
    <div>
        <form method="POST">
            <input name="email" placeholder="email" />
            <input name="password" placeholder="password" />
            <input name="passwordConfirmation" placeholder="confirm password" />
            <button>Sign Up</button>
        </form>
    </div>
   `);
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.send("account created");
});

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
  console.log(`access at http://localhost:${PORT}`);
});
