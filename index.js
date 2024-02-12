const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({
    success: 1,
    message: "API hit successfully",
  });
});

app.listen(4000, () => {
  console.log("Server is running");
});
