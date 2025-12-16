/* 
Snippet para crear un componente de react
RFC = React Functional Component
*/


import React, { useContext } from 'react'
import { MessagesContext } from '../../Context/MessagesContext'
import { ContactListContext } from '../../Context/ContactListContext'

export default function ContactSidebar() {

    const { contactList } = useContext(ContactListContext)
    const { messagesByContact } = useContext(MessagesContext)

    return (
        <aside>
        {
            contactList.map(contact => {
            const messages = messagesByContact[contact.id] || []
            const lastMessage = messages[messages.length - 1]

            return (
                <div key={contact.id}>
                <h3>{contact.contact_name}</h3>

                <p className="last-message">
                    {lastMessage ? lastMessage.text : 'Sin mensajes'}
                </p>

                <span className="last-time">
                    {lastMessage?.timestamp}
                </span>
                </div>
            )
            })
        }
        </aside>
    )
}
