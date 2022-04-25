import React, { useState } from 'react';
import { Header, Button, Form, Radio } from 'semantic-ui-react';
import { actions } from './services/actions';
import { useDispatch } from 'react-redux';

const PollQuestion = ({ question}) => {
    const [value, setValue] = useState('')
    const dispatch = useDispatch();
    const handleChange = (e, { value }) => setValue(value);
    const authUser = localStorage.getItem('authId');
    const handleSubmit = e => {
        e.preventDefault();
        if (value !== '') {
            dispatch(actions.handleSaveQuestionAnswer(authUser, question.id, value));
        }
    };
    return (
        <>
            <Header as="h4">Would you rather</Header>
            <Form onSubmit={handleSubmit}>
                <Form.Field>
                    <Radio
                        label={question?.optionOne?.text}
                        name="radioGroup"
                        value="optionOne"
                        checked={value === 'optionOne'}
                        onChange={handleChange}
                    />
                    <br />
                    <Radio
                        label={question?.optionTwo?.text}
                        name="radioGroup"
                        value="optionTwo"
                        checked={value === 'optionTwo'}
                        onChange={handleChange}
                    />
                </Form.Field>
                <Form.Field>
                    <Button
                        color="green"
                        size="tiny"
                        fluid
                        positive
                       
                        content="Submit"
                    />
                </Form.Field>
            </Form>
        </>
    );
}

export default PollQuestion;