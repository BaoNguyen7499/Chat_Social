import nodeMailer from "nodemailer";

let MAIL_USER = "nguyenphucbao07041999@gmail.com";
let MAIL_PASSWORD = "Baonguyen741999@!";
let MAIL_HOST = "smtp.gmail.com";
let MAIL_PORT = "587";

let sendMail = (to, subject, htmlContent) => {
    let transporter = nodeMailer.createTransport({
        host: MAIL_HOST,
        port: MAIL_PORT,
        secure: false, //use ssl-tls
        auth: {
            user: MAIL_USER,
            pass: MAIL_PASSWORD,
        },
    });

    let option = {
        from: MAIL_USER,
        to: to,
        subject: subject,
        html: htmlContent,
    };

    return transporter.sendMail(option); //this default return promise
}

module.exports = sendMail;