const PORT = 8000;

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World Node Test");
});

app.use(require("./routes/salesMapRoute"));
app.use(require("./routes/visitorsRoute"));
app.use(require("./routes/customersRoute"));
app.use(require("./routes/revenueRoute"));
app.use(require("./routes/targetRealityRoute"));
app.use(require("./routes/topProductsRoute"));
app.use(require("./routes/volumeServicesRoute"));

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
