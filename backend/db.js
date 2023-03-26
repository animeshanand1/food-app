const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://animeshanand9:I0g4W9j7W4Zlenlk@cluster0.p4ofbvs.mongodb.net/gofood?retryWrites=true&w=majority";

const mongoDB = async () => {
  await mongoose.connect(mongoURI, async (err, result) => {
    if (err) console.log("error", err);
    else {
      console.log("connected ready for use");
      const fetched_data = await mongoose.connection.db.collection("food_items");
      fetched_data.find({}).toArray(async function (err, data) {
        const food_category = await mongoose.connection.db.collection(
          "food_category"
        );
        food_category.find({}).toArray(async function (err, catData) {
          if (err) {
            console.log(err);
          } else {
            global.food_category = catData;
            global.food_items = data;
            console.log(global.food_category);
          }
        });
      });
    }
  });
};
module.exports = mongoDB;
