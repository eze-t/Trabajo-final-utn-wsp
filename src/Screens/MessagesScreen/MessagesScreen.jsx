import { useContext } from "react"
import { useParams, useNavigate } from "react-router"
import ContactSidebar from "../../Components/ContactSidebar/ContactSidebar"
import { ContactDetailContext } from "../../Context/ContactDetailContext"

export default function MessagesScreen() {
    const { contact_id } = useParams()
    const navigate = useNavigate()

    const {
        contactSelected,
        loadingContact
    } = useContext(ContactDetailContext)

    return (
        <div>
        <button onClick={() => navigate("/")}>
            Volver
        </button>

        <ContactSidebar />

        {loadingContact ? (
            <p>Cargando...</p>
        ) : (
            <h2>Contacto: {contactSelected?.contact_name}</h2>
        )}
        </div>
    )
    }
