import { signOut } from "firebase/auth";
import { auth } from './firebase';

export const Profile = ({ user, setUser, setProfileOpen, setChangePasswordOpen }) => {

  const handleLogout = () => {
    signOut(auth).then(() => {
      setUser(null);
      setProfileOpen(false);
    }).catch((error) => {
      console.error("Error al cerrar sesión:", error);
    });
  };

  const handleChangePassword = () => {
    setProfileOpen(false);
    setChangePasswordOpen(true);
  };

  return (
    <div id="profile-popup">
      <div className="profile-content">
        <button className="close" onClick={() => setProfileOpen(false)}>×</button>
        <h1>Perfil</h1>
        <p><strong>Fecha de Creación:</strong> {user.metadata.creationTime}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <button onClick={handleLogout}>Cerrar sesión</button>
        <button onClick={handleChangePassword}>Cambiar Contraseña</button>
      </div>
    </div>
  );
};