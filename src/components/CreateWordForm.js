import React from 'react';
import Input from './forms/Input';

const CreateWordForm = (props) => (
    <form>
        <Input type='text' name='en' autocapitalize='off' value={props.word.en} onChange={props.onChange} />
        <br />
        <Input type='text' name='transcription' autocapitalize='off' value={props.word.transcription} onChange={props.onChange} />
        <br />
        <Input type='text' name='bg' autocapitalize='off' value={props.word.bg} onChange={props.onChange} />
        <br/>
        <input type='submit' value="Save" onClick={props.onSave} />
    </form>
);

export default CreateWordForm;