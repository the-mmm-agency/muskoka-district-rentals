import { Handler } from 'aws-lambda';
import { pipe } from 'fp-ts/lib/pipeable';
import { createTestAccount, createTransport } from 'nodemailer';
import { EndHandlerArgument } from 'react-simple-chatbot';

const send = async (argument: EndHandlerArgument) =>
  pipe(
    await createTestAccount(),
    ({ user, pass, smtp }) =>
      createTransport({
        ...smtp,
        to: user,
        auth: {
          user,
          pass,
        },
      }),
    async transporter =>
      transporter.sendMail({
        subject: 'New chatbot response',
        text: JSON.stringify(argument),
      })
  );

export const handler: Handler = async event => ({
  statusCode: 200,
  body: await send(event.payload),
});
