import React from "react"
import { Link } from "react-router-dom"
import { ProductDescriptionProps } from "../../Types/types"
import { BackButton, BackButtonContainer, Container, Content, DescriptionImage, DescriptionText, DescriptionTitle, Wrapper } from "./ProductDescriptionStyles"

const ProductDescriptionComponent: React.FC<ProductDescriptionProps> = ({ product, isLoad, error }) => {
  return (
        <Container>
            <BackButtonContainer>
                <Link to='/'><BackButton>Вернуться</BackButton></Link>
            </BackButtonContainer>
            <Wrapper>
                <DescriptionTitle>{product.title}</DescriptionTitle>
                <Content>
                    <DescriptionImage>
                        <img src={product.image} alt="" />
                    </DescriptionImage>
                    <DescriptionText>
                        <div>Описание</div>
                        <p>{product.description}</p>
                    </DescriptionText>
                </Content>
            </Wrapper>
        </Container>
    )
}

export default ProductDescriptionComponent