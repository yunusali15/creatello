import React from 'react';
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import { Draggable } from 'react-beautiful-dnd'

export const BoardCard = ({ text, cardID, index }) => {
    return (
        <Draggable draggableId={String(cardID)} index={index}>
            {provided => (
                <div {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps}>
                    <Card style={{ width: "100%", maxWidth: "284px", margin: "6px" }}>
                        <CardContent>
                            <Typography>{text}</Typography>
                        </CardContent>
                    </Card>
                </div>
            )} 
        </Draggable >
    )
}
