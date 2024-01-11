import { styled } from "styled-components";

export const Wrapper = styled.div`
  width: 96vw;
  margin: 30px auto 0;
  display: flex;
  justify-content: space-between;
`

export const Nav = styled.nav`
  padding: 25px;
  border-radius: 20px;
  background-color: #EEF2D1;
`

export const List = styled.ul`
  display: flex;
  gap: 45px;
`

export const ListLink = styled.li`
  font-size: 20px;
  font-weight: 600;
  a {
    text-decoration: none;
    color: #000;
  }
`