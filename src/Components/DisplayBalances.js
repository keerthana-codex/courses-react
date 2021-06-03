import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'
import DisplayBalance from './DisplayBalance'

function DisplayBalances() {
    return (
        <div>
            <Segment textAlign="center">
                <Grid columns={2} divided>
                    <Grid.Row>
                    <Grid.Column>
                        <DisplayBalance title="Income" Value="$100.00" color="green" size="tiny"/>
                    </Grid.Column>
                    <Grid.Column>
                        <DisplayBalance title="Expense" Value="$632.50" color="red" size="tiny"/>
                    </Grid.Column>
                    </Grid.Row>
                </Grid>
                </Segment>
        </div>
    )
}

export default DisplayBalances
