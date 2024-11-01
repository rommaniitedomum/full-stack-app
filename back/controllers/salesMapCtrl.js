const database = require("../database/db");

exports.getSalesMap = async (req, res) => {
  try {
    const result = await database.pool.query("SELECT * FROM sales_map");
    return res.status(200).json(result.rows);
  } catch (error) {
    return res.status(500).json({ msg: "Get sales_map Error: " + error });
  }
};
