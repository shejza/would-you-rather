import React, { useState, useEffect } from 'react';
import { Header, Button } from 'semantic-ui-react';
import { colors } from './../../../../../../helpers/colors';
import { useNavigate } from 'react-router-dom';
const PollTeaser = ({question, unanswered}) => {
    const [viewPoll, setViewPoll] = useState(false)

    const handleClick = e => {
        setViewPoll(!viewPoll);
    };

  const buttonColor = unanswered === true ? colors.green : colors.blue;
  const buttonContent = unanswered === true ? 'Answer Poll' : 'Results';
  let navigate = useNavigate();
  useEffect(() => {
    if (viewPoll === true) {
      return navigate (`./questions/${question.id}`);
    }
}, [navigate, question.id, viewPoll])

  return (
    <>
        <Header as="h5" textAlign="left">
          Would you rather
        </Header>
        <p style={{ textAlign: 'center' }}>
          {question?.optionOne?.text}
          <br />
          or...
        </p>
        <Button
          color={buttonColor.name}
          size="tiny"
          fluid
          onClick={handleClick}
          content={buttonContent}
        />
  </>
  );
}

export default PollTeaser;