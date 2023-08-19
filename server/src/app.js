const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const passport = require("passport");
const cookieSession = require("cookie-session");
const passportSetup = require("./passport");
const server = express();
const mainRouter = require("./routes/mainRouter");
require("dotenv").config();
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { CLIENT_URL, CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } = process.env;

server.use(morgan("dev"));
server.use(express.json());

server.use(bodyParser.json({ limit: "50mb" }));
server.use(
  cookieSession({
    name: "session",
    keys: ["agilix"],
    maxAge: 24 * 60 * 60 * 100,
  })
);
server.use(passport.initialize());
server.use(passport.session());

server.use(
  cors({
    origin: `${CLIENT_URL}`,
    methods: "GET, POST, OPTIONS, PUT, DELETE",
    credentials: true,
    allowedHeaders: "Origin, X-Requested-With, Content-Type, Accept",
  })
);

const upload = multer({
  dest: "./uploads",
});

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET
})

server.use(upload.single("img"));

// server.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "http://localhost:5173");
//   res.header("Access-Control-Allow-Credentials", "true");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
//   next();
// });

server.use("/", mainRouter);
module.exports = server;