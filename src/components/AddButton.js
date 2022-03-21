import { Button, Card, Icon, Input, TextField } from '@material-ui/core';
import TextareaAutosize from 'react-textarea-autosize';
import AddIcon from '@material-ui/icons/Add';
import React from 'react';
import './AddButton.css';
import { addList } from '../actions/listactions.js'
import { addCard } from '../actions/cardactions.js'
import { connect } from 'react-redux'
import { addBoard } from '../actions/boardactions';



class AddButton extends React.Component {

    state = {
        formOpen: false,
        text: ""
    }


    handleOpenForm = () => {
        this.setState({
            formOpen: true
        })
    }

    handleCloseForm = () => {
        this.setState({
            formOpen: false,
            text: ""
        })
    }

    handleInputChange = e => {
        this.setState({
            text: e.target.value
        })
    }

    handleAddList = () => {

        const { dispatch } = this.props;
        const { text } = this.state;
        const { boardID } = this.props;

        if (text) {
            dispatch(addList(text, boardID));
        }
    }

    handleAddCard = () => {
        const { dispatch } = this.props;
        const { text } = this.state;
        const { listID } = this.props;
        const { boardID } = this.props;

        if (text) {
            console.log(text + " " + listID + " " + boardID);
            dispatch(addCard(text, listID, boardID));
        }
    }

    handleAddBoard = () => {
        const { dispatch } = this.props;
        const { text } = this.state;

        if (text) {
            dispatch(addBoard(text));
        }
    }

    renderAddButton = () => {
        const { type } = this.props;
        let addTitle = '';
        if (type === "board") {
            addTitle = "Add New Board";
        } else if (type == "list") {
            addTitle = "Add New List";
        } else {
            addTitle = "Add New Card";
        }

        return <div class={`addButtonContainer ${type}`} onClick={this.handleOpenForm}>
            <AddIcon />
            <p>{addTitle}</p>
        </div>
    }

    renderForm = () => {

        const { type } = this.props;

        let placeholder = "";
        let buttonText = "";
        let mouseDownfunc = "";

        if (type === "board") {
            buttonText = "Add Board";

            return ( <div>
                <Input id="outlined-basic" placeholder="Board 1" autoFocus style={{backgroundColor: "white", marginLeft:"8px"}} value={this.state.text} onInput={this.handleInputChange} onBlur={this.handleCloseForm}/>
                <Button
                    className="formSubmitButton"
                    variant='contained'
                    style={{ color: "white", backgroundColor: "#5aac44", margin: "8px" }}
                    onMouseDown={this.handleAddBoard} >
                    {buttonText}
                </Button>
            </div>);

        } else if (type == "list") {
            placeholder = "Enter title for New List...";
            buttonText = "Add List";
        } else {
            placeholder = "Enter Text for New Card...";
            buttonText = "Add Card";
        }

        return  (<div>
                    <Card className='addFormContainer'>
                        <TextareaAutosize className="formTextArea" placeholder={placeholder}
                            autoFocus
                            onBlur={this.handleCloseForm}
                            value={this.state.text}
                            onInput={this.handleInputChange}
                        />
                    </Card>
                    <Button
                        className="formSubmitButton"
                        variant='contained'
                        style={{ color: "white", backgroundColor: "#5aac44", margin: "8px" }}
                        onMouseDown={type==='list' ? this.handleAddList : this.handleAddCard} >
                        {buttonText}
                    </Button>

                </div>
        );

    }


    render() { return this.state.formOpen ? this.renderForm() : this.renderAddButton(); }
}

export default connect()(AddButton);

