import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
    const textStyle = { color: "white", textDecoration: "none"}
    return (
        <div className={styles.main}>
            <Link to="/" style={textStyle}>
                - Pick Your Poison -
            </Link>
        </div>
    )
}

export default NavBar