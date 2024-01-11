import { css, styled } from "styled-components";

const imageStyles = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const Wrapper = styled.div`
  width: 92vw;
  margin: 110px auto 40px;
  display: flex;
  flex-direction: column;
  gap: 70px;
`

export const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Products = styled.ul`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 40px 80px;
`

export const Product = styled.li`
  width: 180px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
`
export const ProductImage = styled.div`
  width: 170px;
  height: 170px;
  cursor: pointer;
  img {
    ${imageStyles}
    border-radius: 20px;
  }
`

export const Button = styled.button`
  background: inherit;
  border: none;
  cursor: pointer;
`

export const DeleteButton = styled.div`
  width: 25px;
  height: 25px;
  cursor: pointer;
  img {
    ${imageStyles}
  }
`

export const SaveButtonContainer = styled.div`
  align-self: end;
`

export const SaveButton = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 20px;
  padding: 10px 35px;
  font-size: 22px;
  background-color: #EEF2D1;
`

export const Text = styled.div`
  font-size: 14px;
  font-weight: 500;
`

export const Loading = styled.div`
  align-self: center;
  span {
    width: 70px !important;
    height: 70px !important;
    color: #595D41;
  }
`