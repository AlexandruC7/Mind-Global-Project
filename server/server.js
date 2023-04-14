import dotenv from "dotenv";
dotenv.config();

import express from "express";
import bodyParser from "body-parser";
import bcrypt from "bcrypt";
import passport from "passport";
import initializePassport from "./passport-config.js";
import flash from "express-flash";
import session from "express-session";
import methodOverride from "method-override";


const app = express();

app.use(bodyParser.json());

initializePassport (
  passport, 
  email => users.find(user => user.email === email),
  id => users.find(user => user.id === id)
)




const users = []

app.use(express.urlencoded({extended: false}))
app.use(flash())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false, // We wont resave the session variable if nothing is changed
    saveUninitialized: false
}))
app.use(passport.initialize()) 
app.use(passport.session())
app.use(methodOverride("_method"))


// Configuring the register post functionality
app.post("/login", checkNotAuthenticated, passport.authenticate("local", {
    successRedirect: "/home-page",
    failureRedirect: "/login",
    failureFlash: true
}))



app.post("/register", checkNotAuthenticated, async (req, res)=>
{
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        users.push({
          id: Date.now().toString(), 
          name: req.body.name,
          email: req.body.email,
          password: hashedPassword,
        })
        console.log(users);
        res.redirect("/login")
        
    } catch(e) {
        console.log(e);
        res.redirect("/register")
    }
})

//Routes
app.get("/home-page", checkAuthenticated, (req, res) => {
  let name = "Sofia"; // name
  res.render('index.ejs', { name: req.user.name });
});

app.get("/login", checkNotAuthenticated, (req, res) => {
  let messages = "text"; // message
  res.render('login.ejs', { messages: messages });
});

app.get("/register", checkNotAuthenticated, (req, res) => {
  let messages = "text"; // message
  res.render('register.ejs', { messages: messages });
});
//End

app.delete("/logout", (req, res) => {
  req.logout(req.user, err => {
      if (err) return next(err)
      res.redirect("/home-page")
  })
})


function checkAuthenticated(req, res, next){
  if(req.isAuthenticated()){
      return next()
  }
  res.redirect("/login")
}

function checkNotAuthenticated(req, res, next){
  if(req.isAuthenticated()){
      return res.redirect("/home-page")
  }
  next()
}




app.listen(4001);