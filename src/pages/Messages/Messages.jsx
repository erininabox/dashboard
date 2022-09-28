// Hierarchy of imports/data pathways:
// Messages.jsx imports:
    // MessageThread.jsx
        // - rendered on click
        // Imports MessageSingle.jsx 
            // - Imports ReadIndicator.jsx
        // Imports SendMessageForm.jsx
        // - Ingests info re: thread: read status, contact entity, content of messages
        // - Should only render going back a certain amount of messages and load additional messages as user scrolls. Look up how to implement progressive rendering
    // MessagesList.jsx
        // - Ingests list of message threads
    // ContactsList.jsx
        // - Needs to ingest list of contact entities
    // ContactsProfile.jsx
        // - rendered on click

import React from 'react'

const Messages = () => {
  return (
    <div>Messages</div>
  )
}

export default Messages