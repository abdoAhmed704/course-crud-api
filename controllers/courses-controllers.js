let { courses } = require("../data/courses");
const { validationResult } = require('express-validator');

const getAllCourses = (req, res) => {
    res.send(courses);
};

const getCourseById = (req, res) => {
    console.log(req.params.courseId);
    const course = courses.find((course) => {
        return course.id === +req.params.courseId
    })
    if (!course) {
        res.status(404).send('The course with the given ID was not found');
    }
    res.status(200).json(course);
};

const createCourse = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const course = { id: courses.length + 1, ...req.body };
    courses.push(course);
    res.status(201).send(course);
};

const updateCourse = (req, res) => {
    const courseId = +req.params.courseId;
    let course = courses.find((e) => courseId === e.id)
    if (!course) {
        return res.status(400).send('Sorry, Not found');
    }
    course = { ...course, ...req.body }
    // courses.push(course)
    courses[courseId - 1] = course;
    res.status(200).send(course);
};

const deleteCourse = (req, res) => {
    const courseId = +req.params.courseId;
    let newCourses = courses.filter((e) => {
        return courseId !== e.id;
    })
    if (newCourses.length === courses.length) {
        return res.status(404).send({
            "succsess": false
        });
    }
    courses = newCourses;
    res.status(200).send({
        "succsess": true
    });
};

module.exports = {
    getAllCourses,
    getCourseById,
    createCourse,
    updateCourse,
    deleteCourse,
}