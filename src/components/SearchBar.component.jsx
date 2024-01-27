import { useState } from "react";
import "./SearchBar.styles.css";

const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState("");

  // handleFormSubmit is a callback function that is passed to the form's onSubmit event handler
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form was submitted");
    onSubmit(term);
  };

  // what we're doing here is stealing the control of the value of the input from the browser and giving it to React state system
  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  return (
    <>
      <div className="search-bar">
        <form onSubmit={handleFormSubmit}>
          <label>Imagify --&gt; search images</label>
          <input value={term} onChange={handleChange} />
        </form>
      </div>
    </>
  );
};

export default SearchBar;
