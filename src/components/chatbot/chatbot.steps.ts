// eslint-disable-next-line import/no-unresolved
import { flapMap } from 'ramda';
import flatten from 'ramda/es/flatten';
import head from 'ramda/es/head';
import { Step } from 'react-simple-chatbot/step';

const messages = [
  'Tell us more about you and your group and what brings you to the lake?',
  'How many people will you be? Are you couples or singles? How old is everyone?',
  'Do you have any pets?',
  'Do you have any children and if so how old are they (families with young children prefer shallow water and beaches, older children have other needs)?',
  'What is your budget?',
  'Do you have a preferred lake or region?',
  'Thank you for your interest in working with Muskoka District Rentals, the most trusted rental agency in cottage country!',
];

const isEnd = (index: number) => index === messages.length - 1;

const steps: Step[] = messages.map(
  (message, index): Step =>
    isEnd(index)
      ? {
          id: String(index),
          end: true,
          message,
        }
      : {
          id: String(index),
          message,
          trigger: String(index + 1),
          user: index % 2 !== 0,
        }
);

export default steps;
