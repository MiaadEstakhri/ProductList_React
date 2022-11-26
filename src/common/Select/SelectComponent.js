import Select from "react-select";
import styles from "./select.module.css";

const SelectComponent = ({ title, ...rest }) => {
  console.log(rest);
  return (
    <div className={styles.selectedContainer}>
      <div className={styles.selected}>
        <span>{title}</span>
        <Select {...rest} className={styles.select} />
      </div>
    </div>
  );
};

export default SelectComponent;
