import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import TodoFeature from "./features/Todo";
import AlbumFeature from "./features/Album";

function App() {
  return (
    <div className="App">
      Home Page
      <Routes>
        <Route path="/todos" component={TodoFeature} />
        <Route path="/albums" component={AlbumFeature} />
      </Routes>
    </div>
  );
}

export default App;
