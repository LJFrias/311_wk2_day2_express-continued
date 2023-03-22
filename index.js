console.log('loading')
const express = require("express");
const app = express();

app.use(express.json())
app.use(express.static('public'))

const port = process.env.PORT || 8080;

const comments = require("./routes/comments");
const contacts = require("./routes/contacts");
const products = require("./routes/products");
const vehicles = require("./routes/vehicles");

app.use(comments)
app.use(contacts)
app.use(products)
app.use(vehicles)






app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
