const database = require("../database/db");

exports.getVisitors = async (req, res) => {
  try {
    const result = await database.pool.query("SELECT * FROM visitors");
    return res.status(200).json(result.rows);
  } catch (error) {
    return res.status(500).json({ msg: "Get visitors Error: " + error });
  }
};
