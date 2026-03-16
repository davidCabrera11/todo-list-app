import EditIcon from '../assets/ic_edit.svg?react';
import DeleteIcon from '../assets/ic_delete.svg?react';

interface NoteProps {
  note: string;
}

export const Note = ({ note }: NoteProps) => {
  return (
    <div className='note-item'>
      <div className='note-content'>
        <label>
          <input type='checkbox' name='note' id='note' />
        </label>
        <p>{note}</p>
        <EditIcon className='edit-icon' />
        <DeleteIcon className='delete-icon' />
      </div>
    </div>
  );
};
