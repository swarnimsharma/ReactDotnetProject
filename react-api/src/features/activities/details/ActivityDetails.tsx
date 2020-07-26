import React from 'react'
import { Card, Icon,Image, Button } from 'semantic-ui-react'

export const ActivityDetails = () => {
    return (
        <Card fluid>
       <Image src= '/assets/placeholder.png' wrapped ui = {false}/>
        <Card.Content>
          <Card.Header>Title</Card.Header>
          <Card.Meta>
            <span>Date</span>
          </Card.Meta>
          <Card.Description>
           Description
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <Button.Group widths={2}>
            <Button  content="Edit" color="green" />
            <Button  content="Cancel" color="red" />
            </Button.Group>
        </Card.Content>
      </Card>
    )
}
export default ActivityDetails