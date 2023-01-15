const layout = require("../layout");

module.exports = ({ req }) => {
  return layout({
    content: `
    <div>
        Hello ${req.session.userId}
          <form method="POST">
              <input name="email" placeholder="email" />
              <input name="password" placeholder="password" />
              <input name="passwordConfirmation" placeholder="confirm password" />
              <button>Sign Up</button>
          </form>
      </div> 
    `,
  });
};
