const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

const Pizza = require("./models/pizzaModal");

app.use(express.json());

const pizzasRoute = require("./routes/pizzasRoute");

app.use("/api/pizzas/", pizzasRoute);

app.get("/", (req, res) => {
  res.send("Server is working");
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
