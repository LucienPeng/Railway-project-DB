const express = require("express");
var router = express.Router();
const Entrance = require("./schema.js");

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log("Time: ", Date.now());
  next();
});

//區間日期內西部幹線-北的所有資料
router.get("/west-north/:trnOpDate1/:trnOpDate2", async (req, res) => {
  let { trnOpDate1, trnOpDate2 } = req.params;
  try {
    let data = await Entrance.find({
      staCode: { $gte: 900, $lte: 1250 },
      trnOpDate: { $gte: trnOpDate1, $lte: trnOpDate2 },
    });

    let obj = {};
    let gateInTotal = 0;
    let gateOutTotal = 0;

    data.forEach((item, index, arr) => {
      gateInTotal += item.gateInComingCnt;
      gateOutTotal += item.gateOutGoingCnt;
      obj.trnOpDate = "西部幹線-北";
      obj.gateInTotal = gateInTotal;
      obj.gateOutTotal = gateOutTotal;
    });

    res.status(200).send(obj);
  } catch (e) {
    console.log(e);
  }
});

//區間日期內西部幹線-海的所有資料
router.get("/west-ocean/:trnOpDate1/:trnOpDate2", async (req, res) => {
  let { trnOpDate1, trnOpDate2 } = req.params;
  try {
    let data = await Entrance.find({
      staCode: { $gte: 2110, $lte: 2260 },
      trnOpDate: { $gte: trnOpDate1, $lte: trnOpDate2 },
    });
    let obj = {};
    let gateInTotal = 0;
    let gateOutTotal = 0;

    data.forEach((item, index, arr) => {
      gateInTotal += item.gateInComingCnt;
      gateOutTotal += item.gateOutGoingCnt;
      obj.trnOpDate = "西部幹線-海";
      obj.gateInTotal = gateInTotal;
      obj.gateOutTotal = gateOutTotal;
    });
    res.status(200).send(obj);
  } catch (e) {
    console.log(e);
  }
});

//區間日期內西部幹線-山的所有資料
router.get("/west-mount/:trnOpDate1/:trnOpDate2", async (req, res) => {
  let { trnOpDate1, trnOpDate2 } = req.params;
  try {
    let data = await Entrance.find({
      staCode: { $gte: 3140, $lte: 3350 },
      trnOpDate: { $gte: trnOpDate1, $lte: trnOpDate2 },
    });
    let obj = {};
    let gateInTotal = 0;
    let gateOutTotal = 0;

    data.forEach((item, index, arr) => {
      gateInTotal += item.gateInComingCnt;
      gateOutTotal += item.gateOutGoingCnt;
      obj.trnOpDate = "西部幹線-山";
      obj.gateInTotal = gateInTotal;
      obj.gateOutTotal = gateOutTotal;
    });
    res.status(200).send(obj);
  } catch (e) {
    console.log(e);
  }
});

//區間日期內西部幹線-彰雲嘉的所有資料
router.get("/west-cyc/:trnOpDate1/:trnOpDate2", async (req, res) => {
  let { trnOpDate1, trnOpDate2 } = req.params;
  try {
    let data = await Entrance.find({
      staCode: { $gte: 3360, $lte: 4110 },
      trnOpDate: { $gte: trnOpDate1, $lte: trnOpDate2 },
    });
    let obj = {};
    let gateInTotal = 0;
    let gateOutTotal = 0;

    data.forEach((item, index, arr) => {
      gateInTotal += item.gateInComingCnt;
      gateOutTotal += item.gateOutGoingCnt;
      obj.trnOpDate = "西部幹線-彰雲嘉";
      obj.gateInTotal = gateInTotal;
      obj.gateOutTotal = gateOutTotal;
    });
    res.status(200).send(obj);
  } catch (e) {
    console.log(e);
  }
});

//區間日期內西部幹線-台南高屏的所有資料
router.get("/west-tk/:trnOpDate1/:trnOpDate2", async (req, res) => {
  let { trnOpDate1, trnOpDate2 } = req.params;
  try {
    let data = await Entrance.find({
      staCode: { $gte: 4110, $lte: 5110 },
      trnOpDate: { $gte: trnOpDate1, $lte: trnOpDate2 },
    });
    let obj = {};
    let gateInTotal = 0;
    let gateOutTotal = 0;

    data.forEach((item, index, arr) => {
      gateInTotal += item.gateInComingCnt;
      gateOutTotal += item.gateOutGoingCnt;
      obj.trnOpDate = "西部幹線-台南高屏";
      obj.gateInTotal = gateInTotal;
      obj.gateOutTotal = gateOutTotal;
    });
    res.status(200).send(obj);
  } catch (e) {
    console.log(e);
  }
});

//區間日期內南迴線的所有資料
router.get("/south/:trnOpDate1/:trnOpDate2", async (req, res) => {
  let { trnOpDate1, trnOpDate2 } = req.params;
  try {
    let data = await Entrance.find({
      staCode: { $gte: 5120, $lte: 5240 },
      trnOpDate: { $gte: trnOpDate1, $lte: trnOpDate2 },
    });
    let obj = {};
    let gateInTotal = 0;
    let gateOutTotal = 0;

    data.forEach((item, index, arr) => {
      gateInTotal += item.gateInComingCnt;
      gateOutTotal += item.gateOutGoingCnt;
      obj.trnOpDate = "南迴線";
      obj.gateInTotal = gateInTotal;
      obj.gateOutTotal = gateOutTotal;
    });
    res.status(200).send(obj);
  } catch (e) {
    console.log(e);
  }
});

//區間日期內東部幹線（台東）的所有資料
router.get("/east-taitung/:trnOpDate1/:trnOpDate2", async (req, res) => {
  let { trnOpDate1, trnOpDate2 } = req.params;
  try {
    let data = await Entrance.find({
      staCode: { $gte: 6000, $lte: 6070 },
      trnOpDate: { $gte: trnOpDate1, $lte: trnOpDate2 },
    });
    let obj = {};
    let gateInTotal = 0;
    let gateOutTotal = 0;

    data.forEach((item, index, arr) => {
      gateInTotal += item.gateInComingCnt;
      gateOutTotal += item.gateOutGoingCnt;
      obj.trnOpDate = "東部幹線（台東）";
      obj.gateInTotal = gateInTotal;
      obj.gateOutTotal = gateOutTotal;
    });
    res.status(200).send(obj);
  } catch (e) {
    console.log(e);
  }
});

//區間日期內東部幹線（花連）的所有資料
router.get("/east-hualien/:trnOpDate1/:trnOpDate2", async (req, res) => {
  let { trnOpDate1, trnOpDate2 } = req.params;
  try {
    let data = await Entrance.find({
      staCode: { $gte: 6080, $lte: 7080 },
      trnOpDate: { $gte: trnOpDate1, $lte: trnOpDate2 },
    });
    let obj = {};
    let gateInTotal = 0;
    let gateOutTotal = 0;

    data.forEach((item, index, arr) => {
      gateInTotal += item.gateInComingCnt;
      gateOutTotal += item.gateOutGoingCnt;
      obj.trnOpDate = "東部幹線（花蓮）";
      obj.gateInTotal = gateInTotal;
      obj.gateOutTotal = gateOutTotal;
    });
    res.status(200).send(obj);
  } catch (e) {
    console.log(e);
  }
});

//區間日期內東部幹線(宜蘭)的所有資料
router.get("/east-yilan/:trnOpDate1/:trnOpDate2", async (req, res) => {
  let { trnOpDate1, trnOpDate2 } = req.params;
  try {
    let data = await Entrance.find({
      staCode: { $gte: 7090, $lte: 7360 },
      trnOpDate: { $gte: trnOpDate1, $lte: trnOpDate2 },
    });
    let obj = {};
    let gateInTotal = 0;
    let gateOutTotal = 0;

    data.forEach((item, index, arr) => {
      gateInTotal += item.gateInComingCnt;
      gateOutTotal += item.gateOutGoingCnt;
      obj.trnOpDate = "東部幹線（宜蘭）";
      obj.gateInTotal = gateInTotal;
      obj.gateOutTotal = gateOutTotal;
    });
    res.status(200).send(obj);
  } catch (e) {
    console.log(e);
  }
});

//區間日期內其他幹線的所有資料
router.get("/other/:trnOpDate1/:trnOpDate2", async (req, res) => {
  let { trnOpDate1, trnOpDate2 } = req.params;
  try {
    let data = await Entrance.find({
      staCode: { $gte: 7361, $lte: 7390 },
      trnOpDate: { $gte: trnOpDate1, $lte: trnOpDate2 },
    });
    let obj = {};
    let gateInTotal = 0;
    let gateOutTotal = 0;

    data.forEach((item, index, arr) => {
      gateInTotal += item.gateInComingCnt;
      gateOutTotal += item.gateOutGoingCnt;
      obj.trnOpDate = "其他幹線";
      obj.gateInTotal = gateInTotal;
      obj.gateOutTotal = gateOutTotal;
    });
    res.status(200).send(obj);
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
