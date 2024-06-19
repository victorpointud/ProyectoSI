import { Autocomplete, TextField } from "@mui/material";
import FrameComponent from "../components/FrameComponent";
import "./RDENES.css";

const RDENES = () => {
  return (
    <div className="rdenes">
      <div className="main">
        <img className="main-child" loading="lazy" alt="" />
      </div>
      <div className="container">
        <img className="container-child" alt="" src="/rectangle-9.svg" />
        <div className="frame-parent10">
          <div className="image-holder-parent">
            <div className="image-holder">
              <div className="pm">12.21 PM</div>
            </div>
            <img
              className="screenshot-2024-04-29-at-7153"
              loading="lazy"
              alt=""
              src="/screenshot-20240429-at-715-1@2x.png"
            />
          </div>
          <div className="title-holder">
            <a className="unimet-store-identity-container3">
              <p className="unimet-store3">Unimet Store</p>
              <p className="identity-coffee3">{`Identity Coffee & Bar`}</p>
            </a>
          </div>
        </div>
        <div className="container-inner">
          <div className="frame-parent11">
            <div className="order-button-wrapper">
              <div className="order-button">
                <img
                  className="vector-icon"
                  loading="lazy"
                  alt=""
                  src="/vector-1.svg"
                />
                <div className="inicio-container">
                  <div className="inicio3">INICIO</div>
                </div>
              </div>
            </div>
            <div className="menu1">
              <div className="menu-items1">
                <div className="menu-item">
                  <div className="menu-item-details">
                    <img
                      className="menu-item-details-child"
                      loading="lazy"
                      alt=""
                      src="/group-7.svg"
                    />
                  </div>
                  <div className="contacto2">CONTACTO</div>
                </div>
              </div>
              <div className="menu-items2">
                <div className="frame-parent12">
                  <div className="vector-wrapper">
                    <img
                      className="vector-icon1"
                      loading="lazy"
                      alt=""
                      src="/vector-41.svg"
                    />
                  </div>
                  <div className="productos2">PRODUCTOS</div>
                </div>
              </div>
              <div className="sales">
                <div className="sales-button">
                  <div className="sales-content">
                    <div className="sales-icon-holder">
                      <img
                        className="vector-icon2"
                        loading="lazy"
                        alt=""
                        src="/vector-22.svg"
                      />
                    </div>
                    <div className="ventas">VENTAS</div>
                  </div>
                </div>
                <div className="orders-button">
                  <img
                    className="orders-button-child"
                    loading="lazy"
                    alt=""
                    src="/group-5.svg"
                  />
                  <img
                    className="orders-button-item"
                    alt=""
                    src="/rectangle-6.svg"
                  />
                  <div className="rdenes-wrapper">
                    <div className="rdenes1">ÓRDENES</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rdenes-child" />
      <section className="search">
        <div className="search-bar2">
          <div className="frame-parent13">
            <div className="frame-parent14">
              <div className="search-icon-holder-wrapper">
                <div className="search-icon-holder">
                  <Autocomplete
                    className="icon-background"
                    disablePortal
                    options={[]}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        color="primary"
                        label=""
                        variant="standard"
                        placeholder=""
                        helperText=""
                      />
                    )}
                  />
                  <a className="rdenes2">ÓRDENES</a>
                </div>
              </div>
              <div className="user">
                <div className="user-icon">
                  <div className="user-initial-holder">
                    <div className="background-circle" />
                    <a className="a">A</a>
                  </div>
                  <div className="user-name">
                    <a className="admin">ADMIN</a>
                  </div>
                </div>
                <div className="settings-icon-holder">
                  <img
                    className="vector-icon3"
                    loading="lazy"
                    alt=""
                    src="/vector-6.svg"
                  />
                </div>
                <div className="logout-icon-holder">
                  <img
                    className="vector-icon4"
                    loading="lazy"
                    alt=""
                    src="/vector-7.svg"
                  />
                </div>
              </div>
            </div>
            <div className="order-history">
              <button className="history-items">
                <div className="history-items-child" />
                <img className="done-icon" alt="" src="/done.svg" />
                <div className="date">
                  <a className="a1">#215</a>
                </div>
              </button>
              <button className="history-items1">
                <div className="history-items-item" />
                <div className="status-icon-wrapper">
                  <img className="status-icon" alt="" src="/vector-61.svg" />
                </div>
                <a className="a2">#216</a>
              </button>
              <button className="history-items2">
                <div className="history-items-inner" />
                <img className="done-icon1" alt="" src="/done.svg" />
                <div className="wrapper">
                  <a className="a3">#217</a>
                </div>
              </button>
              <button className="history-items3">
                <div className="history-items-child1" />
                <img className="done-icon2" alt="" src="/done.svg" />
                <div className="frame">
                  <a className="a4">#218</a>
                </div>
              </button>
              <button className="history-items4">
                <div className="history-items-child2" />
                <div className="vector-container">
                  <img className="vector-icon5" alt="" src="/vector-61.svg" />
                </div>
                <a className="a5">#219</a>
              </button>
              <button className="history-items5">
                <div className="history-items-child3" />
                <div className="vector-frame">
                  <img className="vector-icon6" alt="" src="/vector-61.svg" />
                </div>
                <a className="a6">#220</a>
              </button>
              <button className="history-items6">
                <div className="history-items-child4" />
                <a className="a7">#221</a>
              </button>
              <button className="history-items7">
                <div className="history-items-child5" />
                <a className="a8">#222</a>
              </button>
              <div className="order-details">
                <div className="order-number">
                  <div className="order-number-background" />
                  <a className="a9">#223</a>
                </div>
              </div>
            </div>
          </div>
          <div className="order-detail">
            <div className="group-div">
              <div className="frame-child3" />
              <div className="order-item">
                <div className="order-header">
                  <div className="order-info">
                    <div className="order-status">
                      <b className="rden-215">Órden #215</b>
                      <div className="am">9 AM</div>
                    </div>
                  </div>
                  <div className="item-image">
                    <div className="item-image-child" />
                    <div className="item-initial">
                      <h1 className="j">J</h1>
                    </div>
                  </div>
                </div>
                <div className="item-info">
                  <div className="wrapper-whatsapp-image-2021-056">
                    <img
                      className="whatsapp-image-2021-05-23-at-16"
                      loading="lazy"
                      alt=""
                      src="/whatsapp-image-20210523-at-1547-11@2x.png"
                    />
                  </div>
                  <div className="item-details">
                    <div className="item-name">
                      <div className="item-title">
                        <b className="redbull">RedBull</b>
                        <div className="bebida-energizante">
                          Bebida energizante
                        </div>
                      </div>
                      <div className="item-quantity">
                        <div className="div6">$3.5</div>
                        <div className="qty-1">Qty: 1</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="wrapper-whatsapp-image-2021-05-parent4">
                  <div className="wrapper-whatsapp-image-2021-057">
                    <img
                      className="whatsapp-image-2021-05-23-at-17"
                      loading="lazy"
                      alt=""
                      src="/whatsapp-image-20210523-at-1547-31@2x.png"
                    />
                  </div>
                  <div className="frame-wrapper5">
                    <div className="frame-parent15">
                      <div className="guayoyo-pequeo-parent">
                        <b className="guayoyo-pequeo">Guayoyo Pequeño</b>
                        <div className="caf">Café</div>
                      </div>
                      <div className="parent">
                        <div className="div7">$2</div>
                        <div className="qty-11">Qty: 1</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rectangle-parent3">
                <div className="frame-child4" />
                <div className="image-order-items">
                  <div className="arizona-order-items">
                    <div className="arizona-details">
                      <div className="x-2-items">X 2 Items</div>
                      <div className="arizona-description">$5.5</div>
                    </div>
                  </div>
                  <button className="completed-order-item-details">
                    <div className="completed-order-item-details-child" />
                    <img className="done-icon3" alt="" src="/done.svg" />
                    <div className="order-status1">
                      <div className="completado">COMPLETADO</div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="order-details-content">
              <div className="order-details-content-child" />
              <div className="order-details-content-inner">
                <div className="frame-parent16">
                  <div className="frame-wrapper6">
                    <div className="rden-216-parent">
                      <a className="rden-216">Órden #216</a>
                      <div className="pm-wrapper">
                        <div className="pm1">12 PM</div>
                      </div>
                    </div>
                  </div>
                  <div className="ellipse-parent">
                    <div className="ellipse-div" />
                    <div className="m-wrapper">
                      <h1 className="m">M</h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-parent17">
                <div className="double-product-image-parent">
                  <div className="double-product-image">
                    <img
                      className="whatsapp-image-2021-05-23-at-18"
                      alt=""
                      src="/whatsapp-image-20210523-at-1547-1@2x.png"
                    />
                    <div className="whatsapp-image-2021-05-23-at-19" />
                  </div>
                  <div className="product-order">
                    <div className="product-order-items">
                      <div className="product-order-details">
                        <b className="pasin">Pasión</b>
                        <div className="caf-con-vainilla-container">
                          <p className="caf-con-vainilla">
                            Café con vainilla, canela,
                          </p>
                          <p className="condesada">condesada</p>
                        </div>
                      </div>
                      <div className="quantity-details">
                        <div className="product-order-quantities">$4.5</div>
                        <div className="qty-12">Qty: 1</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frame-wrapper7">
                  <div className="frame-parent18">
                    <div className="whatsapp-image-2021-05-23-at-1-parent">
                      <img
                        className="whatsapp-image-2021-05-23-at-110"
                        alt=""
                        src="/whatsapp-image-20210523-at-1547-3@2x.png"
                      />
                      <div className="wrapper-whatsapp-image-2021-058">
                        <img
                          className="whatsapp-image-2021-05-23-at-111"
                          loading="lazy"
                          alt=""
                          src="/whatsapp-image-20210523-at-1547-6@2x.png"
                        />
                      </div>
                    </div>
                    <div className="arizona-order">
                      <div className="water-info">
                        <div className="water-details">
                          <b className="botella-de-agua">Botella de Agua</b>
                          <div className="botella-de-agua1">
                            Botella de Agua Mediana
                          </div>
                        </div>
                        <div className="water-quantity-info">
                          <div className="water-quantity-label">$1.5</div>
                          <div className="qty-13">Qty: 1</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cancel-status-items-wrapper">
                <div className="cancel-status-items">
                  <div className="cancel-status-image" />
                  <div className="canceled-status-details">
                    <div className="cancel-status-info">
                      <div className="canceled-items-info">
                        <div className="x-2-items1">X 2 Items</div>
                        <div className="canceled-item-quantity">$6</div>
                      </div>
                    </div>
                    <button className="cancel-status">
                      <div className="cancel-status-child" />
                      <div className="cancel-icon-wrapper">
                        <img
                          className="cancel-icon"
                          alt=""
                          src="/vector-61.svg"
                        />
                      </div>
                      <div className="cancelado">CANCELADO</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-details-content1">
              <img
                className="order-details-content-item"
                alt=""
                src="/rectangle-261.svg"
              />
              <div className="frame-parent19">
                <div className="frame-wrapper8">
                  <div className="frame-parent20">
                    <div className="rden-217-wrapper">
                      <b className="rden-217">Órden #217</b>
                    </div>
                    <div className="pm2">1.30 PM</div>
                  </div>
                </div>
                <div className="ellipse-group">
                  <div className="frame-child5" />
                  <div className="a-wrapper">
                    <h1 className="a10">A</h1>
                  </div>
                </div>
              </div>
              <div className="frame-parent21">
                <div className="wrapper-whatsapp-image-2021-05-parent5">
                  <div className="wrapper-whatsapp-image-2021-059">
                    <img
                      className="whatsapp-image-2021-05-23-at-112"
                      loading="lazy"
                      alt=""
                      src="/whatsapp-image-20210523-at-1547-18@2x.png"
                    />
                  </div>
                  <div className="frame-wrapper9">
                    <div className="frame-parent22">
                      <div className="merengada-de-oreo-parent">
                        <b className="merengada-de-oreo">Merengada de Oreo</b>
                        <div className="merengada-con-galletas">
                          Merengada con galletas oreo
                        </div>
                      </div>
                      <div className="group">
                        <div className="div8">$5.5</div>
                        <div className="qty-14">Qty: 1</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frame-parent23">
                  <div className="whatsapp-image-2021-05-23-at-1-group">
                    <img
                      className="whatsapp-image-2021-05-23-at-113"
                      alt=""
                      src="/whatsapp-image-20210523-at-1547-3@2x.png"
                    />
                    <img
                      className="whatsapp-image-2021-05-23-at-114"
                      loading="lazy"
                      alt=""
                      src="/whatsapp-image-20210523-at-1547-5@2x.png"
                    />
                  </div>
                  <div className="frame-wrapper10">
                    <div className="completed-product-details-parent">
                      <div className="completed-product-details">
                        <b className="caf-fro">Café Frío</b>
                        <div className="caf-frio-con">Café Frio con Leche</div>
                      </div>
                      <div className="energy-product-details">
                        <div className="energy-product-quantity">$3.5</div>
                        <div className="qty-15">Qty: 1</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rectangle-parent4">
                <div className="frame-child6" />
                <div className="monster-order">
                  <div className="canceled-order-details">
                    <div className="canceled-product-details">
                      <div className="x-2-items2">X 2 Items</div>
                      <div className="cancel-quantity">$9</div>
                    </div>
                  </div>
                  <button className="group-button">
                    <div className="frame-child7" />
                    <img className="done-icon4" alt="" src="/done.svg" />
                    <div className="completado-wrapper">
                      <div className="completado1">COMPLETADO</div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="rectangle-parent5">
              <div className="frame-child8" />
              <div className="frame-parent24">
                <div className="frame-wrapper11">
                  <div className="rden-219-parent">
                    <b className="rden-219">Órden #219</b>
                    <div className="pm3">1.58 PM</div>
                  </div>
                </div>
                <div className="ellipse-container">
                  <div className="frame-child9" />
                  <div className="k-wrapper">
                    <h1 className="k">K</h1>
                  </div>
                </div>
              </div>
              <div className="frame-parent25">
                <div className="frame-parent26">
                  <div className="whatsapp-image-2021-05-23-at-1-container">
                    <img
                      className="whatsapp-image-2021-05-23-at-115"
                      alt=""
                      src="/whatsapp-image-20210523-at-1547-6@2x.png"
                    />
                    <div className="whatsapp-image-2021-05-23-at-1-wrapper">
                      <img
                        className="whatsapp-image-2021-05-23-at-116"
                        alt=""
                        src="/whatsapp-image-20210523-at-1547-1@2x.png"
                      />
                    </div>
                  </div>
                  <div className="frame-wrapper12">
                    <div className="frame-parent27">
                      <div className="caf-fro-choco-parent">
                        <b className="caf-fro-choco">Café Frío Choco</b>
                        <div className="caf-frio-sabor">
                          Café Frio sabor Chocolate
                        </div>
                      </div>
                      <div className="parent1">
                        <div className="div9">$5</div>
                        <div className="qty-16">Qty: 1</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="wrapper-whatsapp-image-2021-05-parent6">
                  <div className="wrapper-whatsapp-image-2021-0510">
                    <img
                      className="whatsapp-image-2021-05-23-at-117"
                      loading="lazy"
                      alt=""
                      src="/whatsapp-image-20210523-at-1547-3-11@2x.png"
                    />
                  </div>
                  <div className="frame-wrapper13">
                    <div className="frame-parent28">
                      <div className="jugo-de-parchita-parent">
                        <b className="jugo-de-parchita">Jugo de Parchita</b>
                        <div className="jugo-natural-de">
                          Jugo natural de Parchita
                        </div>
                      </div>
                      <div className="parent2">
                        <div className="div10">$3</div>
                        <div className="qty-17">Qty: 1</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rectangle-parent6">
                <div className="frame-child10" />
                <div className="frame-parent29">
                  <div className="frame-wrapper14">
                    <div className="x-2-items-parent">
                      <div className="x-2-items3">X 2 Items</div>
                      <div className="div11">$12.5</div>
                    </div>
                  </div>
                  <div className="frame-parent30">
                    <div className="status-icons-wrapper">
                      <div className="status-icons">
                        <div className="status-icons-child" />
                        <img className="done-icon5" alt="" src="/done.svg" />
                      </div>
                    </div>
                    <div className="rectangle-parent7">
                      <div className="frame-child11" />
                      <img
                        className="vector-icon7"
                        alt=""
                        src="/vector-61.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rectangle-parent8">
              <div className="frame-child12" />
              <div className="frame-parent31">
                <div className="frame-wrapper15">
                  <div className="frame-parent32">
                    <div className="rden-220-wrapper">
                      <b className="rden-220">Órden #220</b>
                    </div>
                    <div className="pm4">2 PM</div>
                  </div>
                </div>
                <div className="ellipse-parent1">
                  <div className="frame-child13" />
                  <div className="p-wrapper">
                    <h1 className="p">P</h1>
                  </div>
                </div>
              </div>
              <div className="frame-parent33">
                <div className="frame-parent34">
                  <div className="whatsapp-image-2021-05-23-at-1-parent1">
                    <img
                      className="whatsapp-image-2021-05-23-at-118"
                      alt=""
                      src="/whatsapp-image-20210523-at-1547-18@2x.png"
                    />
                    <div className="whatsapp-image-2021-05-23-at-1-frame">
                      <img
                        className="whatsapp-image-2021-05-23-at-119"
                        alt=""
                        src="/whatsapp-image-20210523-at-1547-1@2x.png"
                      />
                    </div>
                  </div>
                  <div className="frame-wrapper16">
                    <div className="frame-parent35">
                      <div className="monster-parent">
                        <b className="monster">Monster</b>
                        <div className="bebida-energizante1">
                          Bebida energizante
                        </div>
                      </div>
                      <div className="parent3">
                        <div className="div12">$4</div>
                        <div className="qty-18">Qty: 1</div>
                      </div>
                    </div>
                  </div>
                </div>
                <FrameComponent
                  whatsAppImage20210523At15="/whatsapp-image-20210523-at-1547-3-21@2x.png"
                  redBull="RedBull"
                />
              </div>
              <div className="rectangle-parent9">
                <div className="frame-child14" />
                <div className="frame-parent36">
                  <div className="frame-wrapper17">
                    <div className="x-2-items-group">
                      <div className="x-2-items4">X 2 Items</div>
                      <div className="div13">$12.5</div>
                    </div>
                  </div>
                  <div className="frame-parent37">
                    <div className="frame-wrapper18">
                      <div className="rectangle-parent10">
                        <div className="frame-child15" />
                        <img className="done-icon6" alt="" src="/done.svg" />
                      </div>
                    </div>
                    <div className="rectangle-parent11">
                      <div className="frame-child16" />
                      <img
                        className="vector-icon8"
                        alt=""
                        src="/vector-61.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rectangle-parent12">
              <div className="frame-child17" />
              <div className="rden-221-parent">
                <b className="rden-221">Órden #221</b>
                <div className="pm5">6 PM</div>
              </div>
              <div className="wrapper-whatsapp-image-2021-05-parent7">
                <div className="wrapper-whatsapp-image-2021-0511">
                  <img
                    className="whatsapp-image-2021-05-23-at-120"
                    loading="lazy"
                    alt=""
                    src="/whatsapp-image-20210523-at-1547-1-11@2x.png"
                  />
                </div>
                <div className="frame-wrapper19">
                  <div className="frame-parent38">
                    <div className="arizona-parent">
                      <b className="arizona">Arizona</b>
                      <div className="arizona-sabor-t">
                        Arizona sabor Té verde
                      </div>
                    </div>
                    <div className="arizona-quantity-parent">
                      <div className="arizona-quantity">$3</div>
                      <div className="qty-19">Qty: 1</div>
                    </div>
                  </div>
                </div>
              </div>
              <FrameComponent
                whatsAppImage20210523At15="/whatsapp-image-20210523-at-1547-3-3@2x.png"
                redBull="Monster"
                propPadding="0px 0px var(--padding-6xs)"
                propPadding1="0px 0px var(--padding-8xs)"
                propMinWidth="61px"
              />
              <div className="complete-status-initial">
                <div className="completed-initial" />
                <h1 className="h">H</h1>
              </div>
              <div className="cancel-initial-image-parent">
                <div className="cancel-initial-image" />
                <div className="cancel-initial-details">
                  <div className="canceled-item-info">
                    <div className="cancel-initial-items">
                      <div className="x-2-items5">X 2 Items</div>
                      <div className="initial-item-quantity">$12.5</div>
                    </div>
                  </div>
                  <div className="completed-status">
                    <div className="completed-status-child" />
                    <img className="done-icon7" alt="" src="/done.svg" />
                  </div>
                </div>
                <div className="rectangle-parent13">
                  <div className="frame-child18" />
                  <img
                    className="status-image-icon"
                    alt=""
                    src="/vector-61.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RDENES;
