import { CreateContactForm } from "../components/CreateContactForm"
import { Footer } from "../components/Footer"

export const CreateContactPage = () => {
  return (
    <>
      <div className="card p-1 m-1">
        <div className="card-header">
          <div className="card-title text-center">
            <h3>Create Contacts</h3>
            
          </div>
        </div>
        <div className="card-body">
          <div className="card-text">
            <CreateContactForm />
          </div>
        </div>
        <Footer/>
      </div>
    </>
  )
}
