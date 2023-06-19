import { NavLink } from "react-router-dom";
import classes from "./footer.module.css";
import FaceBookIcon from "../Icons/FooterIcons/facebookIcon";
import InstagramIcon from "../Icons/FooterIcons/InstagramIcon";
import TwitterIcon from "../Icons/FooterIcons/TwitterIcon";
import YoutubeIcon from "../Icons/FooterIcons/YoutubeIcon";
const Footer = () => {
  return (
    <>
      <footer className={classes.footerConatiner}>
        <nav className={classes.socialIcons}>
          <NavLink>
            <FaceBookIcon />
          </NavLink>
          <NavLink>
            <InstagramIcon />
          </NavLink>
          <NavLink>
            <TwitterIcon />
          </NavLink>
          <NavLink>
            <YoutubeIcon />
          </NavLink>
        </nav>
        <nav className={classes.footerNav}>
          <ul>
            <li>
              <NavLink>Home</NavLink>
            </li>
            <li>
              <NavLink>New</NavLink>
            </li>
            <li>
              <NavLink>About</NavLink>
            </li>
            <li>
              <NavLink>Contact us</NavLink>
            </li>
            <li>
              <NavLink>Our Team</NavLink>
            </li>
          </ul>
        </nav>
      </footer>
      <div className={classes.footerBottom}>
        <p>
          Copyright &copy;{new Date().getFullYear()}; Designed by{" "}
          <span className={classes.designer}>Hristian</span>
        </p>
      </div>
    </>
  );
};
export default Footer;
