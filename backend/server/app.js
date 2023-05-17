const express = require("express")
const app = express();
const cookieParser = require("cookie-parser")
const cors = require('cors')
const bodyParser = require("body-parser")
const fileUpload = require("express-fileUpload")
const dotenv = require("dotenv");
const path = require("path");


// Config
dotenv.config({ path: "server/Config/config.env" })

const errorMiddleware = require("./Middleware/Error")

app.use(express.json())
app.use(cookieParser());
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
// app.use(bodyParser.urlencoded({extended:true}))
app.use(fileUpload())
app.use(cors({
    credentials:true,
    origin:true,
}))


// Route imports
const product = require("./Routes/ProductRoute");
const user = require("./Routes/UserRoute");
const order = require("./Routes/OrderRoute")
const payment = require("./Routes/PaymentRoute")

app.use("/a1/v1",product)
app.use("/a1/v1",user)
app.use("/a1/v1",order)
app.use("/a1/v1",payment)



app.use(express.static(path.join(__dirname, "../../client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../../client/dist/index.html"));
});


// Middleware for Errors
app.use(errorMiddleware )


module.exports = app

