const express = require("express");
const app = express();
const cors = require("cors");
const corsOptions = {
  origin: ["http://localhost:5173"],
};

const port = 8080;

app.use(cors(corsOptions));

app.get("/api", (req, res) => {
  res.json({
    fruits: [
      "apple",
      "banana",
      "orange",
      "mango",
      "pineapple",
      "watermelon",
      "guava",
    ],
  });
});

app.listen(port, () => {
  console.log(`Server staring on port ${port}`);
});
