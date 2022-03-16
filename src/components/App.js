import React from 'react';
import { connect } from 'react-redux';
import { BoardCard } from './BoardCard';
import { BoardList } from './BoardList';
import './App.css'
import AddButton from './AddButton';

function App(props) {

  const lists = props.lists;

  return (
    <div className="App">
      <h2>Surer Board</h2>
      <div className='BoardContainer'>
        {lists.map(list =>
          <BoardList listID ={list.id} key={list.id} title={list.title} cards={list.cards} />
        )}
        <AddButton list />
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
