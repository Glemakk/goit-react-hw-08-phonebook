import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { logIn } from '../operations/auth-operations'
import FormButton from '../../components/Button/FormButton'
import {
  Form,
  InputDiv,
  Input,
} from '../../components/ContactForm/ContactForm.styled'

const LoginView = () => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleChange = ({ target: { name, value } }) => {
    //   const { name, value } = event.currentTarget
    switch (name) {
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
    dispatch(logIn({ email, password }))
    clearForm()
  }

  const clearForm = () => {
    setEmail('')
    setPassword('')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <InputDiv>
        <label>
          email{' '}
          <Input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            // title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            autoComplete="off"
          ></Input>
        </label>
      </InputDiv>
      <InputDiv>
        <label>
          password{' '}
          <Input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            // title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            autoComplete="off"
          ></Input>
        </label>
      </InputDiv>
      <FormButton text="Log In" />
    </Form>
  )
}

export default LoginView

//=========================================

// const ContactForm = () => {
//   const [name, setName] = useState('')
//   const [number, setNumber] = useState('')
//   const dispatch = useDispatch()

//   const handleChange = (event) => {
//     const { name, value } = event.currentTarget

//     switch (name) {
//       case 'name':
//         setName(value)
//         break
//       case 'number':
//         setNumber(value)
//         break
//       default:
//         //можно вместо return написать, например, "Неподдерживаемый тип поля"
//         return
//     }
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()

//     const findContact = stateContacts.find((contact) =>
//       contact.name.includes(name),
//     )
//     if (findContact) {
//       toast.warn(`${name} is already in contacts`)
//       return
//     }
//     const newContact = { name, number }
//     dispatch(addItem(newContact)) &&
//       toast.success(`"${name}" added to contacts `, {
//         transition: Zoom,
//       })
//     clearForm()
//   }

//   const clearForm = () => {
//     setName('')
//     setNumber('')
//   }

//   return (
//     <div>
//       <Form onSubmit={handleSubmit}>
//         <label>
//           <h2>Name</h2>
//           <InputDiv>
//             <IconContext.Provider value={{ size: '23px' }}>
//               <FcBusinessContact />
//             </IconContext.Provider>
//             &nbsp;
//             <Input
//               type="text"
//               name="name"
//               value={name}
//               onChange={handleChange}
//               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//               title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
//               required
//               autoComplete="off"
//               placeholder="Bon Jovi"
//             />
//           </InputDiv>
//         </label>

//         <label>
//           <h2>Number</h2>
//           <InputDiv>
//             <IconContext.Provider value={{ size: '23px' }}>
//               <FcPhoneAndroid />
//             </IconContext.Provider>
//             &nbsp;
//             <Input
//               type="tel"
//               name="number"
//               value={number}
//               onChange={handleChange}
//               pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//               title="Номер телефона должен состоять из цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
//               required
//               autoComplete="off"
//               placeholder="123-456"
//             />
//           </InputDiv>
//         </label>
//         <Button text="Add contact" />
//       </Form>
//     </div>
//   )
// }

// export default ContactForm
