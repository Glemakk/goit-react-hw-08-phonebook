import ContactForm from '../../../components/ContactForm'
import ContactList from '../../../components/ContactList'
import Filter from '../../../components/Filter'

import {
  PageTitle,
  ContactsContainer,
  ListContainer,
} from './ContactsView.styled'

const ContactsView = () => (
  <section>
    <PageTitle>Contacts</PageTitle>
    <ContactsContainer>
      <aside>
        <ContactForm />
      </aside>
      <ListContainer>
        <Filter />
        <ContactList />
      </ListContainer>
    </ContactsContainer>
  </section>
)

export default ContactsView
