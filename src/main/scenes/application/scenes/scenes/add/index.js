import React, { useState, useEffect } from "react";
import {
    Segment,
    Header,
    Grid,
    Divider,
    Form
  } from 'semantic-ui-react';
  import { useDispatch } from 'react-redux';
  import { handleSaveQuestion } from "../../../../actions/questions";
  import { useNavigate } from "react-router-dom";
import { handleInitialData } from './../../../../actions/shared';

const AddNew = () => {
    const auth = localStorage.getItem('authId');
    const dispatch = useDispatch();
    const authedUser = localStorage.getItem('authId');
    const formDefaultValues = {
        optionOneText: '',
        optionTwoText: '',
        author: authedUser
      };

      useEffect(() => {
        dispatch(handleInitialData())
      }, [dispatch]);
      
    const [formValues, setFormValues] = useState(formDefaultValues)
    const handleChange = (e) => {
     const target = e.target;
     setFormValues((prevState) => ({
         ...prevState, [target.name]: target.value
     }));
    }
    let navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();

       dispatch(handleSaveQuestion(formValues.optionOneText, formValues.optionTwoText, formValues.author));
      navigate('../app')
    }

  
  return (
    <>
      <Segment.Group style={{ width: 650, margin: 'auto', marginTop: 64 }}>
        <Header as="h3" textAlign="left" block attached="top">
          Create a New Poll
        </Header>
        <Grid padded>
          <Grid.Column >
            <p>
              <strong>Would you rather...</strong>
            </p>
            <Form onSubmit={handleSubmit}>
              <Form.Input
                id="option1"
                placeholder="Enter option one..."
                name='optionOneText'
                onChange={handleChange}
                required
              />
              <Divider horizontal>Or</Divider>
              <Form.Input
                id="option2"
                placeholder="Enter option two..."
                name='optionTwoText'
                onChange={handleChange}
                required
              />
              <Form.Button positive size="tiny" fluid>
                Ask Question
              </Form.Button>
            </Form>
          </Grid.Column>
        </Grid>
      </Segment.Group>
  </>
  );
}

export default AddNew;