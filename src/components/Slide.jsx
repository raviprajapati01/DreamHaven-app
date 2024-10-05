import "../styles/Slide.scss"
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Search } from "@mui/icons-material";
import variables from "../styles/variables.scss";
import { useState } from "react";
// import "../styles/Navbar.scss";

const Slide = () => {

  const [search, setSearch] = useState("")

  const navigate = useNavigate()
  return (
    <div className="slide">
      <h1>
        Welcome Home! Anywhere you roam <br /> Stay in the moment. Make your
        memories
      </h1>
      <div className="navbar_search">
        <input
          type="text"
          placeholder="Search ..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <IconButton disabled={search === ""}>
          <Search
            sx={{ color: variables.pinkred }}
            onClick={() => { navigate(`/properties/search/${search}`) }}
          />
        </IconButton>
      </div>
    </div>
  );
};

export default Slide;