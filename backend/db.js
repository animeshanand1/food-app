const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://animeshanand9:I0g4W9j7W4Zlenlk@cluster0.p4ofbvs.mongodb.net/gofood?retryWrites=true&w=majority";

const mongoDB = async () => {
  await mongoose.connect(mongoURI, async (err, result) => {
    if (err) console.log("error", err);
    else {
      console.log("connected ready for use");
      const fetched_data = await mongoose.connection.db.collection("sample");
      fetched_data.find({}).toArray(function (err, data) {
        if (err) {
          console.log(err);
        } else {
          console.log(data);
        }
      });
    }
  });
};
module.exports = mongoDB;
