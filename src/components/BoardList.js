import React from 'react'
import { BoardCard } from './BoardCard'
import './BoardList.css'

export const BoardList = (props) => {

    return (
        <div className='BoardListContainer'>
            <h4 style={{ margin: "unset", margin: "8px" }}>{props.title}</h4>
            {props.cards.map(card => <BoardCard text={card.text}/>)}
        </div>
    )
}
