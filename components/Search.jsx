import styles from "./Search.module.css";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useRouter } from "next/router";

function Search() {

    const [searchText, setSearchText] = useState("");
    const router = useRouter();
    const handleSubmit = (e) => {
        e.preventDefault()
        router('/?search=' + searchText)
    }
    return (
        <form className="searchContainer" onSubmit={handleSubmit}>
          <div className="searchBox">
            <input
              className="searchInput"
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button className="searchButton" type="submit">
              <FaSearch size={20} />
            </button>
          </div>
        </form>
      );
}

export default Search;