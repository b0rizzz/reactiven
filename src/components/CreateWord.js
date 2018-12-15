import React, { Component } from 'react';
import CreateWordForm from './CreateWordForm';
import wordActions from '../actions/WordActions';
import wordStore from '../stores/WordStore';
import Auth from './users/Auth';
import { Success } from './common/Alerts';
import './CreateWord.css';

class CreateWord extends Component {
    constructor(props) {
        super(props);

        this.state = {
            word: {
                en: '',
                bg: '',
                _token: '',
                email: ''
            },
            display: 'hidden'
        };

        this.handleCreate = this.handleCreate.bind(this);

        wordStore.on(
            wordStore.eventTypes.WORD_CREATED,
            this.handleCreate
        );
    }

    componentWillUnmount() {
        wordStore.removeListener(
            wordStore.eventTypes.WORD_CREATED,
            this.handleCreate
        );
    }

    handleChange(event) {
        const target = event.target;
        const field = target.name;
        const value = target.value;
        const {word} = this.state;
        word[field] = value;

        this.setState({ word });
    }

    handleForm(event) {
        event.preventDefault();

        wordActions.createWord(this.state.word);
    }

    handleCreate(data) {
        if (!data.error) {
            let {word} = this.state;
            word['en'] = '';
            word['bg'] = '';
            
            this.setState({
                display: '',
                word
            });
        }
    }
    
    handleCloseAlert(event) {
        this.setState({display: 'hidden'});
    }

    render() {
        
        let successMessage = 'The word was successfully created.'

        return (
            <div className="container">
                <div id="createWordForm">
                    <h1>Create Word</h1>
                    <Success display={this.state.display} text={successMessage} closeAlert={this.handleCloseAlert.bind(this)} />
                    <CreateWordForm
                        word={this.state.word}
                        onChange={this.handleChange.bind(this)}
                        onSave={this.handleForm.bind(this)} />
                </div>
            </div>)
    }
    
    componentDidMount() {
        if( !Auth.isUserAuthenticated() ) {
            this.props.history.push('/login');
        } else {
            let {word} = this.state;
            word._token = Auth.getToken();
            word.email = Auth.getEmail();
            this.setState({ word });
        }
    }
}

export default CreateWord;