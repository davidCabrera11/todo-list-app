import { Note } from './Note';

interface NoteListProps {
  notes: string[];
}

export const NoteList = ({ notes }: NoteListProps) => {
  return (
    <>
      {notes.map((note, index) => (
        <Note key={index} note={note} />
      ))}
    </>
  );
};
