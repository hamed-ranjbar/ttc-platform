const mailer = require('nodemailer');

const sendMail = async (req, res) => {
    const transpoter = await mailer.createTransport({
        host: 'mail.moghadam.pro',
        port: 465,
        secure: true,
        auth: {
            user: 'ttc@moghadam.pro',
            pass: 'tzyvxaDrdFS8'
        }
    });
    const emailOptions = {
        from: 'ttc@moghadam.pro',
        to: req.body.address,
        subject: req.body.subject,
        text: req.body.text,
        html: req.body.html
    };
    const info = await transpoter.sendMail(emailOptions, (err, info) => {
        if (err)
            return res
                .status(400)
                .json(err);
        res
            .status(200)
            .json(info)
    });
};

module.exports = {
    sendMail
}