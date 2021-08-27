import React from 'react'

import { AuthButton } from './Button.styled'

function FormButton({ onClick, text }) {
  return <AuthButton onClick={onClick}>{text}</AuthButton>
}

export default FormButton
