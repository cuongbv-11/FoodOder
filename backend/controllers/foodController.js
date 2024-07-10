import foodModel from "../models/foodModel.js";
import fs from "fs";

//add food item

const addFood = async (req, res) => {
  let image_filname = `${req.file.filename}`;
  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: image_filname,
  });

  try {
    await food.save();
    res.json({ success: true, message: "Food added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "error" });
  }
};

export { addFood };
