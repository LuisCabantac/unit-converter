import { useUnit } from "../contexts/UnitContext";
import styles from "./Unit.module.css";

const unitTypes = [
  { value: "area", opt: "Area" },
  { value: "frequency", opt: "Frequency" },
  { value: "fuel", opt: "Fuel Economy" },
  { value: "length", opt: "Length" },
  { value: "mass", opt: "Mass" },
  { value: "pressure", opt: "Pressure" },
  { value: "speed", opt: "Speed" },
  { value: "temp", opt: "Temperature" },
  { value: "time", opt: "Time" },
  { value: "volume", opt: "Volume" },
];

function Unit() {
  const { dispatch, drkMode } = useUnit();

  return (
    <div className={styles.selectUnitSection}>
      <label
        className={`${styles.selectLabel}${drkMode ? "Dark" : ""}`}
        htmlFor="select-unit"
      >
        SELECT UNIT
      </label>
      <select
        className={`${drkMode ? "selectDark" : ""}`}
        id="select-unit"
        onChange={(e) => dispatch({ type: "unit", payload: e.target.value })}
      >
        {unitTypes.map((unit) => (
          <option value={unit.value} key={unit.value}>
            {unit.opt}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Unit;
