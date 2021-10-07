const mongoose = require('mongoose');
const TTC = mongoose.model('Program');

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
const findChapter = (chapterId, course) => {
    return course.chapters.id(chapterId);
};

const materialList = (req, res) => {
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
    const chapter = findChapter(req.params.chapterid, course);
    if (!chapter)
        return res
            .status(404)
            .json({ message: 'Chapter not found!' });
    if (!chapter.materials.length)
        return res
            .status(404)
            .json({ message: 'Chapter contains no Materials!' });
    const response = {
        program: {
            _id: program._id,
            name: program.name,
        },
        course: {
            _id: course._id,
            name: course.name
        },
        chapter: {
            _id: chapter._id,
            number: chapter.number,
            name: chapter.name
        },
        materials: chapter.materials
    }
    res
        .status(200)
        .json(response);
};
const materialCreateOne = (req, res) => {
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
    const chapter = findChapter(req.params.chapterid, course);
    if (!chapter)
        return res
            .status(404)
            .json({ message: 'Chapter not found!' });
    const response = {
        number: req.body.number,
        name: req.body.name,
        vid_link: req.body.link,
        text: req.body.text,
        mandatory: req.body.mandatory,
        max_point: req.body.max_point
    };
    chapter.materials.push(response)
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
const materialReadOne = (req, res) => {
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
    const chapter = findChapter(req.params.chapterid, course);
    if (!chapter)
        return res
            .status(404)
            .json({ message: 'Chapter not found!' });
    if (!chapter.materials.length)
        return res
            .status(404)
            .json({ message: 'Chapter contains no Materials!' });

    const material = chapter.materials.id(req.params.materialid);
    if (!material)
        return res
            .status(404)
            .json({ message: 'material not found!' });
    const response = {
        program: {
            name: program.name,
            _id: program._id
        },
        course: {
            name: course.name,
            _id: course._id
        },
        chapter: {
            _id: chapter._id,
            number: chapter.number,
            name: chapter.name
        },
        material
    }
    res
        .status(200)
        .json(response);
};
const materialUpdateOne = (req, res) => {
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
    const chapter = findChapter(req.params.chapterid, course);
    if (!chapter)
        return res
            .status(404)
            .json({ message: 'Chapter not found!' });
    if (!chapter.materials.length)
        return res
            .status(404)
            .json({ message: 'Chapter contains no Materials!' });

    const material = chapter.materials.id(req.params.materialid);
    if (!material)
        return res
            .status(404)
            .json({ message: 'material not found!' });

    material.number = req.body.number;
    material.name = req.body.name;
    material.max_point = req.body.max_point;
    material.link = req.body.link;
    material.mandatory = req.body.mandatory;
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
            chapter: {
                _id: chapter._id,
                number: chapter.number,
                name: chapter.name
            },
            material
        }
        res
            .status(200)
            .json(response);
    })
};
const materialDeleteOne = (req, res) => {
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
    const chapter = findChapter(req.params.chapterid, course);
    if (!chapter)
        return res
            .status(404)
            .json({ message: 'Chapter not found!' });
    if (!chapter.materials.length)
        return res
            .status(404)
            .json({ message: 'Chapter contains no Materials!' });

    const material = chapter.materials.id(req.params.materialid);
    if (!material)
        return res
            .status(404)
            .json({ message: 'material not found!' });

    chapter.materials.id(req.params.materialid).remove();
    program.save((err) => {
        if (err)
            return res
                .status(500)
                .json(err)
        res
            .status(204)
            .json(null)
    });
};

module.exports = {
    materialList,
    materialCreateOne,
    materialReadOne,
    materialUpdateOne,
    materialDeleteOne
}