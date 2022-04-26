import React, { useState, useEffect } from "react";
import { Segment, Header, Grid, Image } from 'semantic-ui-react';
import { colors } from './../../../../../../helpers/colors';
import PollTeaser from './PollTeaser';
import PollQuestion from './PollQuestion';
import PollResult from './PollResult';
import { useDispatch, useSelector } from 'react-redux';
import { receiveQuestions } from "main/scenes/actions/questions";
import { receiveUsers } from 'main/scenes/actions/users';
import {
    useParams
} from "react-router-dom";

const pollTypes = {
    POLL_TEASER: 'POLL_TEASER',
    POLL_QUESTION: 'POLL_QUESTION',
    POLL_RESULT: 'POLL_RESULT'
};


const UserCard = ({
    question_id,
    unanswered = null, _questions, _users }) => {
        
    const [pollType, setPollType] = useState('POLL_TEASER');
    const [question, setQuestion] = useState({});
    const [author, setAuthor] = useState('');
    const [badPath, setBadPath] = useState(false);
    

    const dispatch = useDispatch();
    const { users } = useSelector((state) => state.users);
    const { questions } = useSelector((state) => state.questions);
    const [usersList, setUsers] = useState([]);
    const [questionsList, setquestionsList] = useState([]);
    let { question_id_param } = useParams();
    
    useEffect(() => {
        dispatch(receiveQuestions());
        dispatch(receiveUsers());
      }, [dispatch]);
      useEffect(() => {
        if (!!users) {
          setUsers(users);
        }
      }, [users]);
    
      useEffect(() => {
        if (!!questions) {
          setquestionsList(questions);
        }
      }, [questions]);
      
    const auth = localStorage.getItem('authId');
 
    useEffect(() => {
        if (question_id !== undefined) {
            setQuestion(_questions[question_id]);
            setAuthor(_users[question.author]);
            setPollType(pollTypes.POLL_TEASER);
        } else {
            setQuestion(questionsList[question_id_param]);
            const user = usersList[auth];
            if (question === undefined) {
                setBadPath(true);
            } else {
                setAuthor(usersList[question.author]);
                setPollType(pollTypes.POLL_QUESTION);
                const answ = user && user.answers ? Object.keys(user.answers) : []
                if (answ.includes(question.id)) {
                    setPollType(pollTypes.POLL_RESULT);
                }
            }
        }
    }, [_questions, _users, auth, question, question_id, question_id_param, questionsList, usersList]);



    const PollContent = () => {
        switch (pollType) {
            case pollTypes.POLL_TEASER:
                return <PollTeaser question={question} unanswered={unanswered} />;
            case pollTypes.POLL_QUESTION:
                return <PollQuestion question={question} />;
            case pollTypes.POLL_RESULT:
                return <PollResult question={question} />;
            default:
                return;
        }
    };
    const tabColor = unanswered === true ? colors.green : colors.blue;
    const borderTop =
        unanswered === null
            ? `1px solid ${colors.grey}`
            : `2px solid ${tabColor.hex}`;

    return (
        <>
            <Segment.Group>
                <Header
                    as="h5"
                    textAlign="left"
                    block
                    attached="top"
                    style={{ borderTop: borderTop }}
                >
                    {author?.name} asks:
                </Header>

                <Grid divided padded>
                    <Grid.Row>
                        <Grid.Column width={5}>
                            <Image src={author?.avatarURL} />
                        </Grid.Column>
                        <Grid.Column width={11}>

                            <PollContent
                                pollType={pollType}
                                question={question}
                                unanswered={unanswered}
                            />

                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment.Group>
        </>
    );
}

export default UserCard;