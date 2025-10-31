import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "chandrasekaran2996@gmail.com",
    pass: "ewhp kupt mpir sqik",
  },
});

export default transporter;