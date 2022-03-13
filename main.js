const data = require("./models/data.js");
const Entrance = require("./models/schema.js");

const express = require("express");
const mongoose = require("mongoose");

const app = express();

const username = encodeURIComponent("lucien");
const password = encodeURIComponent("/nxfl7zp");
const database = encodeURIComponent("TW_Railway");
const uri = `mongodb+srv://${username}:${password}@lucien-db.vk4rb.mongodb.net/${database}?retryWrites=true&w=majority`;
//const uri = process.env.MONGODB_URI;

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB.");
  })
  .catch((e) => {
    console.log("Failed to connect to MongoDB");
    console.log(e);
  });

// CORS config here
app.all("/*", function (req, res, next) {
  // CORS headers
  res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  // Set custom headers for CORS
  res.header(
    "Access-Control-Allow-Headers",
    "Content-type,Accept,X-Access-Token,X-Key"
  );
  if (req.method == "OPTIONS") {
    res.status(200).end();
  } else {
    next();
  }
});

app.get("/", (req, res) => {
  res.send("Welcome, 資料庫已連接！");
});

//Find All Data
app.get("/all", async (req, res) => {
  try {
    let data = await Entrance.find({});
    await res.status(200).send(data);
  } catch (e) {
    console.log(e);
  }
});

app.get("/stationName/:staName", async (req, res) => {
  let { staName } = req.params;
  try {
    let data = await Entrance.find({ staName });
    res.status(200).send(data);
  } catch (e) {
    console.log(e);
  }
});

//車站選單
app.get("/allSta", async (req, res) => {
  try {
    let data = await Entrance.find({}, { staName: 1, _id: 0 }).limit(239);
    res.status(200).send(data);
  } catch (e) {
    console.log(e);
  }
});

//日期選單
app.get("/allDate", async (req, res) => {
  try {
    let data = await Entrance.find({}, { trnOpDate: 1, _id: 0 });

    const set = new Set();
    data = data.filter((item) =>
      !set.has(item.trnOpDate) ? set.add(item.trnOpDate) : false
    );

    res.status(200).send(data);
  } catch (e) {
    console.log(e);
  }
});

//所有車站特定日期
app.get("/date/:trnOpDate", async (req, res) => {
  let { trnOpDate } = req.params;
  try {
    let data = await Entrance.find({ trnOpDate });
    res.send(data);
  } catch (e) {
    console.log(e);
  }
});

//特定車站的特定日期
app.get("/:staName/:trnOpDate", async (req, res) => {
  let { staName, trnOpDate } = req.params;
  try {
    let data = await Entrance.find({ trnOpDate: trnOpDate, staName: staName });
    res.send(data);
  } catch (e) {
    console.log(e);
  }
});

//特定車站的區間日期
app.get("/:staName/:trnOpDate1/:trnOpDate2", async (req, res) => {
  let { trnOpDate1, trnOpDate2, staName } = req.params;
  try {
    let data = await Entrance.find({
      trnOpDate: { $gte: trnOpDate1, $lte: trnOpDate2 },
      staName: staName,
    });
    res.send(data);
  } catch (e) {
    console.log(e);
  }
});

//特定車站的區間日期
app.get("/:staName/:staCode/:trnOpDate1/:trnOpDate2", async (req, res) => {
  let { trnOpDate1, staCode, trnOpDate2, staName } = req.params;
  try {
    let data = await Entrance.find({
      trnOpDate: { $gte: trnOpDate1, $lte: trnOpDate2 },
    });
    res.send(data);
  } catch (e) {
    console.log(e);
  }
});

// //特定車站的區間日期
// app.get("/date", async (req, res) => {
//   let { trnOpDate } = req.params;
//   try {
//     let data = await Entrance.find({
//       //staName: staName,
//       trnOpDate: { $gte: 20220101, $lte: 20220104 },
//     });
//     res.send(data);
//   } catch (e) {
//     console.log(e);
//   }
// });

// app.post("/entrance", async (req, res) => {
//   for (let i = 0; i < data.length; i++) {
//     let newEntrance = new Entrance({
//       trnOpDate: data[i].trnOpDate,
//       staCode: data[i].staCode,
//       gateInComingCnt: data[i].gateInComingCnt,
//       gateOutGoingCnt: data[i].gateOutGoingCnt,
//       staName: data[i].staName,
//     });
//     await newEntrance
//       .save()
//       .then(() => {
//         console.log(`Data${i} has been well saved`);
//       })
//       .catch((e) => {
//         console.log(`Data${i} is not accepted.`);
//         console.log(e);
//       });
//   }
// });

app.listen(process.env.PORT || 3000, () =>
  console.log("Server is running...QUE DIEU SOIT AVEC NOUS!!!!AMEN")
);
