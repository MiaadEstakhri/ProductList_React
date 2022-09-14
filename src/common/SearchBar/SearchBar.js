import { useState } from "react";
import { useProductsActions } from "../../components/Providers/ProductsProvider";
import style from "./searchBar.module.css";

const SearchBar = ({ filter }) => {
  const dispatch = useProductsActions();
  const [value, setValue] = useState("");

  const changeHandler = (e) => {
    // console.log(e.target.value);
    dispatch({ type: "filter", selectedOptions: filter });
    dispatch({ type: "search", event: e });
    setValue(e.target.value);
  };
  return (
    <div className={style.formContainer}>
      <span>search for:</span>
      <input
        type="text"
        value={value}
        onChange={changeHandler}
        placeholder="search for ..."
      />
    </div>
  );
};

export default SearchBar;
