const request = require('request');
const fs = require('fs');
const path = require('path');

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
const streamVideo = (req, res) => {
    const path = 'public/assets/sample.mkv';
    const stat = fs.statSync(path);
    const fileSize = stat.size;
    const range = req.headers.range;
    if (range) {
        const parts = range.replace(/bytes=/, "").split("-")
        const start = parseInt(parts[0], 10)
        const end = parts[1]
            ? parseInt(parts[1], 10)
            : fileSize - 1

        if (start >= fileSize) {
            res.status(416).send('Requested range not satisfiable\n' + start + ' >= ' + fileSize);
            return
        }

        const chunksize = (end - start) + 1
        const file = fs.createReadStream(path, { start, end })
        const head = {
            'Content-Range': `bytes ${start}-${end}/${fileSize}`,
            'Accept-Ranges': 'bytes',
            'Content-Length': chunksize,
            'Content-Type': 'video/mkv',
        }

        res.writeHead(206, head)
        file.pipe(res)
    } else {
        const head = {
            'Content-Length': fileSize,
            'Content-Type': 'video/mkv',
        }
        res.writeHead(200, head)
        fs.createReadStream(path).pipe(res)
    }

}
module.exports = {
    programList,
    programInfo,
    streamVideo
}