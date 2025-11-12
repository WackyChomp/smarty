import nodemailer from 'nodemailer';
import { WELCOME_EMAIL_TEMPLATE } from './templates';

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.NODEMAILER_EMAIL!,
    pass: process.env.NODEMAILER_PW!,
  }
})

export const sendWelcomeEmail = async ({ email, name, intro } : WelcomeEmailData) =>{
  const htmlTemplate = WELCOME_EMAIL_TEMPLATE
    .replace(`{{name}}`, name)
    .replace(`{{intro}}`, intro);

  const mailOptions = {
    from `"Smarty <smartykart@gimpmail.com`,
    to: email,
    subject: `Welcome to smarty - your personalized toolkit is ready`,
    text: `Thanks for joining Smarty`,
    html: htmlTemplate,
  }

  await transporter.sendMail(mailOptions);
}