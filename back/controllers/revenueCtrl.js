const database = require("../database/db");

exports.getRevenue = async (req, res) => {
  try {
    const result = await database.pool.query("SELECT * FROM revenue");
    return res.status(200).json(result.rows);
  } catch (error) {
    return res.status(500).json({ msg: "Get revenue Error: " + error });
  }
};
