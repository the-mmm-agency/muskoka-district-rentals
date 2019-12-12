"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handler = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

require("core-js/modules/es6.object.assign");

require("regenerator-runtime/runtime");

var _pipeable = require("fp-ts/lib/pipeable");

var _nodemailer = require("nodemailer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var send = function send(argument) {
  return _regenerator.default.async(function send$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.t0 = _pipeable.pipe;
          _context2.next = 3;
          return _regenerator.default.awrap((0, _nodemailer.createTestAccount)());

        case 3:
          _context2.t1 = _context2.sent;

          _context2.t2 = function (_ref) {
            var user = _ref.user,
                pass = _ref.pass,
                smtp = _ref.smtp;
            return (0, _nodemailer.createTransport)(Object.assign({}, smtp, {
              to: user,
              auth: {
                user: user,
                pass: pass
              }
            }));
          };

          _context2.t3 = function _callee(transporter) {
            return _regenerator.default.async(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    return _context.abrupt("return", transporter.sendMail({
                      subject: 'New chatbot response',
                      text: JSON.stringify(argument)
                    }));

                  case 1:
                  case "end":
                    return _context.stop();
                }
              }
            });
          };

          return _context2.abrupt("return", (0, _context2.t0)(_context2.t1, _context2.t2, _context2.t3));

        case 7:
        case "end":
          return _context2.stop();
      }
    }
  });
};

var handler = function handler(event) {
  return _regenerator.default.async(function handler$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return _regenerator.default.awrap(send(event.payload));

        case 2:
          _context3.t0 = _context3.sent;
          return _context3.abrupt("return", {
            statusCode: 200,
            body: _context3.t0
          });

        case 4:
        case "end":
          return _context3.stop();
      }
    }
  });
};

exports.handler = handler;