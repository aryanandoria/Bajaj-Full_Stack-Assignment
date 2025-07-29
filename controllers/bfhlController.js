const { processData } = require("../services/bfhlService");

const handleBFHL = (req, res) => {
  try {
    const { data } = req.body;

    if (!Array.isArray(data)) {
      return res.status(400).json({
        is_success: false,
        message: "Invalid input: 'data' must be an array.",
      });
    }

    const result = processData(data);

    res.status(200).json({
      is_success: true,
      user_id: "aryan_andoria",
      email: "aryan1376.be22@chitkara.edu.in",
      roll_number: "2210991376",
      ...result,
    });
  } catch (err) {
    res.status(500).json({ is_success: false, message: err.message });
  }
};

module.exports = { handleBFHL };
