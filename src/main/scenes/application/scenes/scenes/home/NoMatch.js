import React from 'react';
import { Header, Container } from 'semantic-ui-react';

const NoMatch = () => {

    return (
        <>
            <Container textAlign="center">
                <Header as="h3">No Match 404 Error</Header>
                <p>Nothing to see here. Please use the menu to try again.</p>
            </Container>
        </>
    );
}

export default NoMatch;