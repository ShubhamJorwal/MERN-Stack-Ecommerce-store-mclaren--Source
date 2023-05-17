
const mongoose = require("mongoose");


const connectDatabase = () => {
  const mongoURI = process.env.mongoURI || "mongodb+srv://Shubham_sj:shubhamjorwal123@mclarenecom.qtypoch.mongodb.net/"
  mongoose
    .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    });
};

module.exports = connectDatabase;
