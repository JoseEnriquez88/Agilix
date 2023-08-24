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
const {
  CLIENT_URL,
  CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
} = process.env;

server.use(morgan("dev"));
server.use(express.json());
server.use(bodyParser.json({ limit: "50mb" }));

server.use(
  cors({
    origin: `${CLIENT_URL}`,
    methods: "GET, POST, OPTIONS, PUT, DELETE",
    credentials: true,
    allowedHeaders: "Origin, X-Requested-With, Content-Type, Accept",
  })
);
server.set("trust proxy", 1);

server.use(
  cookieSession({
    name: "session",
    keys: ["agilix"],
    maxAge: 24 * 60 * 60 * 100,
    secure: true,
  })
);
server.use(passport.initialize());
server.use(passport.session());

const upload = multer();

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});

server.use(upload.any());

server.use("/", mainRouter);
module.exports = server;
