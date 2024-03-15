import logo from "../screens/logo.png";
import "./Header.css";
export default function Header() {
  return (
    <>
      <nav>
        <img
          src={logo}
          alt="zoundify image"
          className="login-page-new__logo-img"
          style={{ height: '40%', width: 'auto', marginRight: '10px' }}
        />
      </nav>
    </>
  );
}
