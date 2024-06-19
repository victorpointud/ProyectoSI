import AccountDetails from "./AccountDetails";
import Actions from "./Actions";
import "./Register.css";

const Register = () => {
  return (
    <form className="registro1">
      <main className="registro-inner">
        <section className="frame-group">
          <div className="frame-container">
            <div className="screenshot-2024-04-29-at-715-wrapper">
              <img
                className="screenshot-2024-04-29-at-715"
                loading="lazy"
                alt=""
                src="/screenshot-20240429-at-715-2@2x.png"
              />
            </div>
            <div className="unimet-store-identity-container">
              <p className="unimet-store">Unimet Store</p>
              <p className="identity-coffee">{`Identity Coffee & Bar`}</p>
            </div>
          </div>
          <AccountDetails />
        </section>
      </main>
      <Actions />
    </form>
  );
};

export default Register;
