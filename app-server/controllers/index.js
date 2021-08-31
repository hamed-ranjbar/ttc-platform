const request = require('request')

const apiOptions = {
    server: 'http://localhost:3000'
};
if (process.env.NODE_ENV === 'production') {
    apiOptions.server = 'https://pure-temple-67771.herokuapp.com';
}

const get_home = (req, res) => {
    const path = '/api/programs';
    const requestOptions = {
        url:`${apiOptions.server}${path}`,
        method:'GET',
        json:'',
        qs:{}
    };
    request(requestOptions, (err,response,body) => {
        renderHomePage(req,res,JSON.parse(body));
    })
}
const renderHomePage = (req,res,responseBody) => {
    res.render('index',{
        pageHeader: {
            title: 'Mooc-platform'
        },
        sidebar: 'choose the program that suits you!',
        programs: responseBody
    });
}
module.exports = {
    get_home
}