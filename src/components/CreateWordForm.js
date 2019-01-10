import React from 'react';
import Input from './forms/Input';

const CreateWordForm = (props) => (
    <form>
        <Input type='text' name='en' value={props.word.en} onChange={props.onChange} />
        <br />
        <Input type='text' name='transcription' value={props.word.transcription} onChange={props.onChange} />
        <br />
        <Input type='text' name='bg' value={props.word.bg} onChange={props.onChange} />
        <br/>
        <Input type='number' name='level' value={props.word.level} onChange={props.onChange} />
        <br/>
        <input type='submit' value="Save" onClick={props.onSave} />
    </form>
);

export default CreateWordForm;