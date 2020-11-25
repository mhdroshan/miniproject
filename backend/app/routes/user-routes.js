var router = require("express").Router();
const db = require("../models");
const Users = db.users;
const users = require("../controllers/controller.js");
const multer = require('multer');
module.exports = app => {
   

    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, './uploads');
        },
        filename: function (req, file, cb) {

            cb(null, Date.now() + file.originalname);
        }
    });
    const upload = multer({ storage: storage });

    // profile image upload


    // Create a new Tutorial
    router.post("/", upload.single('u_pic'), (req, res, next) => {
        console.log(req.file);
        // Validate request
        if (!req.body.fullName) {
            res.status(400).send({
                message: "Content can not be empty!"
            });
            return;
        }
        // Create a Tutorial
        const user = {
            u_name: req.body.fullName,
            u_email: req.body.email,
            u_phone: req.body.phone,
            u_pass: req.body.password,
            u_age: req.body.Dob,
            u_address: req.body.Address,
            u_pic: req.file.path,
            verified: req.body.verified,

            // u_email: req.body.u_email,
            // u_email: req.body.u_email,
            // published: req.body.published ? req.body.published : false
        };

        // Save Tutorial in the database
        Users.create(user)
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while creating the user."
                });
            });



    });

    // Retrieve all Tutorials
    router.get("/", users.findAll);

    // profile image upload

    // Retrieve all published Tutorials
    // router.get("/published", users.findAllPublished);

    // Retrieve a single Tutorial with id
    router.get("/:id", users.findOne);

    // Update a Tutorial with id
    router.put("/:id", users.update);

    // Delete a Tutorial with id
    router.delete("/:id", users.delete);

    // Delete all Tutorials
    router.delete("/", users.deleteAll);

    app.use('/api/users', router);
};
