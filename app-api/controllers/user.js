
const userList = (req,res) => {
    res
        .status(200)
        .json({status: 'success'});
}

const userCreate = (req,res) => {
    res
        .status(200)
        .json({status: 'success'});
}

const userReadOne = (req,res) => {
    res
        .status(404)
        .json({
            'status':'Success',
            'id': req.params.userid
        });
}

const userUpdateOne = (req,res) => {
    res
        .status(200)
        .json({
            'status':'Success',
            'id': req.params.userid
        });
}

const userDeleteOne = (req,res) => {
    res
        .status(200)
        .json({
            'status':'Success',
            'id': req.params.userid
        });
}

module.exports = {
    userList,
    userCreate,
    userReadOne,
    userUpdateOne,
    userDeleteOne
}