const express = require("express");
var router = express.Router();
const Entrance = require("./schema.js");

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log("Time: ", Date.now());
  next();
});

//所有車站特定日期
router.get("/:trnOpDate", async (req, res) => {
  let { trnOpDate } = req.params;
  try {
    let data = await Entrance.find({ trnOpDate });
    if (!data) {
      throw new Error("no document found");
    }
    //return data;
    res.send(data);
  } catch (e) {
    console.log(e);
    return e;
  }
});

//區間日期內車站的所有資料
router.get("/:trnOpDate1/:trnOpDate2", async (req, res) => {
  let { trnOpDate1, trnOpDate2 } = req.params;
  try {
    let data = await Entrance.find({
      trnOpDate: { $gte: trnOpDate1, $lte: trnOpDate2 },
    });
    res.send(data);
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
