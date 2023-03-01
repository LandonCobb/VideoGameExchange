"use strict";
const nodemailer = require("nodemailer");

const kafka = require("./streams/kafka.js")

const handleEvent = (eventMessege) => {
    var key = eventMessege.key.toString()
    var data = JSON.parse(eventMessege.value.toString())
    switch(key){
        case 'offer-created':
        case 'offer-accepted':
        case 'offer-rejected':
    }

}

async function main() {

    kafka.startOffersConsumer(handleEvent)

    //let testAccount = await nodemailer.createTestAccount();
    const smtpUsername = "harrison.pollich42@ethereal.email"
    const smtpPassword = "7CgVZm9Qnhtu8kWGxt"

    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: smtpUsername, // generated ethereal user
            pass: smtpPassword, // generated ethereal password
        },
    });

    let info = await transporter.sendMail({
        from: '"noreply" <noreplay@vgeapi.com>',
        to: "landoncobb123@gmail.com",
        subject: "Offer Status",
        text: "Offer was accepted.",
        html: "<b>Hello world?</b>",
    });

    console.log("Message sent: %s", info.messageId);

    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);