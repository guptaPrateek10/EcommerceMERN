import React from "react";
import "./styles.css";
const LogoutModal = ({ onClose }) => {
  const handleLogout = () => {
    // Perform any logout actions here (e.g., clear session, API calls, etc.)
    // Redirect to the home page after logout
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>You are now logged out</h3>
        <button onClick={handleLogout}>OK</button>
      </div>
    </div>
  );
};

export default LogoutModal;
