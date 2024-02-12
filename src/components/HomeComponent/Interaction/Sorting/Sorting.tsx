import { SortingProps } from '../../types';
import '../Interaction.scss';

const Sorting: React.FC<SortingProps> = ({ handleProductAction, priceSortingState, dateSortingState }) => {
  const priceActive = priceSortingState ? 'sorting_active' : '';
  const dateActive = dateSortingState ? 'sorting_active' : '';
  const withoutActive = !priceSortingState && !dateSortingState ? 'sorting_active' : '';

  return (
    <div className="sorting">
      <div className="sorting_title">Сортировать по:</div>
      <div className="sorting_buttons">
        <section className="sorting_section">
          <p>Ценам</p>
          {priceSortingState ? (
            <div
              onClick={() => handleProductAction('filters', undefined, 'firstCheap')}
              className={`sorting_button icon-arrow-down ${priceActive}`}
            ></div>
          ) : (
            <div
              onClick={() => handleProductAction('filters', undefined, 'firstExpensive')}
              className={`sorting_button icon-arrow-up ${priceActive}`}
            ></div>
          )}
        </section>
        <section className="sorting_section">
          <p>Дате</p>
          {dateSortingState ? (
            <div
              onClick={() => handleProductAction('filters', undefined, 'firstNew')}
              className={`sorting_button icon-arrow-down ${dateActive}`}
            ></div>
          ) : (
            <div
              onClick={() => handleProductAction('filters', undefined, 'firstOld')}
              className={`sorting_button icon-arrow-up ${dateActive}`}
            ></div>
          )}
        </section>
        <section className="sorting_section">
          <div
            className={`sorting_button ${withoutActive}`}
            onClick={() => handleProductAction('filters', undefined, 'withoutFilter')}
          >
            Без фильтров
          </div>
        </section>
      </div>
    </div>
  );
};

export default Sorting;
