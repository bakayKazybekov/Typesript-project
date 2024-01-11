import { styled } from "styled-components";

export const LogOutWrapper = styled.div`
  display: flex;
  align-items: end;
  gap: 30px;
  margin-right: 45px;
`

export const AvatarImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 30px;
`

export const LoginBtn = styled.button`
  font-family: Iowan Old Style;
  font-size: 16px;
  font-weight: 400;
  background: inherit;
  border: 1px solid rgba(0, 0, 0, 0.30);
  border-radius: 10px;
  padding: 10px 30px;
  cursor: pointer;
`