import { useUnit } from "../contexts/UnitContext";
import styles from "./ThemeButton.module.css";

function Theme() {
  const { dispatch, drkMode } = useUnit();

  return (
    <button
      className={`${styles.btn} ${drkMode ? styles.btnDark : ""}`}
      onClick={() => dispatch({ type: "drkMode" })}
    >
      <span className="material-symbols-outlined"> dark_mode </span>
    </button>
  );
}

export default Theme;
