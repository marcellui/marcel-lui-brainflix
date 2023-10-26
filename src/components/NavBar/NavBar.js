import "./navbar.scss";
import logo from "../../assets/Logo/BrainFlix-logo.svg";
import pfp from "../../assets/Images/Mohan-muruge.jpg";
import upload from "../../assets/Icons/upload.svg";
import search from "../../assets/Icons/search.svg";
import { Link } from "react-router-dom"; 

function NavBar() {
  return (
    <>
      <header className="navbar">
        <a href="\">
          <img src={logo} className="navbar__logo" alt="logo"></img>
        </a>
        <div className="navbar__container">
          <img
            src={search}
            className="navbar__search-img"
            alt="search img"
          ></img>
          <form>
            <input
              type="text"
              name="name"
              id="formName"
              placeholder="Search"
              className="navbar__search"
            ></input>
          </form>
          <img src={pfp} className="navbar__pfp" alt="profile"></img>
        </div>
        <Link to="/upload" className="navbar__upload-button">
          <div className="navbar__upload-button">
            <img src={upload} className="navbar__upload-img" alt="upload"></img>
            <p className="navbar__upload-text">UPLOAD</p>
          </div>
        </Link>
      </header>
    </>
  );
}

export default NavBar;
