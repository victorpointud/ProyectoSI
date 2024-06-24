import React, { useState } from 'react';
import { signOut } from "firebase/auth";
import { auth } from './firebase';
import { ChangePassword } from './changePassword';

export const Profile = ({ user, setUser, setIsOpen }) => {
  const [isChangePasswordOpen, setIsChangePasswordOpen] = useState(false);

  const handleLogout = () => {
    signOut(auth).then(() => {
      setUser(null);
      setIsOpen(false);
    }).catch((error) => {
      console.error("Error al cerrar sesión:", error);
    });
  };

  const toggleChangePasswordPopup = () => {
    setIsChangePasswordOpen(!isChangePasswordOpen);
  };

  return (
    <div id="profile-popup">
      <div className="profile-content">
        <button className="close" onClick={() => setIsOpen(false)}>×</button>
        <h1>Perfil</h1>
        <p><strong>Fecha de Creación:</strong> {user.metadata.creationTime}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <button onClick={handleLogout}>Cerrar sesión</button>
        <button onClick={toggleChangePasswordPopup}>Cambiar Contraseña</button>
      </div>
      {isChangePasswordOpen && <ChangePassword user={user} setIsOpen={setIsChangePasswordOpen} />}
    </div>
  );
};
