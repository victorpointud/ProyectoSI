import "./Landing.css";

const Landing = () => {
  return (
    <div className="inicio">
      <div className="home-rect-parent">
        <div className="home-rect" />
        <div className="store-logo-wrapper">
          <div className="store-logo">
            <div className="logo-image">
              <img
                className="screenshot-2024-04-29-at-7151"
                loading="lazy"
                alt=""
                src="/screenshot-20240429-at-715-1@2x.png"
              />
            </div>
            <h3 className="unimet-store-identity-container1">
              <p className="unimet-store1">Unimet Store</p>
              <p className="identity-coffee1">{`Identity Coffee & Bar`}</p>
            </h3>
          </div>
        </div>
        <img className="divider-icon" loading="lazy" alt="" src="/vector.svg" />
        <div className="navigation">
          <div className="left-nav">
            <div className="home-nav">
              <img className="home-icon" alt="" src="/vector-1.svg" />
              <div className="home-background" />
              <div className="inicio-wrapper">
                <div className="inicio1">INICIO</div>
              </div>
            </div>
            <div className="contact-nav">
              <div className="contact-link">
                <div className="contact-button">
                  <div className="contact-icon">
                    <img className="phone-icon" alt="" src="/vector-2.svg" />
                    <img className="email-icon" alt="" src="/vector-3.svg" />
                  </div>
                </div>
                <div className="contacto">CONTACTO</div>
              </div>
            </div>
          </div>
          <div className="products-nav">
            <div className="products-link">
              <div className="products-button">
                <img className="product-icon" alt="" src="/vector-4.svg" />
                <div className="productos">PRODUCTOS</div>
              </div>
              <div className="location-nav">
                <div className="location-link">
                  <img
                    className="location-icon"
                    loading="lazy"
                    alt=""
                    src="/location.svg"
                  />
                  <div className="ubicacin-wrapper">
                    <div className="ubicacin">UBICACIÓN</div>
                  </div>
                </div>
                <div className="about-nav">
                  <img
                    className="people-icon"
                    loading="lazy"
                    alt=""
                    src="/people.svg"
                  />
                  <div className="about-link">
                    <div className="concenos">CONÓCENOS</div>
                    <div className="concenos1">CONÓCENOS</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="group-section">
        <div className="disfruta-de-las-mejores-promoc-parent">
          <h3 className="disfruta-de-las">
            DISFRUTA DE LAS MEJORES PROMOCIONES SOLO POR HOY:
          </h3>
          <img className="image-1-icon" alt="" src="/image-1@2x.png" />
          <div className="since-2023">Since 2023</div>
          <img className="frame-item" loading="lazy" alt="" />
        </div>
        <header className="search-bar">
          <div className="search-input">
            <div className="search-field">
              <div className="search-field-child" />
              <div className="search-icon">
                <img className="search-icon1" alt="" src="/vector-5.svg" />
              </div>
              <a className="buscar">Buscar</a>
            </div>
            <div className="user-actions">
              <div className="login-icon-parent">
                <div className="login-icon">
                  <div className="login-icon-child" />
                  <a className="i">I</a>
                </div>
                <div className="ingresar-wrapper">
                  <a className="ingresar1">INGRESAR</a>
                </div>
                <div className="cart-icon">
                  <img className="cart-icon1" alt="" src="/vector-6.svg" />
                </div>
              </div>
              <div className="profile-icon">
                <img className="profile-icon1" alt="" src="/vector-7.svg" />
              </div>
            </div>
          </div>
        </header>
        <div className="frame-wrapper">
          <div className="welcome-message-parent">
            <div className="welcome-message">
              <div className="welcome-title">
                <img
                  className="welcome-title-child"
                  loading="lazy"
                  alt=""
                  src="/rectangle-72.svg"
                />
                <h1 className="bienvenidos">Bienvenidos</h1>
              </div>
            </div>
            <h1 className="aqu-encontrars-toda">
              Aquí encontrarás toda la información necesaria sobre nuestros
              productos y nosotros
            </h1>
          </div>
        </div>
        <div className="product-categories">
          <div className="category-list">
            <div className="rectangle-group">
              <div className="frame-inner" />
              <b className="malteadas">MALTEADAS</b>
              <div className="category-images">
                <div className="wrapper-whatsapp-image-2021-05-parent">
                  <div className="wrapper-whatsapp-image-2021-05">
                    <img
                      className="whatsapp-image-2021-05-23-at-1"
                      loading="lazy"
                      alt=""
                      src="/whatsapp-image-20210523-at-1547-1@2x.png"
                    />
                  </div>
                  <div className="frame-div">
                    <div className="frame-parent1">
                      <div className="agrrate-parent">
                        <b className="agrrate">AGÁRRATE</b>
                        <div className="oreo-vainilla">{`Oreo & Vainilla`}</div>
                      </div>
                      <div className="div">$12.5</div>
                    </div>
                  </div>
                </div>
                <div className="wrapper-whatsapp-image-2021-05-group">
                  <div className="wrapper-whatsapp-image-2021-051">
                    <img
                      className="whatsapp-image-2021-05-23-at-11"
                      loading="lazy"
                      alt=""
                      src="/whatsapp-image-20210523-at-1547-3@2x.png"
                    />
                  </div>
                  <div className="frame-wrapper1">
                    <div className="frame-parent2">
                      <div className="libertad-parent">
                        <b className="libertad">LIBERTAD</b>
                        <div className="brownie-napolitano">{`Brownie & Napolitano`}</div>
                      </div>
                      <div className="div1">$12.5</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rectangle-container">
              <div className="rectangle-div" />
              <b className="cafs">CAFÉS</b>
              <div className="frame-parent3">
                <div className="wrapper-whatsapp-image-2021-05-container">
                  <div className="wrapper-whatsapp-image-2021-052">
                    <img
                      className="whatsapp-image-2021-05-23-at-12"
                      alt=""
                      src="/whatsapp-image-20210523-at-1547-1-1@2x.png"
                    />
                  </div>
                  <div className="frame-wrapper2">
                    <div className="frame-parent4">
                      <div className="extra-parent">
                        <b className="extra">EXTRA</b>
                        <div className="capuccino">Capuccino</div>
                      </div>
                      <div className="div2">$7.4</div>
                    </div>
                  </div>
                </div>
                <div className="wrapper-whatsapp-image-2021-05-parent1">
                  <div className="wrapper-whatsapp-image-2021-053">
                    <img
                      className="whatsapp-image-2021-05-23-at-13"
                      alt=""
                      src="/whatsapp-image-20210523-at-1547-3-1@2x.png"
                    />
                  </div>
                  <div className="frame-wrapper3">
                    <div className="frame-parent5">
                      <div className="lat-parent">
                        <b className="lat">LATÉ</b>
                        <div className="durazno">Durazno</div>
                      </div>
                      <div className="div3">$9.9</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="group-div">
              <div className="frame-child1" />
              <b className="otros">OTROS</b>
              <div className="frame-parent6">
                <div className="wrapper-whatsapp-image-2021-05-parent2">
                  <div className="wrapper-whatsapp-image-2021-054">
                    <img
                      className="whatsapp-image-2021-05-23-at-14"
                      alt=""
                      src="/whatsapp-image-20210523-at-1547-1-2@2x.png"
                    />
                  </div>
                  <div className="frame-wrapper4">
                    <div className="frame-parent7">
                      <div className="coca-cola-parent">
                        <b className="coca-cola">COCA COLA</b>
                        <div className="original">Original</div>
                      </div>
                      <div className="div4">$3.1</div>
                    </div>
                  </div>
                </div>
                <div className="wrapper-whatsapp-image-2021-05-parent3">
                  <div className="wrapper-whatsapp-image-2021-055">
                    <img
                      className="whatsapp-image-2021-05-23-at-15"
                      alt=""
                      src="/whatsapp-image-20210523-at-1547-3-2@2x.png"
                    />
                  </div>
                  <div className="frame-wrapper5">
                    <div className="frame-parent8">
                      <div className="up-parent">
                        <b className="up">7UP</b>
                        <div className="original1">Original</div>
                      </div>
                      <div className="div5">$3.1</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="signup-message-parent">
          <div className="signup-message">
            <div className="para-realizar-una">
              PARA REALIZAR UNA COMPRAR INICIE SESIÓN O REGISTRESE
            </div>
          </div>
          <img
            className="signup-button-icon"
            loading="lazy"
            alt=""
            src="/frame-3.svg"
          />
        </div>
      </section>
    </div>
  );
};

export default Landing;
