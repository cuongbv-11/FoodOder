import mongoose from "mongoose";

export const conntectDB = async () => {
  await mongoose
    .connect("mongodb://localhost:27017")
    .then(() => console.log("DB connectEd"));
};
