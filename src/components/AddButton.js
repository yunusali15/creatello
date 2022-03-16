import { Button, Card, Icon } from '@material-ui/core';
import TextareaAutosize from 'react-textarea-autosize';
import AddIcon from '@material-ui/icons/Add';
import React from 'react';
import './AddButton.css';
import { addList } from '../actions/listactions.js'
import { addCard } from '../actions/cardactions.js'
import { connect } from 'react-redux'



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
            formOpen: false
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

        if (text) {
            dispatch(addList(text));
        }
    }

    handleAddCard = () => {
        const { dispatch } = this.props;
        const { text } = this.state;
        const { listID } = this.props;

        if (text) {
            dispatch(addCard(text, listID));
        }
    }

    renderAddButton = () => {
        const { list } = this.props;

        const addTitle = list ? "Add New List" : "Add New Card";

        return <div class={`addButtonContainer ${list ? 'List' : "Card"}`} onClick={this.handleOpenForm}>
            <AddIcon />
            <p>{addTitle}</p>
        </div>
    }

    renderForm = () => {

        const { list } = this.props;

        const placeholder = list ? "Enter title for New List..." : "Enter Text for New Card...";
        const buttonText = list ? "Add List" : "Add Card";

        return <div>
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
                onMouseDown={list? this.handleAddList : this.handleAddCard} >
                {buttonText}
            </Button>
        </div>

    }


    render() { return this.state.formOpen ? this.renderForm() : this.renderAddButton() }
}

export default connect()(AddButton);

