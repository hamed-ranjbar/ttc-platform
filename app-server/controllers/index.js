const get_home = (req, res, next) => {
    res.render('index', {
        pageHeader: {
            title: 'Mooc-platform'
        },
        sidebar: 'choose the program that suits you!',
        courses: [{
                name: 'GTTP',
                rating: 4,
                description: 'General Teacher Training Program',
                bgImage: 'background-image: url(/images/GTTP.jpg)'
            },
            {
                name: 'YLTTP',
                rating: 5,
                description: 'Young Learners Teacher Training Program',
                bgImage: 'background-image: url(/images/YLTTP.jpeg)'
            }
        ]
    });
}

module.exports = {
    get_home
}