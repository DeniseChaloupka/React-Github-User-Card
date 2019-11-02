import React from 'react';
import { Card, Icon, Image, CardHeader } from 'semantic-ui-react'

import '../UserCard.css'


const UserCard = props => {
    console.log(props)
    return (
        <Card style={{margin: "15px 0"}}>
            <Image className="img-url" src={props.user.avatar_url}/>
            <Card.Content>
                <CardHeader>{props.user.login}</CardHeader>
            </Card.Content>
            <Card.Content extra>
                <a href={props.user.followers_url} target="_">
                    <Icon name="user" />
                    Followers
                </a>
            </Card.Content>
        </Card>
    )
}

export default UserCard