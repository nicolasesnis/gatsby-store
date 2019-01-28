import crypto from 'crypto'
import * as emailjs from 'emailjs-com'
import { findCustomerByEmail, updateCustomer } from './moltin'

const resetPassword = email =>
  new Promise((resolve, reject) => {
    if (email === '') {
      return new Error('email required')
    }
    findCustomerByEmail(email).then(data => {
      if (!data.data[0]) {
        reject(new Error('email not in database'))
      } else {
        const customerId = data.data[0].id
        const token = crypto.randomBytes(20).toString('hex')
        updateCustomer(customerId, {
          resetPasswordToken: token,
          resetPasswordExpires: Date.now() + 360000,
        })
        emailjs
          .send(
            'gmail',
            'reset_password',
            {
              user_email: email,
              text:
                `You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n` +
                `Please click on the following link, or paste this into your browser to complete the process within one hour of receiving it:\n\n` +
                `http://localhost:8000/reset/${token}\n\n` +
                `If you did not request this, please ignore this email and your password will remain unchanged.\n`,
            },
            `${process.env.EMAILJS_USER_ID}`
          )

          .then(
            response => {
              console.log('SUCCESS!', response.status, response.text)
              resolve('recovery email sent')
            },
            err => {
              reject(new Error(`there was an error: ${err}`))
            }
          )
      }
    })
  })

export { resetPassword }

// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: `${process.env.EMAIL_ADDRESS}`,
//     pass: `${process.env.EMAIL_PASSWORD}`,
//   },
// })

// const mailOptions = {
//   from: `nicolas.esnisl@gmail.com`,
//   to: `${email}`,
//   subject: `Link To Reset Password`,
//   text:
//     `You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n` +
//     `Please click on the following link, or paste this into your browser to complete the process within one hour of receiving it:\n\n` +
//     `http://localhost:8000/reset/${token}\n\n` +
//     `If you did not request this, please ignore this email and your password will remain unchanged.\n`,
// }

// console.log('sending mail')

// transporter
//   .sendMail(mailOptions, (err, response) => {
//     if (err) {
//       reject(new Error(`there was an error: ${err}`))
//     } else {
//       console.log('here is the res: ', response)
//       resolve('recovery email sent')
//     }
//   })

//   .catch(e => console.error(e))
