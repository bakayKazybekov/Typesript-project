import { useForm } from 'react-hook-form';
import { SearchProps } from '../../types';
import '../Interaction.scss';

const Search: React.FC<SearchProps> = ({ handleProductAction, onSubmitSearch, onChangeSearch, showResetButton }) => {
  const { register, handleSubmit, resetField } = useForm<{ search: string }>();

  return (
    <form className="interaction_search" onSubmit={handleSubmit(onSubmitSearch)}>
      <input
        className="search_input"
        type="text"
        placeholder="Введите поисковик"
        {...register('search', { onChange: onChangeSearch })}
      />
      {showResetButton && (
        <button
          className="fields_reset-button"
          type="reset"
          onClick={() => {
            handleProductAction('resetSearch');
            resetField('search');
          }}
        >
          Очистить
        </button>
      )}
      <button className="search_button">Поиск</button>
    </form>
  );
};

export default Search;
