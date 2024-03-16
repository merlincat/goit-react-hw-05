import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
const ContactList = ({ visibleContcats, onDelete }) => {
  return (
    <ul className={css.contactsList}>
      {visibleContcats.map(contact => (
        <li key={contact.id} className={css.contactListItem}>
          <Contact data={contact} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
};
export default ContactList;
