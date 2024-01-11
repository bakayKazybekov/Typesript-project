import { styled } from "styled-components";

export const Wrapper = styled.div`
  width: 94vw;
  margin: 30px auto 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const Search = styled.form`
  display: flex;
  gap: 10px;
`

export const SearchInput = styled.input`
  width: 600px;
  padding: 15px 20px;
  font-size: 14px;
  font-weight: 400;
  border-radius: 10px;
  border: 1px solid rgba(94, 93, 93, 0.20);
  background: #FFF;
  outline: none;
`

export const SearchButton = styled.button`
  padding: 10px 30px;
  background-color: #FFF;
  border-radius: 10px;
  border: 1px solid rgba(94, 93, 93, 0.20);
  cursor: pointer;
`

export const Sorting = styled.div`
  display: flex;
  gap: 80px;
`

export const SortingTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
`

export const SearchButtons = styled.div`
  display: flex;
  gap: 20px;
  button {
      background-color: #FFF;
      border: none;
      cursor: pointer;
  }
`

export const WtihoutFiltersButton = styled.button`
  color: #1E9245;
`