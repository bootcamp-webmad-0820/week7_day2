import React, { Component } from 'react'
import UserCard from './User-card'

class UsersList extends Component {

    constructor() {
        super()
        this.state = {
            userA: {
                firstName: "Harper",
                lastName: "Perez",
                avatarUrl:
                    "https://www.theglobeandmail.com/resizer/a1tsouRgbsPGVK8OvdFYJqxNhEo=/4415x0/filters:quality(80)/arc-anglerfish-tgam-prod-tgam.s3.amazonaws.com/public/5HSZVXDII5BRRHH4S6KE4WZ7RE.jpg"
            },
            userB: {
                firstName: "Ana",
                lastName: "Hello",
                avatarUrl:
                    "https://cdn.now.howstuffworks.com/media-content/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg"
            }
        }
    }

    handleNamesChange = () => {
        this.setState({
            userA: {
                ...this.state.userA,
                firstName: "Laura",
                lastName: "Whatever"
            },
            userB: {
                ...this.state.userB,
                firstName: "Pedro",
                lastName: "Whatever"
            }
        })
    }

    render() {
        return (
            <>
                <h3>Listado de usuarios</h3>
                <UserCard firstName={this.state.userA.firstName} lastName={this.state.userA.lastName} avatarUrl={this.state.userA.avatarUrl} />
                <UserCard firstName={this.state.userB.firstName} lastName={this.state.userB.lastName} avatarUrl={this.state.userB.avatarUrl} />
                <button onClick={this.handleNamesChange}>Cambiar nombres</button>
            </>
        )
    }
}

export default UsersList