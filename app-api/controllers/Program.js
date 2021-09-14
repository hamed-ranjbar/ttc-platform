const mongoose = require("mongoose");
const Prog = mongoose.model('Program');

const programList = (req, res) => {
    Prog
        .find()
        .select('-courses -__v')
        .exec((err, program) => {
            if (err) {
                res
                    .status(500)
                    .json(err);
            } else if (!program) {
                res
                    .status(404)
                    .json({
                        message: 'no programs'
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
    Prog
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
    Prog
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
    Prog
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
    Prog
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