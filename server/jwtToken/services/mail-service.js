const mailer = require("nodemailer");

class MailService {
    constructor() {
        this.transporter = mailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: "kmeks81@gmail.com",
                pass: "xlkf dhcn dozw abfy"
            }
        });
    }

    async sendActivationMail(to, link) {
        await this.transporter.sendMail({
            from: "kmeks81@gmail.com",
            to,
            subject: 'Активация',
            text: '',
            html:
                `
                <div>
                    <h2>Активация</h2>
                    <a href="${link}">${link}</a>
                </div>
                `
        });
    }
}

module.exports = new MailService();
