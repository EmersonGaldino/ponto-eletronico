import React from 'react'
import {Placeholder, Grid, Segment, Table, Button, Icon} from 'semantic-ui-react'

import {Container} from './styles'

const Index = () => {
    return (
        <>
            <Grid columns={3} stackable>
                <Grid.Column>
                    <Segment raised>
                        <Placeholder>
                            <Placeholder.Header image>
                                <Placeholder.Line/>
                                <Placeholder.Line/>
                            </Placeholder.Header>
                            <Placeholder.Paragraph>
                                <Placeholder.Line length='medium'/>
                                <Placeholder.Line length='short'/>
                            </Placeholder.Paragraph>
                        </Placeholder>
                    </Segment>
                </Grid.Column>
                <Grid.Column floated={"right"} width={"3"}>
                    <Segment>
                        <Placeholder>
                            <Placeholder.Line/>
                        </Placeholder>
                    </Segment>
                </Grid.Column>

            </Grid>
            <Container>
                <Placeholder fluid>
                    <Placeholder.Paragraph>
                        <Placeholder.Line length='full'/>
                        <Placeholder.Line length='full'/>
                        <Placeholder.Line length='full'/>
                        <Placeholder.Line length='full'/>
                        <Placeholder.Line length='full'/>
                        <Placeholder.Line length='full'/>
                    </Placeholder.Paragraph>
                    <Placeholder.Paragraph>
                        <Placeholder.Line length='full'/>
                        <Placeholder.Line length='full'/>
                        <Placeholder.Line length='full'/>
                        <Placeholder.Line length='full'/>
                        <Placeholder.Line length='full'/>
                        <Placeholder.Line length='full'/>
                    </Placeholder.Paragraph>
                </Placeholder>

            </Container>
        </>
    )
}
export default Index