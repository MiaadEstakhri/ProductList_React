import React, { useState } from "react";
import Select from "react-select";
import style from "./filter.module.css";
import { useProductsActions } from "../Providers/ProductsProvider";

const options = [
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
  const [value, setValue] = useState("");
  const [sort, setSort] = useState("");

  const filterHandler = (selectedOptions) => {
    dispatch({ type: "filter", selectedOptions });
    dispatch({ type: "sort", selectedOptions:sort });
    setValue(selectedOptions);
  };

  const sortHandler = (selectedOptions) => {
    dispatch({ type: "sort", selectedOptions });
    setSort(selectedOptions);
  };

  return (
    <div className={style.filter}>
      <p>filter products based on:</p>
      <div className={style.selectedContainer}>
        <span>order by</span>
        <Select
          value={value}
          onChange={filterHandler}
          options={options}
          className={style.select}
        />
      </div>
      <div className={style.selectedContainer}>
        <span>sort by</span>
        <Select
          value={sort}
          onChange={sortHandler}
          options={sortOptions}
          className={style.select}
        />
      </div>
    </div>
  );
};

export default Filter;
