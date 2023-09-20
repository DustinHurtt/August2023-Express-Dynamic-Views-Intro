const express = require("express");
const app = express();

app.use(express.static('public'))

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");


// app.js

app.get("/", (req, res, next) => {

    let data = {
        name: "Ironhacker",
        lastName: "Rocking it!",
        address: {
            street: "Your heart",
            number: 87
          },
        cities: ["Amsterdam", "Barcelona", "Berlin", "Lisbon", "Madrid", "Mexico City", "Miami", "Paris", "Sao Paulo"],
        data: {
            name: "Ironhacker",
        lastName: "Rocking it!",
        address: "Your heart",
        cities: ["Amsterdam", "Barcelona", "Berlin", "Lisbon", "Madrid", "Mexico City", "Miami", "Paris", "Sao Paulo"]
        }
      };
  
    res.render("index.hbs", data);

  });
  

app.get('/about', (req, res, next) => {
    res.render('about.hbs')
})

app.get('/cities', (req, res, next) => {

    let cities = ["Amsterdam", "Barcelona", "Berlin", "Lisbon", "Madrid", "Mexico City", "Miami", "Paris", "Sao Paulo"]

    res.render('cities.hbs', { cities })
 

})


app.listen(3000, () => {
    console.log("Server listening on port 3000")
});