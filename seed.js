const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://krishna_recipeblog_2025:V9dpRVssvKYkdWWQ@cluster0.dcurqc5.mongodb.net/Recipes")
  .then(() => console.log("DB Connected"))
  .catch(err => console.log(err));

const categorySchema = new mongoose.Schema({
  name: String,
  image: String
});

const Category = mongoose.model("Category", categorySchema);

const categories = [
  { name: "Indian", image: "indian-food.jpg" },
  { name: "Chinese", image: "chinese-food.jpg" },
  { name: "Italian", image: "italian-food.jpg" }
];

const seedDB = async () => {
  await Category.deleteMany({});
  await Category.insertMany(categories);

  console.log("Categories inserted");
  process.exit();
};

seedDB();