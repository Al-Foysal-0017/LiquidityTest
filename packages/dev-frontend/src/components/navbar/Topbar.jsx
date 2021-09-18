import React from "react";
import "./style/Topbar.css";
import { Turn as Hamburger } from "hamburger-react";
import { NavLink } from "react-router-dom";
// import { LiquityStoreState } from "@liquity/lib-base";
// import { useLiquitySelector } from "@liquity/lib-react";
// import { Container, Flex, Box } from "theme-ui";
// import { AddressZero } from "@ethersproject/constants";
import { useLiquity } from "../../hooks/LiquityContext";
import { UserAccount } from "../UserAccount";
import { SystemStatsPopup } from "../../components/SystemStatsPopup";

const Topbar = ({ sideNavOpen, setSideNavOpen, children }) => {
  const {
    config: { frontendTag }
  } = useLiquity();
  // const { frontend } = useLiquitySelector(select);
  // const isFrontendRegistered = frontendTag === AddressZero || frontend.status === "registered";

  return (
    <>
      <div className="HeaderContainer">
        <div className="HeaderWrapper">
          <div>
            <NavLink to="/">
              <img
                className=""
                src="https://laughing-fermi-373474.netlify.app/main-logo.png"
                alt=""
                style={{ width: "50px", height: "50px", borderRadius: "50%" }}
              />
            </NavLink>
          </div>

          <div className="HeaderRight">
            <div className="userAccount">
              <UserAccount />
            </div>

            <div className="SystemStatsPopupClass" style={{ marginRight: "20px" }}>
              <SystemStatsPopup />
            </div>
            <div className="HeaderHamburger">
              <Hamburger toggled={sideNavOpen} toggle={setSideNavOpen} color="#fff" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
