import nodemailer from 'nodemailer'
import { random } from 'glowing-engine'

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.SMTP_MAIL,
        pass: process.env.SMTP_PASSWORD,
    },
});

export async function POST(req) {
    try {
        const { email } = await req.json()
        const otp = random.randomNumberInRange(100000,999999)
        const name = 'Aryan'
        const mail = {
            from: "Qualcomm <mariam@qualcomm.com>",
            to: email,
            subject: "Qualcomm hiring team",
            html: `<p>Hello ${name},</p><p>We're pleased to inform you that your application has been shortlisted for the next phase of the selection process for the internship program at Qualcomm in India. As a part of evalution process, we invite you to participate in a HackerRank test desifned to assess your skills and aptitude to the internship role.</p><br /><p>Please complete the test <a href="https://www.hackerrank.com/event/servicenow-women-tech-hiring-challenge">HackerRank.</a> before May 2nd,2024. <br /><p>Your Passowrd <b>"nfiwenfmoidf"</b></p></p><p>Thank you!</p> <br /><img src="https://scontent.flko4-1.fna.fbcdn.net/v/t39.30808-1/354460818_653159526855289_8127736239460114509_n.png?stp=dst-png_p200x200&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=md6jSAjSIeQAb7p5Zno&_nc_ht=scontent.flko4-1.fna&oh=00_AfCWXsWgJgJk-ytHfdMJOIaIx-bIukRwnhnNdFTMRbpiew&oe=6636CA48" alt="Qualcomm" />`,
        }
        const res = await transporter.sendMail(mail)
        return Response.json(res)
    } catch (error) {
        return Response.json({ error });
    }
}