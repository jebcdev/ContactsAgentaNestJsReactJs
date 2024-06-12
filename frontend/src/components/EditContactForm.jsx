import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { ContactsContext } from "../contexts/ContactsContext.jsx";
import { useParams } from "react-router-dom"

export const EditContactForm = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const { error, fetchOneContact, updateContact, } = useContext(ContactsContext)

    const [toUpdateContact, setToUpdateContact] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
    })

    const handleChange = (e) => {
        const { id, value } = e.target;
        setToUpdateContact({
            ...toUpdateContact,
            [id]: value
        })
    }



    const handleSubmit = async (e) => {
        e.preventDefault();

        await updateContact(id, toUpdateContact);

        if (error) return alert("Error in creating contact")
        alert("Contact Updated Successfully")
        navigate("/");
    }

    const fetchContact = async () => {
        const contact = await fetchOneContact(id);
        setToUpdateContact({
            name: contact.name || "",
            email: contact.email || "",
            phone: contact.phone || "",
            address: contact.address || "",
            city: contact.city || ""
        });
    }


    useEffect(() => {
        fetchContact();
    }, [])


    return (
        <>


            <form onSubmit={(e) => handleSubmit(e)}>
                {/* Name */}
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" value={toUpdateContact.name} onChange={(e) => handleChange(e)} required />
                </div>
                {/* Name */}

                {/* Email and Phone */}
                <div className="row">
                    <div className="col-6 mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" value={toUpdateContact.email} onChange={(e) => handleChange(e)} required />
                    </div>

                    <div className="col-6 mb-3">
                        <label htmlFor="phone" className="form-label">Phone</label>
                        <input type="phone" className="form-control" id="phone" value={toUpdateContact.phone} onChange={(e) => handleChange(e)} required />
                    </div>
                </div>
                {/* Email and Phone */}

                {/* Address and City */}
                <div className="row">
                    <div className="col-6 mb-3">
                        <label htmlFor="address" className="form-label">Address</label>
                        <input type="address" className="form-control" id="address" value={toUpdateContact.address} onChange={(e) => handleChange(e)} required />
                    </div>

                    <div className="col-6 mb-3">
                        <label htmlFor="city" className="form-label">City</label>
                        <input type="city" className="form-control" id="city" value={toUpdateContact.city} onChange={(e) => handleChange(e)} required />
                    </div>
                </div>
                {/* Address and City */}


                {/* Buttons */}
                <div className="row text-center">
                    <div className="col-6">
                        <button type="submit" className="btn btn-secondary">Submit</button>
                    </div>
                    <div className="col-6">
                        <Link to="/" className="btn btn-secondary">Back</Link>
                    </div>
                </div>
                {/* Buttons */}
            </form>
        </>
    )
}
