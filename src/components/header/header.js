import styles from "./header.module.css";
import logo from "../../assets/images.png";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
const Header = () => {
  const navigate = useNavigate();
  const isLogIn = localStorage.getItem("auth");
  const logOut = () => {
    localStorage.clear();
    toast.success("sucessfull logout!");
    navigate("/login");
  };
  return (
    <div className={styles.header}>
      <img width="40px" height="40px" src={logo} alt="logo"></img>
      {isLogIn && (
        <div>
          <p>Admin</p>
          <button onClick={logOut}>Log out</button>
        </div>
      )}
    </div>
  );
};

export default Header;
