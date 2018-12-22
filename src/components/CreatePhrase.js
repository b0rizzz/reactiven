import React, { Component } from 'react';
import CreatePhraseForm from './CreatePhraseForm';
import wordActions from '../actions/WordActions';
import wordStore from '../stores/WordStore';
import Auth from './users/Auth';
import { Alert } from './common/Alert';
//~ import './CreateWord.css';

class CreatePhrase extends Component {
    constructor(props) {
        super(props);

        this.state = {
            //TODO this should be: formData
            phrase: {
                en: '',
                bg: '',
                _token: '',
                email: ''
            },
            display: 'hidden',
            message: 'The phrase was successfully created.',
            alertType: 'success'
        };

        this.handleCreate = this.handleCreate.bind(this);

        wordStore.on(
            wordStore.eventTypes.PHRASE_CREATED,
            this.handleCreate
        );
    }

    componentWillUnmount() {
        wordStore.removeListener(
            wordStore.eventTypes.PHRASE_CREATED,
            this.handleCreate
        );
    }

    handleChange(event) {
        const target = event.target;
        const field = target.name;
        const value = target.value;
        const {phrase} = this.state;
        phrase[field] = value;

        this.setState({ phrase });
    }

    handleForm(event) {
        event.preventDefault();

        wordActions.createPhrase(this.state.phrase);
    }

    handleCreate(data) {
        if (!data.error) {
            let {phrase} = this.state;
            phrase['en'] = '';
            phrase['bg'] = '';
            
            this.setState({
                display: '',
                alertType: 'success',
                message: 'The phrase was successfully created.',
                phrase
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
                    <h1>Create Phrase</h1>
                    <Alert type={alertType} display={this.state.display} text={message} closeAlert={this.handleCloseAlert.bind(this)} />
                    <CreatePhraseForm
                        phrase={this.state.phrase}
                        onChange={this.handleChange.bind(this)}
                        onSave={this.handleForm.bind(this)} />
                </div>
            </div>)
    }
    
    componentDidMount() {
        if( !Auth.isUserAuthenticated() ) {
            this.props.history.push('/login');
        } else {
            let {phrase} = this.state;
            phrase._token = Auth.getToken();
            phrase.email = Auth.getEmail();
            this.setState({ phrase });
        }
    }
}

export default CreatePhrase;