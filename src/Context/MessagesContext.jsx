import { createContext, useState } from "react"

export const MessagesContext = createContext()

export default function MessagesContextProvider({ children }) {

    const [messagesByContact, setMessagesByContact] = useState({
        1: [
        {
            id: 1,
            text: "Hola 👋",
            type: "received",
            timestamp: "10:32"
        },
        {
            id: 2,
            text: "Hola, ¿cómo estás?",
            type: "sent",
            timestamp: "10:33"
        }
        ],
        2: [
        {
            id: 1,
            text: "Buenas!",
            type: "received",
            timestamp: "09:15"
        }
        ]
    })

    const addMessage = (contactId, message) => {
        setMessagesByContact(prev => ({
        ...prev,
        [contactId]: [...(prev[contactId] || []), message]
        }))
    }

    return (
        <MessagesContext.Provider
        value={{
            messagesByContact,
            addMessage
        }}
        >
        {children}
        </MessagesContext.Provider>
    )
}
