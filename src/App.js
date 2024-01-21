import React from "react";
import PageTitle from "./components/PageTitle";
import style from "./styles/modules/app.module.scss";
import AppHeader from "./components/AppHeader";
import AppContent from "./components/AppContent";

function App() {
  return (
    <div className="container">
      <PageTitle>TODO LIST</PageTitle>
      <div className={style.app__wrapper}>
        <AppHeader />
        <AppContent/>
      </div>
    </div>
  );
}

export default App;
