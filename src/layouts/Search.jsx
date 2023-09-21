import { useState } from "react";
import "../styles/Search.css";
import { data } from "../DB";

export default function Search() {
  const [filteredData, setFilteredData] = useState([]);

  const handleFilter = (event) => {
    const searchedWords = event.target.value;
    const newFilter = data.filter((value) => {
      return value.tag.toUpperCase().includes(searchedWords.toUpperCase());
    });
    if (searchedWords === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  return (
    <div>
      <div>
        <input
          type="search"
          placeholder="Search For Tags..."
          className="nav-input"
          onChange={handleFilter}
          // data={data}
        />
      </div>
      {filteredData.length != 0 && (
        <div className="search-results g-white text-white">
          {filteredData.slice(0, 2).map((datum) => {
            const { id, url, Name, tag } = datum;
            return (
              <div key={id} className="d-flex gap-2">
                <img src={url} alt="" width={50} height={20}/>
                <p>{tag}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
