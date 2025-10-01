import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

const recipeJSON = '[{"id": "0001","type": "taco","name": "Chicken Taco","price": 2.99,"ingredients": {"protein": {"name": "Chicken","preparation": "Grilled"},"salsa": {"name": "Tomato Salsa","spiciness": "Medium"},"toppings": [{"name": "Lettuce","quantity": "1 cup","ingredients": ["Iceberg Lettuce"]},{"name": "Cheese","quantity": "1/2 cup","ingredients": ["Cheddar Cheese", "Monterey Jack Cheese"]},{"name": "Guacamole","quantity": "2 tablespoons","ingredients": ["Avocado", "Lime Juice", "Salt", "Onion", "Cilantro"]},{"name": "Sour Cream","quantity": "2 tablespoons","ingredients": ["Sour Cream"]}]}},{"id": "0002","type": "taco","name": "Beef Taco","price": 3.49,"ingredients": {"protein": {"name": "Beef","preparation": "Seasoned and Grilled"},"salsa": {"name": "Salsa Verde","spiciness": "Hot"},"toppings": [{"name": "Onions","quantity": "1/4 cup","ingredients": ["White Onion", "Red Onion"]},{"name": "Cilantro","quantity": "2 tablespoons","ingredients": ["Fresh Cilantro"]},{"name": "Queso Fresco","quantity": "1/4 cup","ingredients": ["Queso Fresco"]}]}},{"id": "0003","type": "taco","name": "Fish Taco","price": 4.99,"ingredients": {"protein": {"name": "Fish","preparation": "Battered and Fried"},"salsa": {"name": "Chipotle Mayo","spiciness": "Mild"},"toppings": [{"name": "Cabbage Slaw","quantity": "1 cup","ingredients": ["Shredded Cabbage","Carrot","Mayonnaise","Lime Juice","Salt"]},{"name": "Pico de Gallo","quantity": "1/2 cup","ingredients": ["Tomato", "Onion", "Cilantro", "Lime Juice", "Salt"]},{"name": "Lime Crema","quantity": "2 tablespoons","ingredients": ["Sour Cream", "Lime Juice", "Salt"]}]}}]';

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const recipes = JSON.parse(recipeJSON);

app.get("/", (req, res) => {
  res.render("index.ejs", { recipe: null });
});

app.post("/recipe", (req, res) => {
  const recipeId = req.body.recipeId;
  const recipe = recipes.find(r => r.id === recipeId);
  res.render("index.ejs", { recipe });
});


if (process.env.NODE_ENV !== 'production') {
    app.listen(port, () => {
        console.log(`Server running on port: ${port}`);
    });
}


export default app;