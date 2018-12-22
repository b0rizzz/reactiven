import React from 'react';
import Input from './forms/Input';

const CreatePhraseForm = (props) => (
    <form>
        <Input type='text' name='en' value={props.phrase.en} onChange={props.onChange} />
        <br />
        <Input type='text' name='bg' value={props.phrase.bg} onChange={props.onChange} />
        <br/>
        <input type='submit' value="Save" onClick={props.onSave} />
    </form>
);

export default CreatePhraseForm;