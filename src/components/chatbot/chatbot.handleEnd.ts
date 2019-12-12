import { EndHandler } from 'react-simple-chatbot';

const handleEnd: EndHandler = ({ steps, values }) => {
  console.log(
    `Steps \n ${JSON.stringify(steps)}\n Value \n ${JSON.stringify(values)}`
  );
};

export default handleEnd;
