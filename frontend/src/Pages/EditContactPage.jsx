import { EditContactForm } from "../components/EditContactForm"
import { Footer } from "../components/Footer"


export const EditContactPage = () => {
    
    return (
        <>
        <div className="card p-1 m-1">
          <div className="card-header">
            <div className="card-title text-center">
              <h3>Edit a Contact</h3>
              
            </div>
          </div>
          <div className="card-body">
            <div className="card-text">
              <EditContactForm />
            </div>
          </div>
          <Footer/>
        </div>
      </>
    )
}
