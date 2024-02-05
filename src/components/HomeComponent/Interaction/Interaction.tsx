import React from 'react';
import { useForm } from 'react-hook-form';
import { downArrowIcon, upArrowIcon } from '../../../images';
import { InteractionProps } from '../types';
import './Interaction.scss';

const Interaction: React.FC<InteractionProps> = ({
  handleProductAction,
  onSubmitSearch,
  onChangeSearch,
  showResetButton,
  priceSortingState,
  dateSortingState,
}) => {
  const { register, handleSubmit, resetField } = useForm<{ search: string }>();

  return (
    <div className="interaction_wrapper">
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
      <div className="sorting">
        <div className="sorting_title">Сортировать по:</div>
        <div className="sorting_buttons">
          <section className="sorting_section">
            <p>Ценам</p>
            <div className="sorting_icon-wrapper">
              {priceSortingState ? (
                <img
                  alt="Up Arrow"
                  onClick={() => handleProductAction('filters', undefined, 'firstCheap')}
                  src={upArrowIcon}
                />
              ) : (
                <img
                  alt="Down Arrow"
                  onClick={() => handleProductAction('filters', undefined, 'firstExpensive')}
                  src={downArrowIcon}
                />
              )}
            </div>
          </section>
          <section className="sorting_section">
            <p>Дате</p>
            <div className="sorting_icon-wrapper">
              {dateSortingState ? (
                <img
                  alt="Up Arrow"
                  onClick={() => handleProductAction('filters', undefined, 'firstNew')}
                  src={upArrowIcon}
                />
              ) : (
                <img
                  alt="Down Arrow"
                  onClick={() => handleProductAction('filters', undefined, 'firstOld')}
                  src={downArrowIcon}
                />
              )}
            </div>
          </section>
          <button
            className="wtihout_filters_button"
            onClick={() => handleProductAction('filters', undefined, 'withoutFilter')}
          >
            Без фильтров
          </button>
        </div>
      </div>
    </div>
  );
};

export default Interaction;
