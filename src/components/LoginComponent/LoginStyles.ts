import { css, styled } from "styled-components";

const mainFont = 'Iowan Old Style'
const fontWeight = '400'
const mainColor = '#EEF2D1'

const commonButton = css`
  font-family: ${mainFont};
  font-weight: ${fontWeight};
  padding: 10px 30px;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.30);
`

export const Container = styled.div`
  font-family: ${mainFont};
  width: 90vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`

export const BackButton = styled.button`
  ${commonButton}
  background-color: #FFF;
  font-size: 20px;
`

export const BackButtonWrapper = styled.div`
  height: 9vh;
  width: 100%;
  display: flex;
  align-items: flex-end;
`

export const LoginTitle = styled.h3`
  font-family: ${mainFont};
  font-size: 36px;
  font-weight: ${fontWeight};
`

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-top: 75px;
`

export const LoginFormLabel = styled.label`
  font-family: ${mainFont};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  span {
    cursor: pointer;
    color: red;    
  }
`

export const LoginFormInput = styled.input`
  font-family: ${mainFont};
  width: 600px;
  padding: 20px 25px;
  border-radius: 20px;
  border: none;
  background-color: ${mainColor};
  color: rgba(0, 0, 0, 0.60);
  font-size: 24px;
  font-weight: ${fontWeight};
  outline: none;
`

export const LoginFormButtons = styled.div`
  margin-top: 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 22px;
  div {
    font-family: ${mainFont};
    font-size: 20px;
  }
`

export const Button = styled.button`
  ${commonButton}
  font-size: 24px;
  color: ${mainColor};
  background: #595D41;
`

export const Loading = styled.div`
  align-self: center;
  span {
    width: 70px !important;
    height: 70px !important;
    color: #595D41;
  }
`