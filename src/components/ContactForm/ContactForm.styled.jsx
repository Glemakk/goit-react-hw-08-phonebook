import styled from '@emotion/styled'

export const Form = styled.form`
  padding: 15px;
`

export const InputDiv = styled.div`
  display: flex;
  justify-content: center;
`
export const Input = styled.input`
  width: 320px;
  max-width: 100%;
  height: 35px;
  display: block;
  padding: 3px 10px;
  border: 2px solid rgba(33, 33, 33, 0.2);
  box-sizing: border-box;
  border-radius: 4px;
  &:focus,
  &:hover {
    border-color: #00adffa8;
    outline: none;
    transition: border-color 350ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`
