const express = require("express");
const app = express();
const hbs = require('hbs');
const path = require('path');
const staticPath = path.join(__dirname,"../public")
const templatePath = path.join(__dirname,"../templates/views")
const partialsPath = path.join(__dirname,"../templates/partials")
const port = process.env.PORT || 3400;

app.set("views",templatePath)
app.set('view engine','hbs');
hbs.registerPartials(partialsPath)

app.use(express.static(staticPath))

app.get("/",(req,resp)=>{
    resp.render("index");
})

app.get("/about",(req,resp)=>{
    resp.render("about");

})

app.get("/weather",(req,resp)=>{
    resp.render("weather")
})

app.get("*",(req,resp)=>{
    resp.render("404page")
})

app.listen(port,()=>{
    console.log(`listening at port ${port}`)
});