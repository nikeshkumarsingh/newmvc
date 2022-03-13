const app = require("./index");

const connect = require("./config/db");

app.listen(4000, async () => {
  try {
    await connect();
  } catch (err) {
    console.log(err);
  }

  console.log("listening on port 4000");
});