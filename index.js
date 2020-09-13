const express = require("express");
const app = express();

app.get("/check", (req,res) => {
    res.send("helooooooooooooo")
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port`);
});