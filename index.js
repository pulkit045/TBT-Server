import express from "express";
const app = express();
const port = process.env.PORT || 3000;
import routes from "./src/index.js";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1", routes);

app.listen(port, () => {
  console.log(`PORT IS RUNING YAYAY 🚀 ${port}`);
});


/*
app.get("/", (req, res) => {
  res.send("Welcome to TBT API!");
});

app.get("/testHerokuRoute", async (req, res) => {
  try {
    const results = await db.promise().query("select * from heroku");
    res.status(200).send(results[0]);
  } catch {
    res.send("OOPS lets check!");
  }
});
*/
