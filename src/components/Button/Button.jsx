import React from 'react'
import { CustomButton, AuthButton } from './Button.styled'

function Button({ onClick, text }) {
  return <CustomButton onClick={onClick}>{text}</CustomButton>
}

// function FormButton({ onClick, text }) {
//   return <AuthButton onClick={onClick}>{text}</AuthButton>
// }

export default Button
// export default FormButton
