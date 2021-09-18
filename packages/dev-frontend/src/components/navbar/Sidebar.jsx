import { NavLink } from "react-router-dom";
import "./style/Sidebar.css";
import { UserAccount } from "../UserAccount";
import { UserAccountBalance } from "../UserAccount";

const Sidebar = ({ sideNavOpen }) => {
  const routeName = [
    {
      name: "RISKY TROVES",
      route: "/risky-troves"
    },
    {
      name: "REDEMPTION",
      route: "/redemption"
    }
  ];

  return (
    <div
      className={`
            Sidebar transform transition-all duration-300
            ${sideNavOpen ? "translateForSidebar" : "translateForSidebarNeg"}
            `}
    >
      <div className="SidebarWrapper">
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "60px 0 0 0"
          }}
        >
          <NavLink exact activeClassName="activeNavLink" to="/">
            <img
              className=""
              src="https://laughing-fermi-373474.netlify.app/main-logo.png"
              alt=""
              style={{ width: "50px", height: "50px", borderRadius: "50%", marginBottom: "-10px" }}
            />
          </NavLink>
          <h2>
            <NavLink to="/" className="SidebarRoute" exact activeClassName="activeNavLink">
              Dashboard
            </NavLink>
          </h2>
        </div>
        <div className="SidebarLinks">
          {routeName.map((item, index) => (
            <NavLink
              key={index}
              to={item.route}
              className="SidebarRouteTwo"
              exact
              activeClassName="activeNavLink"
            >
              {item.name}
            </NavLink>
          ))}
        </div>
        <div
          className="SidebarLinks"
          style={{ paddingTop: "80px", fontWeight: "bold", fontSize: "16px" }}
        >
          <a className="SidebarRoute userAccountBalance" href="https://main.ddexx.io/">
            dDEXX
          </a>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <div className="userAccountSidebar" style={{ marginTop: "10px" }}>
            <UserAccount />
          </div>
          <div className="userAccountBalance" style={{ marginTop: "10px", marginBottom: "100px" }}>
            <UserAccountBalance />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
