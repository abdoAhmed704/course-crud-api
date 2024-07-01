const express = require('express');

const controllers = require('../controllers/courses-controllers.js');
const { validationScrema } = require('../middlewares/valedation-schema.js');


const router = express.Router();


router.route('/')
    .get(controllers.getAllCourses)
    .post(validationScrema(), controllers.createCourse);

router.route('/:courseId')
    .get(controllers.getCourseById)
    .patch(controllers.updateCourse)
    .delete(controllers.deleteCourse);


module.exports = router;