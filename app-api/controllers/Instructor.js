const mongoose = require('mongoose');
const TTC = mongoose.model('Instructor');

const instructorList = (req, res) => {
    TTC
        .find()
        .exec((err, instructors) => {
            if (err)
                return res
                    .status(500)
                    .json(err);
            if (!instructors.length)
                return res
                    .status(404)
                    .json({ message: 'no instructors found!' })
            res
                .status(200)
                .json(instructors);
        });
}

const instructorCreateOne = (req, res) => {
    TTC
        .create({
            name: {
                firstName: req.body.firstName,
                lastName: req.body.lastName
            },
            title: req.body.title,
            description: req.body.description,
            image_link: req.body.image_link,
            institution_id: req.body.institution_id
        }, (err, instructor) => {
            if (err)
                return res
                    .status(500)
                    .json(err);
            res
                .status(201)
                .json(instructor);
        })
}

const instructorReadOne = (req, res) => {
    TTC
        .findById(req.params.instructorid)
        .exec((err, instructor) => {
            if (err)
                return res
                    .status(400)
                    .json(err);
            if (!instructor)
                return res
                    .status(404)
                    .json({ message: 'Instructor not found!' })
            res
                .status(200)
                .json(instructor);
        });
}

const instructorUpdateOne = (req, res) => {
    TTC
        .findById(req.params.instructorid)
        .exec((err, instructor) => {
            if (err)
                return res
                    .status(400)
                    .json(err);
            if (!instructor)
                return res
                    .status(404)
                    .json({ message: 'Instructor not found!' })
            instructor.name = {
                firstName: req.body.firstName,
                lastName: req.body.lastName
            };
            instructor.title = req.body.title;
            instructor.description = req.body.description;
            instructor.institution_id = req.body.institution_id;
            instructor.save((err, response) => {
                if (err)
                    return res
                        .status(500)
                        .json(err);
                res
                    .status(200)
                    .json(response);
            });
        });
}

const instructorDeleteOne = (req, res) => {
    TTC
        .findByIdAndRemove(req.params.instructorid)
        .exec((err) => {
            if (err)
                return res
                    .status(500)
                    .json(err);
            res
                .status(204)
                .json(null);
        });
}

module.exports = {
    instructorList,
    instructorCreateOne,
    instructorReadOne,
    instructorUpdateOne,
    instructorDeleteOne
};