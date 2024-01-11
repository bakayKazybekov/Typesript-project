import { styled } from "styled-components";

export const Container = styled.div`
  width: 95vw;
  margin: 55px auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 105px;
`

export const BackButtonContainer = styled.div`
  align-self: end;
  a {
    text-decoration: none;
    color: #000;
  }
`

export const BackButton = styled.div`
  font-size: 22px;
`

export const Wrapper = styled.div`
  width: 91vw;
  display: flex;
  flex-direction: column;
  gap: 60px;
`

export const DescriptionTitle = styled.h3`
  font-size: 30px;
  text-align: center;
`

export const Content = styled.div`
  width: 83vw;
  display: flex;
  justify-content: space-between;
`
export const DescriptionImage = styled.div`
  width: 600px;
  height: 600px;
  img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 20px;
  }
`
export const DescriptionText = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  div {
      font-size: 22px;
  }
`