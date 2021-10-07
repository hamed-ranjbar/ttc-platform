const mongoose = require('mongoose');
const TTC = mongoose.model('Program');

const courseList = (req, res) => {
    TTC
        .findById(req.params.programid)
        .select('courses name')
        .exec((err, program) => {
            if (err)
                return res
                    .status(400)
                    .json(err);
            if (!program)
                return res
                    .status(404)
                    .json({ message: 'Program not found!' });
            if (!program.courses.length)
                return res
                    .status(404)
                    .json({ message: 'no courses found!' });
            res
                .status(200)
                .json(program.courses);
        });
}

const courseCreateOne = (req, res) => {
    TTC
        .findById(req.params.programid)
        .select('courses name')
        .exec((err, program) => {
            if (err)
                return res
                    .status(400)
                    .json(err);
            if (!program)
                return res
                    .status(404)
                    .json({ message: 'Program not found!' });
            const { name, description, min_grade, commitment,number } = req.body;
            program.courses.push({
                name,
                description,
                min_grade,
                commitment,
                number
            });
            program.save((err, result) => {
                if (err)
                    return res
                        .status(500)
                        .json(err);
                res
                    .status(200)
                    .json(result);
            });
        });
}

const courseReadOne = (req, res) => {
    TTC
        .findById(req.params.programid)
        .select('courses name')
        .exec((err, program) => {
            if (err)
                return res
                    .status(400)
                    .json(err);
            if (!program)
                return res
                    .status(404)
                    .json({ message: 'Program not found!' });
            if (!program.courses.length)
                return res
                    .status(404)
                    .json({ message: 'no courses found!' });
            const course = program.courses.id(req.params.courseid);
            if (!course)
                return res
                    .status(404)
                    .json({ message: 'Course not found!' });
            const response = {
                porgram: {
                    name: program.name,
                    _id: program._id,
                },
                course
            }
            res
                .status(200)
                .json(response);
        })
}

const courseUpateOne = (req, res) => {

    TTC
        .findById(req.params.programid)
        .select('courses name')
        .exec((err, program) => {
            if (err)
                return res
                    .status(400)
                    .json(err);
            if (!program)
                return res
                    .status(404)
                    .json({ message: 'Program not found!' });
            if (!program.courses.length)
                return res
                    .status(404)
                    .json({ message: 'no courses found!' });
            const course = program.courses.id(req.params.courseid);
            if (!course)
                return res
                    .status(404)
                    .json({ message: 'Course not found!' });
            course.name = req.body.name;
            course.description = req.body.description;
            course.min_grade = req.body.min_grade;
            course.active = req.body.active;
            course.number = req.body.number;
            course.commitment = req.body.commitment;
            program.save((err) => {
                if (err)
                    return res
                        .status(500)
                        .json(err);
                res
                    .status(200)
                    .json({
                        program: {
                            name: program.name,
                            _id: program._id
                        },
                        course
                    })
            });
        })
}

const courseDeleteOne = (req, res) => {
    TTC
        .findById(req.params.programid)
        .select('courses name')
        .exec((err, program) => {
            if (err)
                return res
                    .status(400)
                    .json(err);
            if (!program)
                return res
                    .status(404)
                    .json({ message: 'Program not found!' });
            if (!program.courses.length)
                return res
                    .status(404)
                    .json({ message: 'no courses found!' });
            const course = program.courses.id(req.params.courseid);
            if (!course)
                return res
                    .status(404)
                    .json({ message: 'Course not found!' });
            program.courses.id(req.params.courseid).remove();
            program.save((err) => {
                if (err)
                    return res
                        .status(500)
                        .json(err)
                res
                    .status(204)
                    .json(null);
            });
        });
}


module.exports = {
    courseList,
    courseCreateOne,
    courseReadOne,
    courseUpateOne,
    courseDeleteOne
};