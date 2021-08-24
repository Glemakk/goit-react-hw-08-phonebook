import ContactForm from '../../components/ContactForm'
import ContactList from '../../components/ContactList'
import Filter from '../../components/Filter'

const ContactsView = () => (
  <section>
    <div>
      <ContactForm />
      <Filter />
    </div>
    <div>
      <ContactList />
    </div>
  </section>
)

export default ContactsView
