import { useState, useEffect } from 'react';
import axios from 'axios';
import { CONTACTS_ENDPOINT } from '../utils/config';


export const useContacts = () => {
    const [contacts, setContacts] = useState([]);
    const [error, setError] = useState(null);

    const fetchContacts = async () => {
        try {
            const response = await axios.get(CONTACTS_ENDPOINT);
            setContacts(response.data.data);
        } catch (err) {
            setError(err.message);
        }
    };

    const fetchOneContact = async (id) => {
        try {
            const response = await axios.get(`${CONTACTS_ENDPOINT}/${id}`);
            console.log(response.data.data);
            return response.data.data;
        } catch (err) {
            setError(err.message);
        }
    };

    const createContact = async (contact) => {
        try {
            const response = await axios.post(CONTACTS_ENDPOINT, contact);
            console.log(response.data.data);
            fetchContacts()
        } catch (err) {
            setError(err.message);
        }
    };

    const updateContact = async (id, updatedContact) => {
        try {
            const response = await axios.patch(`${CONTACTS_ENDPOINT}/${id}`, updatedContact);
            console.log(response.data.data);
            fetchContacts();
        } catch (err) {
            setError(err.message);
        }
    };

    const deleteContact = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:3000/api/v1/contacts/${id}`);
            console.log(response.data.data);
            fetchContacts();
        } catch (err) {
            setError(err.message);
        }
    };

    useEffect(() => {
        fetchContacts();
    }, []);

    return { contacts, error, createContact, fetchOneContact, updateContact, deleteContact };
};