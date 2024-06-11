const express = require("express");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();
const app = express();
const mongoose = require("mongoose");
const session = require("express-session");
const https = require("https")
const multer =require("multer")
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');
const fs=require('fs').promises;
const AdmZip = require('adm-zip')
const GoogleStrategy = require('passport-google-oauth20').Strategy;


// Read from .env if not available then defaults to 4000
const port = process.env.PORT || 2000;
const secretKey = process.env.TOKEN_KEY;

//Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors());

//Cors Polycy 
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*', 'http://localhost:3000');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Credentials', 'true'); // Set the header to 'true' to allow credentials
  next();
});

// connect to the db
const connectToDatabase = require("../pmsbackend/config/connectDb");
const dbConStatus = connectToDatabase();


//! Common Routes
const commonRoutes = require("../pmsbackend/routes/Common/commonRoutes");
app.use("/common", commonRoutes);


//! Admin Routes
const adminRoutes = require("../pmsbackend/routes/Admin/adminRoutes");
app.use("/admin", adminRoutes);


//! otp
const otpController = require("../pmsbackend/controllers/middlewares/otpController");
app.use("/", otpController);


//! resetpassword
const resetpassword = require("../pmsbackend/controllers/middlewares/resetPasswordController");
app.use("/", resetpassword);


//! copy-paste folder
const copyPasteFolder = require("../pmsbackend/controllers/middlewares/copypastefolderController");
app.use("/", copyPasteFolder);


//! Workfolw Routes
const workflowRoutes = require("../pmsbackend/routes/Workflow/pipelineRoute");
app.use("/workflow", workflowRoutes);


//! EmailTemplate Routes
const templateMailSend = require("../pmsbackend/controllers/middlewares/templateMailSend");
app.use("/", templateMailSend);

//! EmailTemplate Routes
const usersavedemail = require("../pmsbackend/controllers/middlewares/usersavedemail");
app.use("/", usersavedemail);

//!  Routes
const passwordupdateemail = require("../pmsbackend/controllers/middlewares/passwordupdatemail")
app.use("/", passwordupdateemail);

const clientsignupOTPmail = require("../pmsbackend/controllers/middlewares/clientsignupOTPmail");
app.use("/", clientsignupOTPmail);

//! EmailTemplate Routes
const clientsavedemail = require("../pmsbackend/controllers/middlewares/clientsavedEmail");
app.use("/", clientsavedemail);


//! EmailTemplate Routes
const teammembersavedemail = require("../pmsbackend/controllers/middlewares/teamMembersendInviteEmail");
app.use("/", teammembersavedemail);

//! sendBulkEmails Routes
const sendBulkEmails = require("../pmsbackend/controllers/middlewares/sendBulkEmails");
app.use("/", sendBulkEmails);

//! ChatEmailTemplate Routes
const templateChatEMailSend = require("../pmsbackend/controllers/middlewares/templateChatEmailsend");
app.use("/", templateChatEMailSend);

app.use(
  session({
    secret: 'mnbvcxzlkjhgfdsapoiuytrewq', // A unique secret key
    resave: false,
    saveUninitialized: false,
  })
);

app.use(bodyParser.json()); // Parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// app.use(session({ secret: 'secret', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: 'http://localhost:5000/auth/google/callback', // Ensure this matches Google Cloud Platform settings
    },
    (accessToken, refreshToken, profile, done) => {
      done(null, { profile, accessToken, refreshToken });
    }
  )
);



//!Email sync Routes
const emailsync = require("../pmsbackend/controllers/middlewares/emailsync");
app.use("/", emailsync);

//folder template 
app.get("/allFolders/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log(req.data);
    const uploadsPath = path.join(__dirname,`./uploads/FolderTemplates/${id}`);

    // Function to recursively get all files and folders in a directory
    const getAllItems = async (dir) => {
      const items = await fs.readdir(dir);
      const itemsPromises = items.map(async (item) => {
        const itemPath = path.join(dir, item);
        const stats = await fs.stat(itemPath);
        if (stats.isDirectory()) {
          const subItems = await getAllItems(itemPath);
          return { folder: item, contents: subItems };
        } else {
          return { file: item };
        }
      });
      return Promise.all(itemsPromises);
    };

    // Fetch all files and folders recursively
    const folderData = await getAllItems(uploadsPath);

    res.status(200).json({ folders: folderData });
  } catch (error) {
    console.error("Error fetching all folders:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.post('/uploadFolder', upload.single('folder'), async (req, res) => {
  const folderName = req.file.originalname.replace('.zip', ''); // Extract folder name from zip file name
  const folderZipBuffer = req.file.buffer;
  const templateId =req.body.templateId;
  const subFolder =req.body.subFolder;
  console.log(req.body.subFolder);
  
  try {
  
    const unzipDestination = path.join(__dirname, `uploads/FolderTemplates/${templateId}/${subFolder}/`); // Adjusted destination path
    console.log("Unzip Destination:", unzipDestination);
    const zip = new AdmZip(folderZipBuffer);
    zip.extractAllTo(unzipDestination, true);

    res.status(200).json({ message: 'Folder uploaded and extracted successfully' });
  } catch (error) {
    console.error('Error uploading and extracting folder:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.listen(port, () => {
  console.log(`Server is running on port http://127.0.0.1:${port}`);
});


app.get('/current-timestamp', (req, res) => {
  const currentTimestamp = Math.floor(Date.now() / 1000); // Convert milliseconds to seconds
  res.send(`Current timestamp is: ${currentTimestamp}`);
});

// //******************SSL Certificate */
// const fs = require('fs');

// // Load SSL certificate and private key
// const options = {
//   key: fs.readFileSync("C:/Windows/System32/server.key"),
//   cert: fs.readFileSync('C:/Windows/System32/server.cert')
// };

// // Define your routes
// app.get('/', (req, res) => {
//   res.send('Hello, HTTPS!');
// });


// // Ignore SSL certificate errors
// const agent = new https.Agent({
//   rejectUnauthorized: false
// });

// // Make HTTPS request with custom agent
// https.get({
//   hostname: 'example.com',
//   path: '/',
//   agent // Use the custom agent
// }, (response) => {
//   // Handle response
// });

// // Create HTTPS server
// const server = https.createServer(options, app);

// // Start the server
// const PORT = 443; // HTTPS default port
// server.listen(PORT, () => {
//   console.log(`Server running on port http://127.0.0.1:${PORT}`);
// });
// //******************SSL Certificate */

