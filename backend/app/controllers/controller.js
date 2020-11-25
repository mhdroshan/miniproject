const db = require("../models");
const multer = require('multer');

// const user = db.users;
const Users = db.users;
// const Op = db.Sequelize.Op;

// const storage = multer.diskStorage({
//   destination: function(req, res,cb){
//    cb(null,'./uploads');
//   },
//   filename:function(req,file,cb){
//     cb(null, new Date().toISOString() + file.originalname);
//   }
// })
// const fileFilter = (req, file, cb) => {
//   // reject a file
//   if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
//     cb(null, true);
//   } else {
//     cb(null, false);
//   }
// };


// const upload = multer({storage: storage});



// Create and Save a new Tutorial
// exports.create = (req, res , file) => {
//   console.log(req.file);
//     // Validate request
//     if (!req.body.fullName) {
//       res.status(400).send({
//         message: "Content can not be empty!"
//       });
//       return;
// }
//   // Create a Tutorial
//   const user = {
//     u_name:req.body.fullName,
//     u_email:req.body.email,
//     u_phone: req.body.phone,
//     u_pass: req.body.password,
//     u_age: req.body.Dob,
//     u_address:req.body.Address,
//     u_pic:req.file.path,
//     verified:req.body.verified,
    
//     // u_email: req.body.u_email,
//     // u_email: req.body.u_email,
//     // published: req.body.published ? req.body.published : false
//   };

//   // Save Tutorial in the database
//   Users.create(user)
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while creating the user."
//       });
//     });
// };



// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  
};