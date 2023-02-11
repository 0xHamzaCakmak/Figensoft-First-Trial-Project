import React from "react";
import "../Layout/Header.css";
import logo from "../../Assets/logo-bird.png";
import discord from "../../Assets/icon-discord.png";
import dokuznokta from "../../Assets/icon-dokuznokta.png";
import notification from "../../Assets/icon-notification.png";
import search from "../../Assets/icon-search.png";
import user from "../../Assets/icon-user.png";

import styled from "styled-components";

const StyledHeader = styled.div`
  height: 12vh;
  background-color: #4d4e7e;
  padding: 0 80px;
  display: flex;
  justify-content: space-between;
  justify-items: center;
  align-items: center;
  margin-left: 7%;
`;
function Header() {
  return (
    <div className="header-body">
      <StyledHeader>
        <div className="logo-ve-firmaismi">
          <a href="/">
            <img className="logo-container" src={logo} alt="logo" />
          </a>
          <a href="/" className="logo-postaguvercin">
            <li id="pg">Posta Güvercini</li>
            <li className="version-text">v0.v.9</li>
          </a>
        </div>

        <div>
          <table className="firma-table">
            <tr className="tr-table">
              <th className="th-firma">Firma</th>
              <th className="th-postaguvercini">Posta Güvercini Ltd. Şti</th>
            </tr>
          </table>
        </div>
        <nav className="menu-container">
          <ul>
            <li>
              <a href="/">
                <img className="icon-container" src={search} alt="logo" />
              </a>
            </li>
            <li>
              <a href="/">
                <img className="icon-container" src={discord} alt="logo" />
              </a>
            </li>
            <li>
              <a href="/">
                <img className="icon-container" src={dokuznokta} alt="logo" />
              </a>
            </li>
            <li>
              <a href="/">
                <img className="icon-container" src={notification} alt="logo" />
              </a>
            </li>
          </ul>
          <button>Login</button>
        </nav>
      </StyledHeader>
    </div>
  );
}

export default Header;
