const database = require("../database/db");

exports.getTargetReality = async (req, res) => {
  try {
    const result = await database.pool.query("SELECT * FROM target_reality");
    return res.status(200).json(result.rows);
  } catch (error) {
    return res.status(500).json({ msg: "Get target_reality Error: " + error });
  }
};
