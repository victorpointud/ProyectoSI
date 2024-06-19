import UserIcon from "./UserIcon";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="ver-perfil">
      <div className="profile-page-rect" />
      <div className="ver-perfil-child" />
      <div className="ver-perfil-item" />
      <div className="rectangle-parent1">
        <div className="frame-child2" />
        <div className="navigation1">
          <div className="logo-container">
            <div className="screenshot-2024-04-29-at-715-container">
              <img
                className="screenshot-2024-04-29-at-7152"
                loading="lazy"
                alt=""
                src="/screenshot-20240429-at-715-1@2x.png"
              />
            </div>
            <div className="unimet-store-identity-container2">
              <p className="unimet-store2">Unimet Store</p>
              <p className="identity-coffee2">{`Identity Coffee & Bar`}</p>
            </div>
          </div>
        </div>
        <img
          className="divider-icon1"
          loading="lazy"
          alt=""
          src="/vector1.svg"
        />
        <div className="menu">
          <div className="menu-items">
            <div className="item-container">
              <img className="item-icon" alt="" src="/vector-11.svg" />
              <div className="item-label">
                <div className="inicio2">INICIO</div>
              </div>
            </div>
          </div>
          <div className="contact">
            <div className="contact-item">
              <div className="contact-label">
                <div className="contact-details">
                  <img className="phone-icon1" alt="" src="/vector-21.svg" />
                  <img className="email-icon1" alt="" src="/vector-31.svg" />
                </div>
              </div>
              <div className="contacto1">CONTACTO</div>
            </div>
            <div className="products">
              <div className="product-item">
                <div className="product-label">
                  <img className="product-icon1" alt="" src="/vector-41.svg" />
                  <div className="product-name">
                    <div className="productos1">PRODUCTOS</div>
                  </div>
                </div>
              </div>
              <div className="location">
                <img
                  className="location-icon1"
                  loading="lazy"
                  alt=""
                  src="/location.svg"
                />
                <div className="location-name">
                  <div className="ubicacin1">UBICACIÓN</div>
                </div>
              </div>
              <div className="about-us">
                <div className="about-us-item">
                  <img
                    className="people-icon1"
                    loading="lazy"
                    alt=""
                    src="/people.svg"
                  />
                  <div className="about-us-label">
                    <div className="concenos2">CONÓCENOS</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="user-actions1">
        <div className="action-items">
          <div className="search-container">
            <header className="search-bar1">
              <div className="search-input1">
                <div className="search-field1">
                  <div className="search-icon2">
                    <div className="search-icon-child" />
                    <div className="search-action">
                      <img
                        className="search-icon3"
                        alt=""
                        src="/vector-5.svg"
                      />
                    </div>
                    <input
                      className="buscar1"
                      placeholder="Buscar"
                      type="text"
                    />
                  </div>
                </div>
                <div className="cart-container">
                  <div className="cart-item">
                    <div className="cart-icon2">
                      <div className="cart-background" />
                      <img
                        className="cart-icon3"
                        loading="lazy"
                        alt=""
                        src="/cart.svg"
                      />
                    </div>
                    <div className="cart-label">
                      <a className="cart">CART</a>
                    </div>
                  </div>
                  <div className="profile-container">
                    <div className="profile-item">
                      <div className="user-profile">
                        <div className="profile-picture" />
                        <a className="u">U</a>
                      </div>
                      <div className="profile-name">
                        <a className="usuario">USUARIO</a>
                        <div className="profile-dropdown">
                          <img
                            className="dropdown-icon"
                            alt=""
                            src="/vector-6.svg"
                          />
                        </div>
                        <div className="dropdown-background" />
                      </div>
                    </div>
                  </div>
                  <div className="divider">
                    <img
                      className="separator-icon"
                      alt=""
                      src="/vector-7.svg"
                    />
                  </div>
                </div>
              </div>
            </header>
            <h3 className="perfil-de-usuario">Perfil De Usuario</h3>
            <div className="user-details">
              <div className="user-info">
                <div className="user-status">
                  <h3 className="usuario-registrado01">Usuario_registrado01</h3>
                  <div className="edit-profile">
                    <div className="edit-action">
                      <div className="edit-action-child" />
                      <b className="edit-profile1"> EDIT PROFILE</b>
                    </div>
                  </div>
                </div>
                <div className="profile-image">
                  <div className="image-circle" />
                  <UserIcon
                    user1="/user1.svg"
                    propHeight="100%"
                    propWidth="100%"
                    propPosition="absolute"
                    propTop="0px"
                    propLeft="0px"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="general-info">
            <div className="informacin-general">Información general</div>
            <div className="input-fields">
              <div className="name-field">
                <div className="vector-parent">
                  <img
                    className="rectangle-icon"
                    alt=""
                    src="/rectangle-26.svg"
                  />
                  <div className="first-name">
                    <div className="name-label">
                      <b className="nombre">Nombre</b>
                    </div>
                    <img
                      className="first-name-child"
                      loading="lazy"
                      alt=""
                      src="/rectangle-76.svg"
                    />
                    <div className="last-name">
                      <div className="last-name-input">
                        <div className="last-name-label">
                          <b className="apellido">Apellido</b>
                        </div>
                        <div className="last-name-input-child" />
                      </div>
                    </div>
                  </div>
                  <div className="email-field">
                    <div className="email-input">
                      <div className="email-label">
                        <b className="correo">Correo</b>
                      </div>
                      <div className="email-input-child" />
                    </div>
                  </div>
                  <div className="phone-field">
                    <div className="phone-input">
                      <b className="telfono">Teléfono</b>
                    </div>
                    <img
                      className="phone-field-child"
                      loading="lazy"
                      alt=""
                      src="/rectangle-79.svg"
                    />
                  </div>
                </div>
                <div className="actions">
                  <div className="order-actions">
                    <div className="queued-orders">
                      <div className="queued-order-name">
                        <div className="queued-order-label">
                          <div className="queued-order-background" />
                          <div className="pedidos-en-cola">PEDIDOS EN COLA</div>
                        </div>
                        <div className="purchase-history">
                          <div className="history-name">
                            <div className="history-name-child" />
                            <div className="historial-de-compras">
                              HISTORIAL DE COMPRAS
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="feedback">
                        <div className="feedback-child" />
                        <div className="feedback1">FEEDBACK</div>
                      </div>
                    </div>
                    <div className="logout">
                      <div className="logout-name">
                        <div className="logout-name-child" />
                        <div className="cerrar-sesin">CERRAR SESIÓN</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
