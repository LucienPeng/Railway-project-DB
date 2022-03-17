const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  swaggerDefinition: {
    // 這邊會是你的api文件網頁描述
    info: {
      title: "TW-RAIWAY DB API",
      version: "1.0.0",
      description: "Generate TW-RAIWAY DB API API document with swagger",
    },
  },
  // 這邊會是你想要產生的api文件檔案，我是直接讓swagger去列出所有controllers
  apis: ["./modules/*.js"],
};

const specs = swaggerJsdoc(options);

module.exports = specs;
