import React from 'react'
import AddButton from './AddButton'
import { BoardCard } from './BoardCard'
import './BoardList.css'
import { Droppable } from 'react-beautiful-dnd'
import { Draggable } from 'react-beautiful-dnd'

export const BoardList = (props) => {

    return (
        <Draggable draggableId={String(props.listID)} index={props.index}>
            {provided => (
                <div className='listContainer' {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps}>
                    <Droppable droppableId={String(props.listID)}>
                        {provided => (
                            <div {...provided.droppableProps} ref={provided.innerRef} className='BoardListContainer'>
                                <h4 style={{ margin: "unset", margin: "8px" }}>{props.title}</h4>
                                {props.cards.map((card, index) => <BoardCard key={card.id} index={index} text={card.text} cardID={card.id} />)}
                                <AddButton type="card" listID={props.listID} boardID={props.boardID}/>
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </div>
            )}
        </Draggable>
    )
}
