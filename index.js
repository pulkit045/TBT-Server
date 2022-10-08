import express from "express";
const app = express();
const port = 5000 || process.env.PORT;
//const hello = require('./src/index');

import routes from "./src/index"

app.use(express.json());

app.use(express.urlencoded({
    extended:true
}));



app.use("/api/v1", routes);
 

app.listen(port, () => {
  console.log(`PORT IS RUNING YAYAY 🚀 ${port}`);
});
 