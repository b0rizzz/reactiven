import React, { Component } from 'react';

class CreateWord extends Component {
    //~ constructor(props) {
        //~ super(props);

        //~ this.state = {
            //~ word: {
                //~ en: '',
                //~ bg: ''
            //~ }
        //~ };

        //~ this.handleCreate = this.handleLogin.bind(this);

        //~ wordStore.on(
            //~ wordStore.eventTypes.WORD_CREATED,
            //~ this.handleWord
        //~ );
    //~ }

    //~ componentWillUnmount() {
        //~ wordStore.removeListener(
            //~ wordStore.eventTypes.WORD_CREATED,
            //~ this.handleCreate
        //~ );
    //~ }

    //~ handleChange(event) {
        //~ const target = event.target;
        //~ const field = target.name;
        //~ const value = target.value;
        //~ const {word} = this.state;
        //~ word[field] = value;

        //~ this.setState({ word });
    //~ }

    //~ handleForm(event) {
        //~ event.preventDefault();

        //~ wordActions.createWord(this.state.word);
    //~ }

    //~ handleCreate(data) {
        
        //~ if(!data.error) {
            //~ Auth.authenticateUser(data._token);
            //~ this.props.history.push('/lessons');
        //~ }
    //~ }

    render() {
        var headerStyle = {
          marginTop: '70px'
        };

        return (<h1 style={headerStyle}>Create Word</h1>)
    }
}

export default CreateWord;