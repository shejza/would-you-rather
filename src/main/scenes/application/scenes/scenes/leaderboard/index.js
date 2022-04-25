import React, { useState } from "react";
import {
    Segment,
    Grid,
    Header,
    Image,
    Label,
    Divider
} from 'semantic-ui-react';

const LeaderBoard = ({ users }) => {
    const trophyColor = ['yellow', 'grey', 'orange'];

    const leaderboardData = () => {

        return Object.values(users).map(user => ({
            id: user.id,
            name: user.name,
            avatarURL: user.avatarURL,
            answerCount: Object.values(user.answers).length,
            questionCount: user.questions.length,
            total: Object.values(user.answers).length + user.questions.length
        }))
            .sort((a, b) => a.total - b.total)
            .reverse()
            .slice(0, 3);
    }

    return (
        <>
            {leaderboardData().map((user, idx) => (
                <Segment.Group key={user.id} style={{ marginLeft: 40, marginRight: 40 }}>
                    <Label corner="left" icon="trophy" color={trophyColor[idx]} />
                    <Grid divided padded>
                        <Grid.Row>
                            <Grid.Column width={2} verticalAlign="middle">
                                <Image src={user.avatarURL} />
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <Header as="h3" textAlign="left">
                                    {user.name}
                                </Header>
                                <Grid>
                                    <Grid.Column width={12}>Answered questions</Grid.Column>
                                    <Grid.Column width={4}>{user.answerCount}</Grid.Column>
                                </Grid>
                                <Divider />
                                <Grid>
                                    <Grid.Column width={12}>Created questions</Grid.Column>
                                    <Grid.Column width={4}>{user.questionCount}</Grid.Column>
                                </Grid>
                            </Grid.Column>
                            <Grid.Column width={4} textAlign="center">
                                <Segment.Group>
                                    <Header as="h5" block attached="top" content="Score" />
                                    <Segment>
                                        <Label circular color="green" size="big">
                                            {user.questionCount + user.answerCount}
                                        </Label>
                                    </Segment>
                                </Segment.Group>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment.Group>
            ))}
        </>
    );
}

export default LeaderBoard;