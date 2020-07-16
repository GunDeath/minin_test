const express = require('express')
const router = express.Router()
const nodemailer = require('nodemailer')

//Get methods
router.get('/', (req, res)=>{
    res.render('index.html')
})

router.get('/call_us', (req, res)=>{
    res.render('call_us.html')
})

router.get('/rules', (req, res) => {
    res.render('rules.html')
})

router.get('/get_info', (req, res) => {
    const infoMoney = {
        his_pay    : req.body.he_pay,
        his_system : req.body.first_field,
        we_pay     : req.body.we_pay,
        us_system  : req.body.second_field
    };

    res.render('form_info.html', {infoMoney: infoMoney});
})

//POST methods
router.post('/get_info', (req, res) => {
    const infoMoney = {
        his_pay    : req.body.he_pay,
        his_system : req.body.first_field,
        we_pay     : req.body.we_pay,
        us_system  : req.body.second_field
    };

    res.render('form_info.html', {infoMoney: infoMoney});
})


router.post('/letter', (req, res) => {
    const formValue = {
        his_pay : req.body.he_pay,
        phone_number : req.body.qiwi_phone,
        my_pay : req.body.we_must_pay
    };

    const output = `
        <p> Новый обмен ЯндексДеньги - QIWI </p>
        <h3>Детали обмена</h3>
        <ul>
            <li> Номер QIWI: ${req.body.qiwi_phone} </li>
            <li> Нам необходимо перевесети: ${req.body.we_must_pay} </li>
            <li> Нам должны перевести: ${req.body.he_pay} </li>
        </ul>
    `;

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'best.change.acc@gmail.com',
            pass: 'Support3006Admin2020',
        }
    });

    let mailOptions = {
        from: '"Admin BestChange" <best.change.acc@gmail.com>',
        to: "acc.for.best.change@gmail.com",
        subject: "Good trade",
        text: "Trade",
        html: output,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        res.render('index')
    });

    res.render('access_form.html', {formValue: formValue});
})

module.exports = router;