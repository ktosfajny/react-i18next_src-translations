import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useTranslation } from "react-i18next";
import i18next from "i18next"; // import to get method for changing language

function App() {
  const { t } = useTranslation(); // import to get 't' function which allows to display text based on passed key

  // function to change language
  function handleClick(lang) {
    i18next.changeLanguage(lang);
  }

  return (
    <div className="App">
      <nav
        style={{ width: "100%", padding: "2rem 0", backgroundColor: "gray" }}
      >
        <button onClick={() => handleClick("en")}>English</button>
        <button onClick={() => handleClick("ko")}>Korean</button>
        <button onClick={() => handleClick("chi")}>Chinese</button>
      </nav>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          {/* t("Thanks.1") or t("asd") will return correct text based on chosen language. Translations are in src/tranlations  */}
          <h3>{t("Thanks.1")}</h3> <h3>{t("Why.1")}</h3>
          <p>{t("asd")}</p>
        </div>
      </header>
    </div>
  );
}

export default App;
