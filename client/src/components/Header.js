import { Link } from "react-router-dom";
import logo from "../images/traventure-logo.png";


const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="header-item-container">
          <Link to={"/"}>
            <img className="logo" src={logo} alt="Traventure logo" />
          </Link>
        </div>
        <div className="header-item-container">
          <p>Log out</p>
          <p>ⓘ Language</p>
          <img className="avatar" src='https://e70x2rgj32.ufs.sh/f/mLxRkXyU7PNdLkWXjxCWnUqalpC14NxyOkLtSEFB5wKjMhPd' alt="user avatar" />
        </div>
      </div>
    </header>
  );
};
export default Header;

