import whiteLogo from "../images/logo1.webp";
import colorLogo from "../images/logo2.webp";

const Nav = ({ authToken }) => {
    const minimal = false

  return (
    <nav>
      <div className="logo-container">
        <img
          className="logo"
          src={minimal ? colorLogo : whiteLogo}
          alt="logo"
        />
      </div>
      {!authToken && !minimal && <button className="nav-button">
        Log in </button>
      }
    </nav>
  );
};
export default Nav



