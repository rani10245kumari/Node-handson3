const express = require("express")
const app = express()
const middleware1 = (req, res, next) => {
    console.log("first middleware");
    next()
}

const middleware2 = (req, res, next) => {
    console.log("middleware two")
    next()
}
app.use(middleware1)
app.get("/api/middleware1/home", middleware2, (req, res) => {
    console.log("api is running");
    res.send("Home Page");
})
app.get("/api/middleware1/about", (req, res) => {
    console.log("api is running");
    res.send("About Page");
})
app.get("/api/middleware1/contact", (req, res) => {
    console.log("api is running");
    res.send("Contact Page");
})
app.get("/api/middleware1/details", (req, res) => {
    console.log("api is running");
    res.send("details Page");
})
app.listen(6880, () => {
    try {
        console.log("server is running")
    }
    catch {
        console.log("404 error !!")
    }
})