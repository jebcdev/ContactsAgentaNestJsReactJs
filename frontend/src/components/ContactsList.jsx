import { useContext } from "react"
import { ContactsContext } from "../contexts/ContactsContext.jsx";
import { Link } from "react-router-dom";
import { Footer } from "./Footer.jsx";

export const ContactsList = () => {
  const { contacts, error, deleteContact } = useContext(ContactsContext);

  const handleDeleteContact = (id) => {
    if (confirm("Are you sure you want to delete this contact?")) {
      deleteContact(id);
    }

    if (error) return alert("Error in deleting contact")

  }

  return (
    <>
      <div className="card m-1 p-1">
        <div className="card-header">
          <div className="card-title text-center">
            <h3>Contacts List</h3>
            <div className="card m-1 p-1">
              <Link to="/create" className="btn btn-secondary">Add Contacts</Link>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="card-text text-center">

            {
              (error || !contacts) ? (
                <div className="alert alert-dark" role="alert">
                  Something Went Wrong: {error}
                </div>
              ) : (
                <table className="table table-dark table-striped">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Phone</th>
                      <th scope="col">Address</th>
                      <th scope="col">City</th>
                      <th scope="col">Created At</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      contacts &&
                      contacts.map((contact) => {
                        return (
                          <tr key={contact.id}>
                            <th scope="row">{contact.id}</th>
                            <td>{contact.name}</td>
                            <td>{contact.email}</td>
                            <td>{contact.phone}</td>
                            <td>{contact.address}</td>
                            <td>{contact.city}</td>
                            <td>{new Date(contact.createdAt).toLocaleDateString()}</td>

                            <td>
                              <div>
                                <Link to={`/edit/${contact.id}`} className="btn btn-secondary btn-sm me-2 mb-2">Edit</Link>
                                <button onClick={() => handleDeleteContact(contact.id)} className="btn btn-secondary btn-sm">Delete</button>
                              </div>
                            </td>
                          </tr>
                        )
                      })
                    }

                  </tbody>
                </table>
              )
            }
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}