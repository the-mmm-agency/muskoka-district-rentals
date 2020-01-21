"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handler = void 0;

var _pipeable = require("fp-ts/lib/pipeable");

var _nodemailer = require("nodemailer");

const send = async argument => (0, _pipeable.pipe)((await (0, _nodemailer.createTestAccount)()), ({
  user,
  pass,
  smtp
}) => (0, _nodemailer.createTransport)({ ...smtp,
  to: user,
  auth: {
    user,
    pass
  }
}), async transporter => transporter.sendMail({
  subject: 'New chatbot response',
  text: JSON.stringify(argument)
}));

const handler = async event => ({
  statusCode: 200,
  body: await send(event.payload)
});

exports.handler = handler;