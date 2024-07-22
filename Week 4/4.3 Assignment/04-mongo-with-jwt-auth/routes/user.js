const { Router } = require("express");
const router = Router();
const jwt = require("jsonwebtoken")
const userMiddleware = require("../middleware/user");
const {JWT_SECRET} = require("../config");
const { User, Course } = require("../db");
const { default: mongoose } = require("mongoose");


// User Routes

router.post('/signup', async (req, res) => {
    // Implement user signup logic

    const username = req.body.username
    const password = req.body.password

    await User.create({
        username,
        password
    }).then(function(){
        res.json({
            msg: "User Created Successfully"
        })
    })

});

router.post('/signin',async (req, res) => {
    // Implement admin signup logic

    const username = req.headers.username
    const password = req.headers.password

    const user = await User.find({
        username,
        password
    })

    if(user){
        const token = jwt.sign({
            username
        }, JWT_SECRET)
        res.json({
            token

        })}else{
            res.status(403).json({
                msg: "Incorrect Details"
            })
    }
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic

    const response = await Course.find({});

    res.json({
        courses: response
    })
});

router.post('/courses/:courseId', userMiddleware,async (req, res) => {
    // Implement course purchase logic

    const authorization = req.headers.authorization
    const username = req.username
    const courseId = req.params.courseId

    await User.updateOne({
        username: username
    },{
        "$push": {
            purchaseCourse: courseId
        }
    })
    res.json({
        msg: "Course Purchased Successfully"
    })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const authorization = req.headers.authorization
    const username = req.username

    const user = await User.findOne({
        username: req.username
    })
   const course = await Course.find({
        _id: {
            "$in": user.purchaseCourse
        }
    })
    res.json({
        courses: course
    })
});

module.exports = router

    // "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIxIiwiaWF0IjoxNzIxNjUwMjMzfQ._af6O3fOj6PwJDMUSiNfwe3DIVT4rn1sn0fxVAj-PlM"
