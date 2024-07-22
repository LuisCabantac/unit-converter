import styles from "./Logo.module.css";

function Logo() {
  return (
    <div className="logo-section">
      <h1>
        <span className={styles.textLogo}>
          Unit Converter <span className={styles.dotLogo}>o</span>
        </span>
      </h1>
    </div>
  );
}

export default Logo;
