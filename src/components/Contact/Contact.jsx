import { FaUser } from 'react-icons/fa6';
import { FaPhoneAlt } from 'react-icons/fa';
import css from './Contact.module.css';
const Contact = ({ data, onDelete }) => {
  return (
    <>
      <div className={css.contactInfo}>
        <div className={css.contactWrap}>
          <p>
            <FaUser className={css.icon} />
            {data.name}
          </p>
          <p>
            <FaPhoneAlt className={css.icon} />
            {data.number}
          </p>
        </div>
        <button onClick={() => onDelete(data.id)} className={css.contactBtn}>
          Delete
        </button>
      </div>
    </>
  );
};

export default Contact;
