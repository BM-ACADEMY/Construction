import React from 'react';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import logo from '../../assets/constructionlogo.png'; // Import the logo

const Whatsapp = () => {
  return (
    <div className="z-50 relative"> {/* Ensure high z-index */}
      <FloatingWhatsApp
        phoneNumber="918015359971" // Keep existing or update if provided
        accountName="Multiverse International" // Updated Name
        avatar={logo} // Use the imported logo
        statusMessage="Online"
        chatMessage="Hello! 👋 How can we help you with your construction project today?" // Updated Message
        placeholder="Type a message..."
        darkMode={false} // Changed to false to match light theme, or keep true if preferred
        allowEsc
        allowClickAway
        notification
        notificationSound
      />
    </div>
  )
}

export default Whatsapp;