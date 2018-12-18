import React from 'react';

const CreateWordForm = (props) => (
    <form>
        <label htmlFor='en'>en</label>
        <input
            type='text'
            name='en'
            value={props.word.en}
            onChange={props.onChange}
        />
        <br />
        <label htmlFor='transcription'>transcription</label>
        <input
            type='text'
            name='transcription'
            value={props.word.transcription}
            onChange={props.onChange}
        />
        <br />
        <label htmlFor='bg'>bg</label>
        <input
            type='text'
            name='bg'
            value={props.word.bg}
            onChange={props.onChange}
        />
        <br/>
        <input type='submit' value="Save" onClick={props.onSave} />
    </form>
);

export default CreateWordForm;