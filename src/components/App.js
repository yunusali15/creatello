import React from 'react';
import { connect } from 'react-redux';
import { BoardCard } from './BoardCard';
import { BoardList } from './BoardList';
import './App.css'

function App(props) {

  const lists = props.lists;

  return (
    <div className="App">
      <h2>Surer Board</h2>
      <div className='BoardContainer'>
        {lists.map(list =>
          <BoardList title={list.title} cards={list.cards} />
        )}
      </div>
    </div>
  );
}

function mapStateToProps(state, props) {
  console.log(state);
  const { lists } = state;
  return { lists };
}

export default connect(mapStateToProps)(App);
