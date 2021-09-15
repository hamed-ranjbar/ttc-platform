const mongoose = require("mongoose");
const TTC = mongoose.model('Program');

const programList = (req, res) => {
    TTC
        .find()
        .select('-courses')
        .exec((err, program) => {
            if (err) {
                res
                    .status(500)
                    .json(err);
            } else if (!program.length) {
                res
                    .status(404)
                    .json({
                        message: 'no programs found!'
                    });
            } else {
                res
                    .status(200)
                    .json(program);
            }
        })
}

const programCreateOne = (req, res) => {
    let program = {
        name:req.body.name,
        description:req.body.description,
        vidURL:req.body.vidURL,
        bgImage:req.body.bgImage
    }
    TTC
        .create(program,(err,pro)=>{
            if (err){
                res
                    .status(500)
                    .json(err);
            }else{
                res
                    .status(201)
                    .json(pro);
            }
        })
}

const programReadOne = (req,res) => {
    TTC
        .findById(req.params.programid)
        .exec((err,program)=>{
            if(err){
                res
                    .status(500)
                    .json(err);
            }else if(!program){
                res
                    .status(404)
                    .json(err);
            }else{
                res
                    .status(200)
                    .json(program);
            }
        });
}

const programUpdateOne = (req,res) => {
    TTC
        .findById(req.params.programid)
        .exec((err,program)=>{
            if (err){
                res
                    .status(500)
                    .json(err);
            }else if(!program){
                res
                    .status(404)
                    .json({message:'program not found!'})
            }else{
                program.name = req.body.name;
                program.description = req.body.description;
                program.vidURL = req.body.vidURL;
                program.bgImage = req.body.bgImage;
                program.save((err,programEdited) => {
                    if(err){
                        res
                            .status(500)
                            .json(err);
                    } else {
                        res
                            .status(200)
                            .json(programEdited);
                    }
                });
            }
        })
}

const programDeleteOne = (req,res) => {
    TTC
        .findByIdAndRemove(req.params.programid)
        .exec((err,program) => {
            if(err){
                res
                    .status(404)
                    .json(err)
            }else{
                res
                    .status(204)
                    .json(null)
            }
        })
}

module.exports = {
    programList,
    programCreateOne,
    programReadOne,
    programUpdateOne,
    programDeleteOne
}