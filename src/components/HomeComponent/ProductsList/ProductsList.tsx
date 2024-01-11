import React from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { ProductsListProps, ProductType } from "../../../Types/types";
import { Button, Container, DeleteButton, Product, ProductImage, Products, SaveButton, SaveButtonContainer, Text, Wrapper } from './ProductsListStyles';

const ProductsList: React.FC<ProductsListProps> = ({ products, addCart, onDelete , isLoad, error }) => {
  const navigate = useNavigate()

  if (!products) {
    return (
      <Container>
        <div>Список товаров пуст!</div>
      </Container>
    )
  }
  return (
    <Wrapper>
      <Products>
        {products.map((product: ProductType) => {
          const { title, price, image, id } = product
          return (
            <Product key={id}>
              <ProductImage onClick={() => navigate(`/product-description/${id}`)}>
                  <img src={image} alt="Картинка товара"/>
              </ProductImage>
              <DeleteButton onClick={() => onDelete(id)}>
                  <img src='https://www.svgrepo.com/download/73995/delete.svg' alt="" />
              </DeleteButton>
              <Text>{title}</Text>
              <Text>{price} тыс.</Text>
              <Button onClick={() => navigate(`/edit-product/${id}`)}>Редактировать</Button>
              <Button onClick={() => addCart(product)}>Добавить в корзину</Button>
            </Product>
          )
        })}
      </Products>
      <SaveButtonContainer>
        <Link to='/create-product'><SaveButton>Создать товар</SaveButton></Link>
      </SaveButtonContainer>
    </Wrapper>
  )
}

export default ProductsList