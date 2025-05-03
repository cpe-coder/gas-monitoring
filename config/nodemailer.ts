const nodemailer = require("nodemailer");

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

const receiverEmail = process.env.RECEIVER_EMAIL;

export const transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: email,
		pass,
	},
});

export const mailOption = {
	from: email,
	to: receiverEmail,
};
