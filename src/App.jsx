import { useEffect } from "react";
import { useUnit } from "./contexts/UnitContext";
import ThemeButton from "./components/ThemeButton";
import Logo from "./components/Logo";
import Unit from "./components/Unit";
import Choice from "./components/Choice";
import Input from "./components/Input";
import Output from "./components/Output";
import Footer from "./components/Footer";

function App() {
  const { drkMode, choiceOne, choiceTwo, dispatch } = useUnit();

  // useEffect(
  //   function () {
  //     if (drkMode) document.body.classList.toggle("bodyDark");
  //   },
  //   [drkMode]
  // );

  return (
    <>
      {/* <ThemeButton /> */}
      <div className={`container ${drkMode ? "containerDark" : ""}`}>
        <Logo />
        <div className={`conversionSection ${drkMode ? "conversionDark" : ""}`}>
          <div className="conversionContainer">
            <Unit />
            <Choice label="FROM" choice={choiceOne} type="choiceOne" />
            <Input />
            <Choice label="TO" choice={choiceTwo} type="choiceTwo" />
            <Output />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
