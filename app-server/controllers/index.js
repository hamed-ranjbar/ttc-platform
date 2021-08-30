const request = require('request')

const get_home = (req, res, next) => {
    res.render('index', {
        pageHeader: {
            title: 'Mooc-platform'
        },
        sidebar: 'choose the program that suits you!',
        courses: [{
                name: 'General Teacher Training Program',
                rating: 4,
                description: 'General Teacher Training Program',
                bgImage: '/images/GTTP.jpg'
            },
            {
                name: 'Young Learners Teacher Training Program',
                rating: 5,
                description: 'Young Learners Teacher Training Program',
                bgImage: '/images/YLTTP.jpeg'
            }
        ]
    });
}

module.exports = {
    get_home
}