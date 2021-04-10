import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Profile from "./Components/Profile/profile";
import News from "./Components/News/news";
import Music from "./Components/Music/music";
import Settings from "./Components/Settings/settings";
import DialogsContainer from "./Components/Dialogs/dialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";

function App(props) {
  return (
    <BrowserRouter>
      <div className="all">
        <Header />
        <div className="container">
          <Route path="/profile" render={() => <Profile />} />
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/news" render={News} />
          <Route path="/music" render={Music} />
          <Route path="/settings" render={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;