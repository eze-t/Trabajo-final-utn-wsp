import { Routes, Route } from "react-router"
import ChatScreen from "./Screens/ChatScreen/ChatScreen"
import MessagesScreen from "./Screens/MessagesScreen/MessagesScreen"

import ContactListContextProvider from "./Context/ContactListContext"
import ContactDetailContextProvider from "./Context/ContactDetailContext"
import MessagesContextProvider from "./Context/MessagesContext"

import "./global.css"

function App() {
  return (
    <MessagesContextProvider>
      <ContactListContextProvider>
        <ContactDetailContextProvider>

          <Routes>
            <Route path="/" element={<ChatScreen />} />
            <Route path="/chat/:contact_id" element={<MessagesScreen />} />
          </Routes>

        </ContactDetailContextProvider>
      </ContactListContextProvider>
    </MessagesContextProvider>
  )
}

export default App
