const express = require('express')
const router = express.Router()
const multer = require("multer");
const path = require('path');
const fs = require('fs');

const { createRole, getRoles, getRole, deleteRole, updateRole } = require('../../controllers/Common/roleControler')
const { createTag, getTag, getTags, deleteTag, updateTag } = require('../../controllers/Common/tagController')
const { createAccessRight, getAccessRight, getAccessRights, deleteAccessRight, updateAccessRight } = require('../../controllers/Common/accessRightsController')
const { createContact, getContact, getContacts, deleteContact, updateContact, getContactsList } = require('../../controllers/Common/contactController')
const { createUser, getUsers, getUser, deleteUser, updateUser, adminSignup, getUserByEmail, updateUserPassword, updateLoginStatus, getUserListbyId , getUsersByRoles, getVerifyUserbyPassword} = require("../../controllers/Common/userController");
const { validateToken, logout, cleanupBlacklist } = require("../../controllers/middlewares/authJwt");
const { generatetoken } = require("../../controllers/Common/loginController");
const { adminLogin } = require("../../controllers/Common/loginController");
const { createFolderTemplate, getFolders, getFolder, deleteFolderTemplate, updateFolderTemplate,deleteFile, downloadfile, deleteFolder, downloadfolder, getFolderStructure, createfolder,defaultfolderStructure } = require("../../controllers/Common/folderTemplateController");
const { createSortJobsBy,  getSortJobsBy,  getSortJobBy,  deleteSortJobsBy,  updateSortJobsBy} = require("../../controllers/Common/sortJobsByController")
const { getAutomations,  getAutomation,  createAutomation,  deleteAutomation,  updateAutomation} = require("../../controllers/Common/automationsController");


//*******************ROLES START********************* */
router.get('/role',getRoles)
router.get('/role/:id',getRole)
router.post('/role',createRole)
router.delete('/role/:id',deleteRole)
router.patch('/role/:id',updateRole)
//*******************ROLES END********************* */

//*******************USER START********************* */
router.post("/login/generatetoken", generatetoken);
router.get('/login/verifytoken', validateToken, (req, res) => {
    res.json({ message: 'Access granted', user: req.user });
});
router.post('/login/logout', validateToken, logout)
router.post("/login", adminLogin);
router.post("/login/signup", adminSignup);     //It is also for create user
router.get("/user", getUsers);
router.get("/user/:id", getUser);
router.post("/user", createUser);
router.delete("/user/:id", deleteUser);
router.patch("/user/:id", updateUser);
router.get("/user/email/getuserbyemail/:email", getUserByEmail);
router.post("/updateUserLoginStatus", updateLoginStatus);
router.get('/resetpassword/verifytoken', validateToken, (req, res) => {
    res.json({ message: 'Access granted', user: req.user });
});
router.patch("/user/password/updateuserpassword/", updateUserPassword);
router.get("/user/userlist/list/:id", getUserListbyId);
router.get('/users/roles', getUsersByRoles);
// router.post("/user/verifyuser/verifybyemail/verifybypassword", getVerifyUserbyPassword)
router.post("/user/verifyuserandpassword/", getVerifyUserbyPassword);

//*******************USER END********************* */


//*******************TAG START********************* */
router.get('/tag', getTags)
router.get('/tag/:id', getTag)
router.post('/tag', createTag)
router.delete('/tag/:id',deleteTag)
router.patch('/tag/:id',updateTag)

//*******************TAG END********************* */


//*******************ACCESS RIGHTS START********************* */
router.get('/accessright',getAccessRights)
router.get('/accessright/:id',getAccessRight)
router.post('/accessright',createAccessRight)
router.delete('/accessright/:id',deleteAccessRight)
router.patch('/accessright/:id', updateAccessRight)

//*******************ACCESS RIGHTS END********************* */


//*******************CONTACT START********************* */
router.get('/contact',getContacts)
router.get('/contact/:id', getContact)
router.post('/contact', createContact)
router.delete('/contact/:id', deleteContact)
router.patch('/contact/:id', updateContact)
router.get('/contact/contactlist/list/', getContactsList)

//*******************CONTACT END********************* */

//******Folders START******** */
router.get("/folder", getFolders);
router.post("/folder", createFolderTemplate);
router.get("/folder/:id", getFolder);
router.delete("/deleteFile", deleteFile);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const folder = req.params.folder || "";
    const subfolder1 = req.params.subfolder1 || "";
    const subfolder2 = req.params.subfolder2 || "";
    const subfolder3 = req.params.subfolder3 || "";

    let uploadPath = "";
    if (subfolder3 === "blank") {
      // If subfolder2 is blank, use only folder and subfolder1
      uploadPath = path.join("uploads", folder, subfolder1,subfolder2);
    } else {
      // If subfolder2 is not blank, use folder, subfolder1, and subfolder2
      uploadPath = path.join("uploads", folder, subfolder1, subfolder2,subfolder3);
    }
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
// Initialize upload
const upload = multer({
  storage: storage,
});

// Handle POST request for file upload
router.post("/upload/:folder/:subfolder1/:subfolder2/:subfolder3", upload.single("file"), (req, res) => {
  res.send("File uploaded successfully!");
});

// folder upload

// Endpoint for renaming a file
router.put("/renameFile/:templateId/:folder/:oldFileName", (req, res) => {
  const templateId = req.params.templateId;
  const folder = req.params.folder;
  const oldFileName = req.params.oldFileName;
  const newFileName = req.body.newFileName;
  console.log(templateId);

  fs.rename(`uploads/FolderTemplates/${templateId}/${folder}/${oldFileName}, uploads/FolderTemplates/${templateId}/${folder}/${newFileName}`, (err) => {
    if (err) {
      return res.status(500).json({ error: "Failed to rename file" });
    }
    res.json({ message: "File renamed successfully", folder, oldFileName, newFileName });
  });
});

router.post("/createFolder", async (req, res) => {
  const folderName = req.body.folderName;
  const selectedFolder = req.body.selectedFolder;
  const templateId = req.body.templateId;
  const subfolder = req.body.subfolder;
  
  let path;

  if (subfolder === "blank") {
    path =` ${templateId}/${selectedFolder}/`;
  } else {
    path = `${templateId}/${selectedFolder}/${folderName}/${subfolder}`;
    console.log(path);
  }
  console.log(path);

  try {
    await fs.promises.mkdir(`uploads/FolderTemplates/${templateId}/${selectedFolder}/${folderName}`, { recursive: true });
    res.status(200).json({ message: "Folder created successfully" });
  } catch (error) {
    console.error("Error creating folder:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
//delete single Folder
router.delete("/deleteFolder", deleteFolder);

// download file
router.get("/download/:folder/:filename", downloadfile);

// download folder
router.get("/download/:folder", downloadfolder);

// delete Folder Template
router.delete("/folder/:id", deleteFolderTemplate);

//  update Folder Template
router.patch("/folder/:id", updateFolderTemplate);

//  getFolderStructure
router.get("/folder-structure/:folderTemplateId", getFolderStructure);

//get defaultfolderstructure
router.get("/folder-structure", defaultfolderStructure);

//POST a new Folder
router.post("/folder/createfolder", createfolder);

//******Folders END******** */

//*******************Folders END********************* */

//*******************Sory Jobs By START********************* */
router.get('/sortjobby', getSortJobsBy)
router.get('/sortjobby/:id', getSortJobBy)
router.post('/sortjobby', createSortJobsBy)
router.delete('/sortjobby/:id', deleteSortJobsBy)
router.patch('/sortjobby/:id', updateSortJobsBy)

//*******************Sory Jobs By END********************* */

//*******************Automations START********************* */
router.get('/automations', getAutomations)
router.get('/automations/:id', getAutomation)
router.post('/automations', createAutomation)
router.delete('/automations/:id', deleteAutomation)
router.patch('/automations/:id', updateAutomation)

//*******************Sory Jobs By END********************* */


module.exports = router

