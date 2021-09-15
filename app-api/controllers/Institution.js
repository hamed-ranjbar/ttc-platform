const mongoose = require('mongoose');
const TTC = mongoose.model('Institution');

const institutionList = (req, res) => {
    TTC
        .find()
        .exec((err, institution) => {
            if (err)
                return res
                    .status(500)
                    .json(err);
            if (!institution.length)
                return res
                    .status(404)
                    .json({ message: 'no instituition found!' });
            res
                .status(200)
                .json(institution);
        });
}

const institutionCreateOne = (req, res) => {
    TTC
        .create({
            name: req.body.name,
            description: req.body.discription,
            coords: {
                type: 'Point',
                coordinates: [
                    parseFloat(req.body.lng),
                    parseFloat(req.body.lat)
                ]
            }
        }, (err, institution) => {
            if (err)
                return res
                    .status(500)
                    .json(err);
            res
                .status(201)
                .json(institution);
        })
}

const institutionReadOne = (req, res) => {
    TTC
        .findById(req.params.institutionid)
        .exec((err, institution) => {
            if (err)
                return res
                    .status(500)
                    .json(err);
            if (!institution)
                return res
                    .status(404)
                    .json({ message: 'Institution not found!' });
            res
                .status(200)
                .json(institution);
        });
}

const institutionUpdateOne = (req, res) => {
    TTC
        .findById(req.params.institutionid)
        .exec((err, institution) => {
            if (err)
                return res
                    .status(500)
                    .json(err);
            if (!institution)
                return res
                    .status(404)
                    .json({ message: 'Institution not found!' });
            institution.name = req.body.name;
            institution.description = req.body.description;
            institution.coords = {
                type: 'Point',
                coordinates: [
                    parseFloat(req.body.lng),
                    parseFloat(req.body.lat)
                ]
            }
            institution.save((err, response) => {
                if (err)
                    return res
                        .status(500)
                        .json(err);
                res
                    .status(200)
                    .json(response);
            })
        });
}

const institutionDeleteOne = (req, res) => {
    TTC
        .findByIdAndRemove(req.params.institutionid, (err,institution) => {
            if (err)
                return res
                    .status(500)
                    .json(err);
            res
                .status(204)
                .json(null);
        })
}

module.exports = {
    institutionList,
    institutionCreateOne,
    institutionReadOne,
    institutionUpdateOne,
    institutionDeleteOne
};