import { useState } from 'react'
import { useDispatch } from 'react-redux'
// import { addItem } from '../contacts/contactsOperations'
// import { getItems } from '../contacts/contacts-selectors'

// import { toast, Zoom } from 'react-toastify'
// import { FcPhoneAndroid, FcBusinessContact } from 'react-icons/fc'
// import { IconContext } from 'react-icons'
import { register } from '../operations/auth-operations'
import Button from '../../components/Button'
import {
  Form,
  InputDiv,
  Input,
} from '../../components/ContactForm/ContactForm.styled'

const RegisterView = () => {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleChange = ({ target: { name, value } }) => {
    //   const { name, value } = event.currentTarget
    switch (name) {
      case 'name':
        return setName(value)
      case 'email':
        return setEmail(value)
      case 'password':
        return setPassword(value)
      default:
        //можно вместо return написать, например, "Неподдерживаемый тип поля"
        return
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(register({ name, email, password }))
    clearForm()
  }

  const clearForm = () => {
    setName('')
    setEmail('')
    setPassword('')
  }

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <InputDiv>
        <label>
          name
          <Input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            autoComplete="off"
          ></Input>
        </label>
      </InputDiv>
      <InputDiv>
        <label>
          email
          <Input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            // title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            // required
            autoComplete="off"
          ></Input>
        </label>
      </InputDiv>
      <InputDiv>
        <label>
          password
          <Input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            // title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            // required
            autoComplete="off"
          ></Input>
        </label>
      </InputDiv>
      <Button text="Add contact" type="submit" />
    </Form>
  )
}

export default RegisterView
