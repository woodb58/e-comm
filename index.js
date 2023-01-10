const express = require("express");
const bodyParser = require("body-parser");
const usersRepo = require("./repositories/users");
const PORT = 3000;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

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

app.post("/", async (req, res) => {
  const { email, password, passwordConfirmation } = req.body;

  const existingUser = await usersRepo.getOneBy({ email });
  if (existingUser) {
    return res.send("Email in use");
  }

  if (password !== passwordConfirmation) {
    return res.send('Passwords must match')
  }

  res.send("account created");
});

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
  console.log(`access at http://localhost:${PORT}`);
});