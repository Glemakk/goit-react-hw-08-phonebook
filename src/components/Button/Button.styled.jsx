import styled from '@emotion/styled'

export const CustomButton = styled.button`
  /* display: block; */
  font-size: 18px;
  cursor: pointer;
  font-weight: 700;
  /* font-weight: 400; */
  line-height: 1.33;
  width: 320px;
  max-width: 100%;
  background-color: orange;
  margin-top: 30px;
  margin-left: 28px;
  /* margin-left: auto; */
  /* margin-right: auto; */
  border: none;
  outline: none;
  border-radius: 4px;
  text-align: center;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
  &:focus,
  &:hover {
    box-shadow: 2px 3px 17px 0px rgb(0 0 0 / 78%), -1px 0px 2px rgb(0 0 0 / 14%),
      0px 2px 1px rgb(0 0 0 / 20%);
    transition: box-shadow 200ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`
export const AuthButton = styled.button`
  display: block;
  font-size: 18px;
  cursor: pointer;
  font-weight: 700;
  /* font-weight: 400; */
  line-height: 1.33;
  width: 320px;
  max-width: 100%;
  background-color: orange;
  margin-top: 30px;
  /* margin-left: 28px; */
  margin-left: auto;
  margin-right: auto;
  border: none;
  outline: none;
  border-radius: 4px;
  text-align: center;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
  &:focus,
  &:hover {
    box-shadow: 2px 3px 17px 0px rgb(0 0 0 / 78%), -1px 0px 2px rgb(0 0 0 / 14%),
      0px 2px 1px rgb(0 0 0 / 20%);
    transition: box-shadow 200ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`
