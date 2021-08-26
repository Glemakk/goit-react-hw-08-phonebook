import styled from '@emotion/styled'

export const Span = styled.span`
  font-size: 18px;
  cursor: pointer;
  font-weight: 700;
  color: #fff;
  text-decoration: none;
  margin-right: 25px;
`
export const Img = styled.img`
  margin-right: 10px;
`
export const LogOutBtn = styled.button`
  font-size: 16px;
  cursor: pointer;
  font-weight: 700;
  line-height: 1.33;
  width: 85px;
  background-color: orange;
  border: none;
  outline: none;
  border-radius: 4px;
  &:focus,
  &:hover {
    box-shadow: 2px 3px 17px 0px rgb(255 255 255 / 78%),
      -1px 0px 2px rgb(0 0 0 / 14%), 0px 2px 1px rgb(0 0 0 / 20%);
    transition: box-shadow 200ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`
export const LogOutSpan = styled.span`
  margin-top: -1px;
  display: block;
`
