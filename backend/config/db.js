import mongoose from "mongoose";

export const conntectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://greatstack:112211@cluster0.ad4wssg.mongodb.net/food-del"
    )
    .then(() => console.log("DB connectEd"));
};
