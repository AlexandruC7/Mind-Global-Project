import express from "express";
import bodyParser from "body-parser";
import bcrypt from "bcrypt";

const app = express();

app.use(bodyParser.json());


const users = []

app.use(express.urlencoded({extended:false}))

app.post("/register", async (req, res)=>
{
    try {
        const hashedPassword = await bcrypt.hash(req.body.password)
        users.push({
          id:Date.now().toString,
          name: req.body.name,
          email: req.body.email,
          password: hashedPassword,
        })
    } catch {

    }
})

//Routes
app.get("/", (req, res) => {
  let name = "Sofia"; // name
  res.render('index.ejs', { name: name });
});

app.get("/login", (req, res) => {
  let messages = "text"; // message
  res.render('login.ejs', { messages: messages });
});

app.get("/register", (req, res) => {
  let messages = "text"; // message
  res.render('register.ejs', { messages: messages });
});
//End

app.listen(4001);