const mongoose = require("mongoose");
const contriSchema = mongoose.Schema({
  contri_name: {
    required: true,
    type: String,
    trim: true,
  },
  member: [
    {
      upi_id: {
        required: true,
        type: String,
        trim: true,
      },
      amt: {
        required: true,
        type: String,
        trim: true,
      },
    },
  ],
  status: {
    required: true,
    type: String,
    enum: ["settled", "ongoing"], 
    trim: true,
  },
}, { timestamps: true });
const contri_db = mongoose.model("contries", contriSchema);
module.exports = contri_db;
