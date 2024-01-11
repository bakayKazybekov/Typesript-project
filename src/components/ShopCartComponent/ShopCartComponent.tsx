import React from "react"
import { ShopCartProps } from "../../Types/types"
import { ClearButton, DeleteButton, Header, Product, ProductImage, Products, ProductText, ShopCartTitle, Wrapper } from "./ShopCartStyles"

const ShopCartComponent: React.FC<ShopCartProps> = ({ products, onDelete, onClear }) => {

  return (
    <Wrapper>
      <Header>
        <ShopCartTitle>Корзина</ShopCartTitle>
        <ClearButton onClick={onClear}>Очистить корзину</ClearButton>
      </Header>
      <Products>
        { products.length === 0 ? <div>Корзина пуста!</div> : products.map((product) => {
          const { title, price, image, uniqueId } = product
          return (
            <Product key={uniqueId}>
              <ProductImage>
                  <img src={image} alt=""/>
              </ProductImage>
              <ProductText>{title}</ProductText>
              <ProductText>{price} тыс.</ProductText>
              <DeleteButton onClick={() => onDelete(uniqueId)}>Удалить из карзины</DeleteButton>
            </Product>
          )
        })}
      </Products>
    </Wrapper>
    )
}

export default ShopCartComponent