import React from 'react';
import { useForm } from 'react-hook-form';
import { downArrowIcon, upArrowIcon } from '../../../images';
import { InteractionProps } from '../types';
import styles from './Interaction.module.scss';

const Interaction: React.FC<InteractionProps> = ({ onSubmitSearch, onChangeSearch, filters }) => {
  const { register, handleSubmit } = useForm<{ search: string }>();

  return (
    <div className={styles.wrapper}>
      <form className={styles.search} onSubmit={handleSubmit(onSubmitSearch)}>
        <input
          className={styles.search_input}
          type="text"
          placeholder="Введите поисковик"
          {...register('search', { onChange: onChangeSearch })}
        />
        <button className={styles.search_button}>Поиск</button>
      </form>
      <div className={styles.sorting}>
        <div className={styles.sorting_title}>Сортировать по:</div>
        <div className={styles.sorting_buttons}>
          <section className={styles.sorting_section}>
            <p>Ценам</p>
            <div className={styles.icon_wrapper}>
              <img alt="Up Arrow" onClick={() => filters('firstCheap')} src={upArrowIcon} />
            </div>
            <div className={styles.icon_wrapper}>
              <img alt="Down Arrow" onClick={() => filters('firstExpensive')} src={downArrowIcon} />
            </div>
          </section>
          <section className={styles.sorting_section}>
            <p>Дате</p>
            <div className={styles.icon_wrapper}>
              <img alt="Up Arrow" onClick={() => filters('firstNew')} src={upArrowIcon} />
            </div>
            <div className={styles.icon_wrapper}>
              <img alt="Down Arrow" onClick={() => filters('firstOld')} src={downArrowIcon} />
            </div>
          </section>
          {/* DRY */}
          <button className={styles.wtihout_filters_button} onClick={() => filters('withoutFilter')}>
            Без фильтров
          </button>
        </div>
      </div>
    </div>
  );
};

export default Interaction;
