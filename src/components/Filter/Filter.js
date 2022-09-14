import React, { useState } from "react";
import styles from "./filter.module.css";
import { useProductsActions } from "../Providers/ProductsProvider";
import SelectComponent from "../../common/Select/SelectComponent";
import SearchBar from "../../common/SearchBar/SearchBar";

const filterOptions = [
  { value: "", label: "All" },
  { value: "XS", label: "XS" },
  { value: "S", label: "S" },
  { value: "M", label: "M" },
  { value: "L", label: "L" },
  { value: "XL", label: "XL" },
  { value: "XXL", label: "XXL" },
];

const sortOptions = [
  { value: "highest", label: "highest" },
  { value: "lowest", label: "lowest" },
];

const Filter = () => {
  const dispatch = useProductsActions();
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");

  const filterHandler = (selectedOptions) => {
    dispatch({ type: "filter", selectedOptions });
    dispatch({ type: "sort", selectedOptions: sort });
    setFilter(selectedOptions);
  };

  const sortHandler = (selectedOptions) => {
    dispatch({ type: "sort", selectedOptions });
    setSort(selectedOptions);
  };

  return (
    <section>
      <SearchBar filter={filter} />
      <div className={styles.filter}>
        <p>filter products based on:</p>
        <SelectComponent
          title="filter size by:"
          value={filter}
          onChange={filterHandler}
          options={filterOptions}
        />
        <SelectComponent
          title="sort by:"
          value={sort}
          onChange={sortHandler}
          options={sortOptions}
        />
      </div>
    </section>
  );
};

export default Filter;
