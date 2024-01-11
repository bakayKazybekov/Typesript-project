import { yupResolver } from "@hookform/resolvers/yup"
import { Alert, CircularProgress } from "@mui/material"
import React from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { CreateProductProps, ProductFormValues } from "../../Types/types"
import { createProductScheme } from "../../utils/scheme"
import { AddImage, BackButton, Container, Content, CreateProductForm, Fields, FormLabel, Loading, SaveButton, Wrapper } from "./CreateProductStyles"


const CreateProductComponent: React.FC<CreateProductProps> = ({ onSubmit, onImg, image, values, isLoad, error }) => {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ProductFormValues>({
    resolver: yupResolver(createProductScheme),
    values,
  })

  if (isLoad) {
    return (
      <Wrapper>
        <Loading>
          <CircularProgress/>
        </Loading>
      </Wrapper>
    )
  }
  if (error) {
    return (
      <Wrapper>
        <Alert severity="error">{error}</Alert>
      </Wrapper>
    )
  }
  
  return (
    <Wrapper>
      <BackButton onClick={() => navigate('/')}>Отмена</BackButton>
      <Container>
        <CreateProductForm onSubmit={handleSubmit(onSubmit)}>
          <Content>
            <AddImage onClick={onImg}>
              {!image ? <h4>Добавить фотографию</h4> : <img src={image} alt="Картинка товара"/>}
            </AddImage>
            <Fields>
              <FormLabel>
                <input placeholder='Введите название товара' {...register('title')}/>
                <span>{errors?.title?.message}</span>
              </FormLabel>
              <FormLabel>
                <input placeholder='Введите описание товара' {...register('description')}/>
                <span>{errors?.description?.message}</span>
              </FormLabel>
              <FormLabel>
                <input type="number" placeholder='Введите цену товара' {...register('price')}/>
                <span>{errors?.price?.message}</span>
              </FormLabel>  
            </Fields>
          </Content>
          <SaveButton>Сохранить</SaveButton>
        </CreateProductForm>
      </Container>  
    </Wrapper>
  )
  }

export default CreateProductComponent