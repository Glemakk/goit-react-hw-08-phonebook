// import s from '../../index.css'
// console.log('s >>', s)

import defaultBackground from '../../images/laptop1.jpg'

import { Title, Img } from './ContactsView/ContactsView.styled'

const HomeView = () => {
  const background = defaultBackground
  return (
    <>
      <Title>
        This is your private "Phonebook" where you can safely store, add and
        safe you contacts
      </Title>
      <div>
        <Img src={background} alt="" width="1200" />
      </div>
    </>
  )
}
export default HomeView
