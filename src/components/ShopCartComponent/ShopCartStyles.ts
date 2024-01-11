import { styled } from "styled-components";

export const Wrapper = styled.div`
  width: 93vw;
  margin: 85px auto 50px;
  display: flex;
  flex-direction: column;
  gap: 50px;
`

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const ShopCartTitle = styled.div`
  text-align: center;
  font-size: 32px;
  font-weight: 600;
`

export const ClearButton = styled.button`
  align-self: end;
  background: inherit;
  border: none;
  color: #F41E1E; 
  cursor: pointer;
`

export const Products = styled.ul`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 85px 50px;
`

export const Product = styled.li`
  display: flex;
  flex-direction: column;
  gap: 13px;
  align-items: center;
`

export const ProductImage = styled.div`
  width: 220px;
  height: 220px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
  }
`

export const ProductText = styled.div`
  font-size: 14px;
  font-weight: 500;
`

export const DeleteButton = styled.button`
  color: #F41E1E;
  background: inherit;
  border: none;
  cursor: pointer;
`