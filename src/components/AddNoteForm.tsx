import React from 'react';

export const AddNoteForm = () => {
  return (
    <div className='add-note-container'>
      <div className='add-note-modal'>
        <h1>NEW NOTE</h1>
        <form className='new-note'>
          <input type='text' name='note' id='note' />
          <button>Apply</button>
        </form>
      </div>
    </div>
  );
};
