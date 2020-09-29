import React from 'react'
import './User-card.css'

const UserCard = props => {
    return (
        <article className="user-card">
            <img src={props.avatarUrl} alt={props.firstName} />
            <h6>{props.firstName} {props.lastName}</h6>
        </article>
    )
}

export default UserCard
