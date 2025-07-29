const express = require("express");
const cors = require("cors");

const bfhlRoutes = require("./routes/bfhlRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/bfhl", bfhlRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
