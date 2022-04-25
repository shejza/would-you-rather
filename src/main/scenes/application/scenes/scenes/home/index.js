import React from 'react';
import { Tab } from 'semantic-ui-react';
import UserCard from './UserCard';

const Home = ({ users, questions }) => {
    const auth = localStorage.getItem('authId');

    const answeredIds = users && users[auth] ?  Object.keys(users[auth]?.answers): [];
 
    const answered = questions ? Object.values(questions)
      .filter(question => !answeredIds.includes(question.id))
      .sort((a, b) => b.timestamp - a.timestamp) : [];
    const unanswered = Object.values(questions)
      .filter(question => answeredIds.includes(question.id))
      .sort((a, b) => b.timestamp - a.timestamp);

      const panes = [
        {
          menuItem: 'Unanswered',
          render: () =>   <Tab.Pane>
          {answered.map(question => (
            <UserCard
              key={question.id}
              question_id={question.id}
              unanswered={true}
              _users={users}
              _questions={questions}
            />
          ))}
        </Tab.Pane>,
        },
        {
          menuItem: 'Answered',
          render: () => <Tab.Pane>
          {unanswered.map(question => (
            <UserCard
              key={question.id}
              question_id={question.id}
              unanswered={false}
              _users={users}
              _questions={questions}
            />
          ))}
        </Tab.Pane>,
        }
      ]

  return (
    <>
       <Tab panes={panes}  menu={{ secondary: true }} />
  </>
  );
}

export default Home;