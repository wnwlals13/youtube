import React, { useRef } from "react";
import styles from "./navbar.module.css";

const Navbar = ({ onSearch }) => {
  const searchRef = React.createRef();
  const handleSearch = () => {
    // e.preventDefault();
    const search = searchRef.current.value;
    search && onSearch(search);
  };

  const onClick = () => {
    handleSearch();
  };

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const goMain = () => {
    console.log("sdsd");
  };

  return (
    <header>
      <nav className={styles.navbar} onClick={goMain}>
        <img
          src="/images/logo.png"
          alt="youtube_logo"
          className={styles.nav_logo}
        />
        <a className={styles.nav_title}>Youtube</a>
      </nav>

      <input
        ref={searchRef}
        type="text"
        className={styles.inputText}
        onKeyPress={onKeyPress}
        placeholder="Search.."
      />
      <button type="submit" className={styles.inputBtn} onClick={onClick}>
        <img
          className={styles.inputBtn_img}
          src="/images/search.png"
          alt="search"
        />
      </button>
    </header>
  );
};

export default Navbar;
