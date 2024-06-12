import PropTypes from 'prop-types';
import { useContacts } from './../hooks/useContacts.jsx'
import { ContactsContext } from './ContactsContext.jsx';


export const ContactsProvider = ({ children }) => {
    const { contacts, error, createContact, fetchOneContact, updateContact, deleteContact } = useContacts();
    return (
        <>
            <ContactsContext.Provider value={{ contacts, error, createContact, fetchOneContact, updateContact, deleteContact }}>

                {children}

            </ContactsContext.Provider>
        </>
    )

}


ContactsProvider.propTypes = {
    children: PropTypes.node,
}