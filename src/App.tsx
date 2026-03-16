import { AddButton } from './components/AddButton';
import { AddNoteForm } from './components/AddNoteForm';
import { NoteList } from './components/NoteList';
import { SearchBar } from './components/SearchBar';

function App() {
  const notes = ['NOTE #1', 'NOTE #2', 'NOTE #3'];

  return (
    <main className='container'>
      <h1>TODO LIST</h1>
      <SearchBar />
      <NoteList notes={notes} />
      <AddButton />
      <AddNoteForm />
    </main>
  );
}

export default App;
