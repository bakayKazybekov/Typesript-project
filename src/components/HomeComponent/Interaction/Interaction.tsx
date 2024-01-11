import React from "react"
import { InteractionProps } from "../../../Types/types"
import { Search, SearchButton, SearchButtons, SearchInput, Sorting, SortingTitle, Wrapper, WtihoutFiltersButton } from "./InteractionStyles"

const Interaction: React.FC<InteractionProps> = ({ onSubmitSearch, onChangeSearch, filters }) => {
  return (
      <Wrapper>
          <Search onSubmit={onSubmitSearch}>
              <SearchInput onChange={onChangeSearch} type="text" placeholder='Введите поисковик'/>
              <SearchButton>Поиск</SearchButton>
          </Search>
          <Sorting>
              <SortingTitle>Сортировать по:</SortingTitle>
              <SearchButtons>
                  <button onClick={() => filters('firstCheap')}>Сначала дешевые</button>
                  <button onClick={() => filters('firstExpensive')}>Сначала дорогие</button>
                  <button onClick={() => filters('firstNew')}>Сначала новые</button>
                  <button onClick={() => filters('firstOld')}>Сначала старые</button>
                  <WtihoutFiltersButton onClick={() => filters('withoutFilter')}>Без фильтров</WtihoutFiltersButton>
              </SearchButtons>
          </Sorting>
      </Wrapper>
  )
}

export default Interaction