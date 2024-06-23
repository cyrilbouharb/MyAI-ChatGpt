import React from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <div
        style={{
          width: "100%",
          minHeight: "10vh",
          maxHeight: "50vh",
          marginTop: 0,
        }}
      >
        <p style={{ fontSize: "20px", textAlign: "center", padding: "20px" }}>
          Built by Cyril Bou-Harb&nbsp;   
          <Link to={"https://github.com/cyrilbouharb"} style={{ color: 'inherit', textDecoration: 'none', marginRight: '5px' }}>
             <FaGithub style={{ verticalAlign: 'middle' }} />
          </Link>
          <Link to={"https://www.linkedin.com/in/cyril-bou-harb-9996a6279/"} style={{ color: 'inherit', textDecoration: 'none' }}>
          <FaLinkedin style={{ verticalAlign: 'middle' }}/>
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
