import express from "express";
const app = express();
const port = process.env.PORT || 5000;
import routes from "./src/index.js";
import db from "./database.js";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1", routes);

app.get("/", (req,res)=>{
  res.send("Welcome to TBT API!");
})

app.get("/testHerokuRoute",async(req,res)=>{
  try{
    const results = await db.promise().query('select * from heroku');
    res.status(200).send(results[0]);
  }
  catch{
    res.send("OOPS lets check!");
  }
  
});

app.get("/testHerokuRoute2", (req,res)=>{
  res.json("{username: Pulkit, age: 20}");
})

app.listen(port, () => {
  console.log(`PORT IS RUNING YAYAY 🚀 ${port}`);
});
