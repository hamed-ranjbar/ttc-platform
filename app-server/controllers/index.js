
const get_home = (req, res, next) => {
    res.render('index', { title: 'Mooc-platform' });
}

module.exports = {
    get_home
}