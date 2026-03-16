import addIcon from '../assets/ic_add.svg';

export const AddButton = () => {
  return (
    <button className='add-btn'>
      <img src={addIcon} alt='Add' />
    </button>
  );
};
