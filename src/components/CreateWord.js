import React, { Component } from 'react';
import CreateWordForm from './CreateWordForm';
import wordActions from '../actions/WordActions';
import wordStore from '../stores/WordStore';
import Auth from './users/Auth';
import { Alert } from './common/Alert';
import './CreateWord.css';

class CreateWord extends Component {
    constructor(props) {
        super(props);

        this.state = {
            word: {
                en: '',
                transcription: '',
                bg: '',
                level: '',
                _token: '',
                email: ''
            },
            display: 'hidden',
            message: 'The word was successfully created.',
            alertType: 'success'
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
        
        if (field === 'level' && value !== '') {
            let level = parseInt(value);
            
            if ( level <= 5 && level > 0) {
                word[field] = level;
            }
            
        } else {
            word[field] = value;
        }

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
            word['transcription'] = '';
            word['bg'] = '';
            word['level'] = '';
            
            this.setState({
                display: '',
                alertType: 'success',
                message: 'The word was successfully created.',
                word
            });
        } else if (data.error) {
            this.setState({
                display: '',
                alertType: 'danger',
                message: data.errors[0]['message']
            });
        }
    }
    
    handleCloseAlert(event) {
        this.setState({display: 'hidden'});
    }

    render() {
        
        let {message, alertType} = this.state;

        return (
            <div className="container">
                <div id="createWordForm">
                    <h1>Create Word</h1>
                    <Alert type={alertType} display={this.state.display} text={message} closeAlert={this.handleCloseAlert.bind(this)} />
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