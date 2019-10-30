import * as nodemailer from 'nodemailer'

const {
  EMAIL_HOST,
  EMAIL_PORT,
  EMAIL_USER,
  EMAIL_PASS,
} = process.env as Record<string, string>

export const transporter = nodemailer.createTransport({
  host: EMAIL_HOST,
  port: (EMAIL_PORT as unknown) as number,
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
})

export const sendToAdmin = async (options: nodemailer.SendMailOptions) => {
  await transporter.sendMail({ ...options, from: EMAIL_HOST, to: EMAIL_HOST })
}
