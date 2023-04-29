import { createTransport } from "nodemailer";
import dotenv from 'dotenv'


dotenv.config({path: '../../../.env'});

const transporter = createTransport({
    service: "gmail",
    port: 587,
    auth: { user: process.env.GMAIL_ACCOUNT,
            pass: process.env.GMAIL_PASSWORD }

})

const gmailOptions = (emailSubject, htmlTemplate) => {
    return {
        from: process.env.GMAIL_ACCOUNT,
        to: ["someAccount@gmail.com"], //Corregir
        subject: emailSubject,
        html: htmlTemplate
    }
}

const htmlNewUserTemplate = (id, date) => {
    return `
    <h2>Nuevo usuario Creado</h2>
    <ul>
        <li><strong>UUID:</strong> ${id}</li>
        <li><strong>FECHA:</strong> ${date}</li>
    </ul>
    `
};

export async function sendGmail(subject, htmlTemplate) {
    try {
        const mailOptions = gmailOptions(
            subject,
            htmlTemplate
        );
        
        await transporter.sendMail(mailOptions);
        console.log(`correo enviado`)
    } catch (error) {
        console.log(error);
    }
}