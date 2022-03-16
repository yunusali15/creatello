import React from 'react'
import AddButton from './AddButton'
import { BoardCard } from './BoardCard'
import './BoardList.css'

export const BoardList = (props) => {

    return (
        <div className='BoardListContainer'>
            <h4 style={{ margin: "unset", margin: "8px" }}>{props.title}</h4>
            {props.cards.map(card => <BoardCard  key={card.id} text={card.text}/>)}
            <AddButton listID={props.listID} />
        </div>
    )
}
