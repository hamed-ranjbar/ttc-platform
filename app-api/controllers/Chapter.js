const mongoose = require('mongoose');

const findProgram = (programId) => {
    TTC
        .findById(programId)
        .select('courses name')
        .exec((err, program) => {
            if (err)
                return err;
            return program;

        });
};
const findCourse = (courseId, program) => {
    return program.courses.id(courseId);
};

const chapterList = (req, res) => {
    const program = findProgram(req.params.programid);
    if (typeof (program) == 'mongoose.NativeError')
        return res
            .status(400)
            .json(program);
    if (!program)
        return res
            .status(404)
            .json({ message: 'Program not found!' });
    if (!program.courses.length)
        return res
            .status(404)
            .json({ message: 'Program contains no courses!' });
    const course = findCourse(req.params.courseid);
    if (!course)
        return res
            .status(404)
            .json({ message: 'Course not found!' });
    if (!course.chapters.length)
        return res
            .status(404)
            .json({ message: 'Course contains no Chapters!' });
    const response = {
        program: {
            _id: program._id,
            name: program.name,
        },
        course: {
            _id: course._id,
            name: course.name
        },
        chapters: course.chapters
    }
    res
        .status(200)
        .json(response);
};
const chapterCreateOne = (req, res) => {
    const program = findProgram(req.params.programid);
    if (typeof (program) == 'mongoose.NativeError')
        return res
            .status(400)
            .json(program);
    if (!program)
        return res
            .status(404)
            .json({ message: 'Program not found!' });
    if (!program.courses.length)
        return res
            .status(404)
            .json({ message: 'Program contains no courses!' });
    const course = findCourse(req.params.courseid);
    if (!course)
        return res
            .status(404)
            .json({ message: 'Course not found!' });
    const chapter = {
        name: req.body.name,
        number: req.body.number,
        description: req.body.description
    }
    course.chapters.push(chapter);
    const response = {
        program: {
            name: program.name,
            _id: program._id
        },
        course: {
            name: course.name,
            _id: course._id
        },
        chapter
    }
    program.save((err) => {
        if (err)
            return res
                .status(500)
                .json(err);
        res
            .status(201)
            .json(response);
    })
};
const chapterReadOne = (req, res) => {
    const program = findProgram(req.params.programid);
    if (typeof (program) == 'mongoose.NativeError')
        return res
            .status(400)
            .json(program);
    if (!program)
        return res
            .status(404)
            .json({ message: 'Program not found!' });
    if (!program.courses.length)
        return res
            .status(404)
            .json({ message: 'Program contains no courses!' });
    const course = findCourse(req.params.courseid);
    if (!course)
        return res
            .status(404)
            .json({ message: 'Course not found!' });
    if (!course.chapters.length)
        return res
            .status(404)
            .json({ message: 'Course contains no Chapters!' });
    const chapter = course.chapters.id(req.params.chapterid);
    if (!chapter)
        return res
            .status(404)
            .json({ message: 'Chapter not found!' });
    const response = {
        program: {
            name: program.name,
            _id: program._id
        },
        course: {
            name: course.name,
            _id: course._id
        },
        chapter
    }
    res
        .status(200)
        .json(response);
};
const chapterUpdateOne = (req, res) => {
    const program = findProgram(req.params.programid);
    if (typeof (program) == 'mongoose.NativeError')
        return res
            .status(400)
            .json(program);
    if (!program)
        return res
            .status(404)
            .json({ message: 'Program not found!' });
    if (!program.courses.length)
        return res
            .status(404)
            .json({ message: 'Program contains no courses!' });
    const course = findCourse(req.params.courseid);
    if (!course)
        return res
            .status(404)
            .json({ message: 'Course not found!' });
    if (!course.chapters.length)
        return res
            .status(404)
            .json({ message: 'Course contains no Chapters!' });
    const chapter = course.chapters.id(req.params.chapterid);
    if (!chapter)
        return res
            .status(404)
            .json({ message: 'Chapter not found!' });
    chapter.name = req.body.name;
    chapter.number = req.body.number;
    chapter.description = req.body.description;
    program.save((err) => {
        if (err)
            return res
                .status(500)
                .json(err);
        const response = {
            program: {
                name: program.name,
                _id: program._id
            },
            course: {
                name: course.name,
                _id: course._id
            },
            chapter
        };
        res
            .status(200)
            .json(response);
    });
};
const chapterDeleteOne = (req, res) => {
    const program = findProgram(req.params.programid);
    if (typeof (program) == 'mongoose.NativeError')
        return res
            .status(400)
            .json(program);
    if (!program)
        return res
            .status(404)
            .json({ message: 'Program not found!' });
    if (!program.courses.length)
        return res
            .status(404)
            .json({ message: 'Program contains no courses!' });
    const course = findCourse(req.params.courseid);
    if (!course)
        return res
            .status(404)
            .json({ message: 'Course not found!' });
    if (!course.chapters.length)
        return res
            .status(404)
            .json({ message: 'Course contains no Chapters!' });
    if (!course.chapters.id(req.params.chapterid))
        return res
            .status(404)
            .json({ message: 'Chapter not found!' });
    course.chapters.id(req.params.chapterid).remove();
    program.save((err) => {
        if (err)
            return res
                .status(500)
                .json(err);
        res
            .status(204)
            .json(null);
    })
};

module.exports = {
    chapterList,
    chapterCreateOne,
    chapterReadOne,
    chapterUpdateOne,
    chapterDeleteOne
}