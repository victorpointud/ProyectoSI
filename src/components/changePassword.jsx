import React, { useState } from 'react';
import { reauthenticateWithCredential, EmailAuthProvider, updatePassword } from "firebase/auth";

export const ChangePassword = ({ user, setIsOpen }) => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const credential = EmailAuthProvider.credential(user.email, oldPassword);

    reauthenticateWithCredential(user, credential)
      .then(() => {
        updatePassword(user, newPassword)
          .then(() => {
            setMessage('Contraseña cambiada exitosamente');
            setIsOpen(false);
          })
          .catch((error) => {
            setMessage('Error al cambiar la contraseña: ' + error.message);
          });
      })
      .catch((error) => {
        setMessage('Error al autenticar: ' + error.message);
      });
  };

  return (
    <div id="change-password-popup">
      <div className="change-password-content">
        <button className="close" onClick={() => setIsOpen(false)}>×</button>
        <h1>Cambiar Contraseña</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="oldPassword">Contraseña Antigua</label>
          <input
            type="password"
            id="oldPassword"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            required
          />
          <label htmlFor="newPassword">Contraseña Nueva</label>
          <input
            type="password"
            id="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
          {message && <p>{message}</p>}
          <button type="submit">Guardar</button>
        </form>
      </div>
    </div>
  );
};
