import React, { memo, useRef } from "react";
import styles from "./navbar.module.css";

const Navbar = memo(({ onSearch }) => {
  const searchRef = useRef();

  const handleSearch = () => {
    const input = searchRef.current.value;
    input && onSearch(input);
  };
  const onClick = () => {
    handleSearch();
  };
  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <header>
      <a href="/" className={styles.nav_logo}>
        <img src="../images/logo.png" alt="logo" />
      </a>
      <div className={styles.navbar}>Youtuba</div>
      <input
        ref={searchRef}
        type="text"
        className={styles.inputText}
        placeholder="Youtuba 검색"
        onKeyPress={onKeyPress}
      ></input>
      <button onClick={onClick} className={styles.inputBtn}>
        <img src="../images/search.png" alt="search" />
      </button>
      <img src="../images/user.png" alt="user" className={styles.user} />
    </header>
  );
});

export default Navbar;
