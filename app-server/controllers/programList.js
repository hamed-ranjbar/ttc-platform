const { response } = require('express');
const request = require('request')

const apiOptions = {
    server: 'http://localhost:3000'
};
if (process.env.NODE_ENV === 'production') {
    apiOptions.server = 'https://ttc-moghadam.herokuapp.com';
}

const programList = (req, res) => {
    const path = '/api/programs';
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'GET',
        json: {},
        qs: {}
    };
    request(requestOptions, (err, response, body) => {
        renderHomePage(req, res, body);
    })
}
const renderHomePage = (req, res, responseBody) => {
    res.render('program-list', {
        pageHeader: {
            title: 'Mooc-platform'
        },
        sidebar: 'choose the program that suits you!',
        programs: responseBody
    });
}
const programInfo = (req, res) => {
    const path = `/api/program/${req.params.programid}`;
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'GET',
        json: {},
        qs: {}
    };
    request(requestOptions, (err, response, body) => {
        renderProgramInfoPage(req, res, body);
    });
}
const renderProgramInfoPage = (req, res, responseBody) => {
    res.render('program-info', {
        program: responseBody
    });
}

module.exports = {
    programList,
    programInfo
}