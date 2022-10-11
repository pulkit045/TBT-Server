import db from "../../database.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const signup = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const hashPassword = await bcrypt.hash(password, 10);
    const q = `INSERT INTO Users VALUES(null,'${username}','${email}','${hashPassword}')`;
    db.query(q, (error, result) => {
      if (error) {
        res.status(401).json({ error: error });
      } else {
        res.status(201).send("User Created!");
      }
    });
  } catch (error) {
    res.status(401).json({ error: error });
  }
};

export const login = async (req, res) => {
  const q = "SELECT * FROM Users";
  db.query(q, async (err, results) => {
    if (!err) {
      const user = results.find((user) => user.email === req.body.email);
      if (user == null) {
        return res.status(404).json({ error: "User doesn't exist" });
      }

      try {
        if (!(await bcrypt.compare(req.body.password, user.password))) {
          return res.status(401).json({ error: "Invalid Password" });
        }

        const serial = { userid: user.userid };
        const token = jwt.sign(serial,process.env.ACCESS_TOKEN_SECRET);
        res.status(200).json({accessToken: token});
      } 
      catch (err) {
        return res.statu(422).json({ error: err });
      }
    }
    else{
        res.status(422).json({error: err});
    }
  });
};

export const validUsername = (req,res)=>{
    const q = 'SELECT username FROM Users';
    db.query(q,(err,results)=>{
        if(!err){
            const user = results.find(user => user.username===req.body.username);
            if(user == null){
                res.status(200).send("Valid Username");
            }
            else{
                res.status(405).send("Username already exist");
            }
        }
        else{
            res.status(422).json({error: err});
        }
    })
}

export const validEmail = (req,res)=>{
    const q = 'SELECT email FROM Users';
    db.query(q,(err,results)=>{
        if(!err){
            const user = results.find(user => user.email===req.body.email);
            if(user == null){
                res.status(200).send("Valid Email");
            }
            else{
                res.status(405).send("Email already exist");
            }
        }
        else{
            res.status(422).json({error: err});
        }
    })
}