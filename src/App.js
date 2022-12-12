import React, {Suspense} from 'react';
import {Route, Switch} from "react-router-dom";
import './App.css';
import HomePage from "./Page/HomePage";
import FirstPage from "./Page/FirstPage";
import NotFoundScreen from "./Page/NotFoundPage";
import LoadingScreen from "./Page/LoadingPage";
import ResponsiveAppBar from "./Components/Header";

function App() {
  return (
    <Suspense fallback={<LoadingScreen/>}> 
      <ResponsiveAppBar />
      <Switch>
        <Route path="/" exact component={HomePage}/>
        <Route path="/dashboard" exact component={FirstPage}/>
        <Route render={() => <NotFoundScreen/>}/>
      </Switch>
    </Suspense>
  );
}

export default App;
