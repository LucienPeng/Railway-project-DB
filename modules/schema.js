const mongoose = require("mongoose");

const entranceSchema = new mongoose.Schema({
  trnOpDate: {
    type: Number,
    required: true,
  },
  staCode: {
    type: Number,
    required: true,
  },
  gateInComingCnt: {
    type: Number,
    required: true,
  },
  gateOutGoingCnt: {
    type: Number,
    required: true,
  },
  staName: {
    type: String,
    required: true,
  },
});

const Entrance = mongoose.model("station-in-out", entranceSchema);

module.exports = Entrance;
