import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";
import "./Navbar.css";
const Navbar = () => (
  <Stack
    className="navBar-space"
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      // display: "flex",
      position: "sticky",
      background: "#000",
      top: 0,
      justifycontent: "space-between",
      // borderRadius: "1px solid black",
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
    </Link>
    <SearchBar />
  </Stack>
);
export default Navbar;
