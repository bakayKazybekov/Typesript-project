import { css, styled } from "styled-components";

const mainColor = '#EEF2D1'
const fontSize22 = '22px'
const fontWeight500 = '500'
const borderRadius20 = '20px'
const gap200 = '200px'

const commonButton = css`
  background-color: ${mainColor};
  border-radius: ${borderRadius20};
  border: none;
  padding: 15px 30px;
  font-size: ${fontSize22};
  font-weight: ${fontWeight500};
  cursor: pointer;
`

export const Wrapper = styled.div`
  width: 95vw;
  margin: 30px auto 30px;
  height: 95vh;
  display: flex;
  flex-direction: column;
  gap: ${gap200};
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const BackButton = styled.button`
  ${commonButton};
  align-self: start;
`

export const Content = styled.div`
  display: flex;
  /* justify-content: center; */
  padding-left: 30px;
  flex-wrap: wrap;
  gap: ${gap200};
`

export const AddImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 600px;
  border-radius: ${borderRadius20};
  background-color: ${mainColor};
  cursor: pointer;
  font-size: ${fontSize22};
  font-weight: ${fontWeight500};
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: ${borderRadius20};
  }
`

export const CreateProductForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
`

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  span {
      text-align: center;
      color: red;
  }
`

export const Fields = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 60px;
  input {
    width: 600px;
    border-radius: 10px;
    border: 1px solid rgba(106, 93, 93, 0.20);
    padding: 10px 20px;
    color: rgba(0, 0, 0, 0.40);
    font-size: ${fontSize22};
    font-weight: ${fontWeight500};
    outline: none;
  }
`

export const SaveButton = styled.button`
  ${commonButton};
  align-self: flex-end;
`
