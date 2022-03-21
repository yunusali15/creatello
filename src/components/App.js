import { React, useState } from 'react';
import { connect, Provider } from 'react-redux';
import { BoardCard } from './BoardCard';
import { BoardList } from './BoardList';
import AddButton from './AddButton';
import { DragDropContext } from 'react-beautiful-dnd';
import './App.css'
import { sort } from '../actions/listactions';
import { Droppable } from 'react-beautiful-dnd';
import Typography from "@material-ui/core/Typography";
import { Box, Tabs, Tab, TabPanel } from '@mui/material';

function App(props) {

  const boards = props.boards;
  const [boardDisplayed, setBoardDisplayed] = useState(boards[0]);

  const handleDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;
    const { dispatch } = props;


    if (!destination) {
      return;
    } else {
      dispatch(sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId,
        type,
        boardDisplayed.id
      ))
    }
  }

  
  const handleBoardClick = value => {
    setBoardDisplayed(value);
  }

  return (
    <div className="App">
      <navBar className='appBar'>
        <h2 style={{ fontStyle: "italic", margin: "unset" }}>Creatello</h2>
      </navBar>
      <br></br>
      <div className='mainApp'>
        <div className='tabsContainer'>
          <AddButton type="board" />
          <Box sx={{ flexGrow: 1, bgcolor: 'black', display: 'flex', textAlign: "left" }}>
            <Tabs
              orientation="vertical"
              variant="scrollable"
              className='tabsPanel'
            >
              {boards.map(board =>
                <Tab label={board.title} style={{ fontSize: "16px", color: "white", fontWeight: "200" }} value={board} onClick={() => handleBoardClick(board)} />
              )}
            </Tabs>
          </Box>
        </div>
          <DragDropContext onDragEnd={handleDragEnd}>
            <div>
              <Droppable droppableId={String(boardDisplayed.id)} direction='horizontal' type='lists'>
                {provided => (
                  <div className='BoardContainer' {...provided.droppableProps} ref={provided.innerRef}>
                    {boardDisplayed.lists.map((list, index) =>
                      <BoardList boardID={boardDisplayed.id} index={index} listID={list.id} key={list.id} title={list.title} cards={list.cards}/>
                    )}
                    <AddButton type="list" boardID={boardDisplayed.id} />
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          </DragDropContext>
      </div>
    </div>
  );
}

function mapStateToProps(state, props) {
  console.log(state);
  const { boards } = state;
  return { boards };
}

export default connect(mapStateToProps)(App);
