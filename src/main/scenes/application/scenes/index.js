import React, { useEffect, useState } from "react";
import Nav from "./navigation/nav";
import { Route, Routes } from "react-router-dom";
import AddNew from './scenes/add/index';
import LeaderBoard from './scenes/leaderboard/index';
import Home from './scenes/home/index';
import UserCard from './scenes/home/UserCard';
import { handleInitialData } from '../../actions/shared';
import { useDispatch, useSelector } from 'react-redux';
import { receiveUsers } from '../../actions/users';
import { receiveQuestions } from '../../actions/questions';
import NoMatch from './scenes/home/NoMatch';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);
  const { questions } = useSelector((state) => state.questions);

  const [usersList, setUsers] = useState([]);
  const [questionsList, setquestionsList] = useState([]);

  useEffect(() => {
    dispatch(handleInitialData())
  }, [dispatch]);

  useEffect(() => {
    dispatch(receiveUsers());
    dispatch(receiveQuestions());
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
  

    return (
      <>
        <main className="main">
          <Nav users={usersList} />
          <div className="container">
          <Routes>
        
          <Route
            path='/app'
            
            element={<Home users={usersList} questions={questionsList}/>}
          />
          <Route path="/app/questions/bad_id" element={<NoMatch/>} />
            <Route path="/app/questions/:question_id_param" element={<UserCard/>} />
            <Route
            path='/add'
            element={<AddNew />}
          />
                  <Route
            path='/leaderboard'
            element={<LeaderBoard users={usersList} />}
          />
           <Route element={<NoMatch/>} />
            </Routes>
          </div>
        </main>
      </>
    );
  
}

export default Dashboard;