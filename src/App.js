// App.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import View from "./container/View";
const App = () => {
  return (
    <div>
      <div className="flex">
        <Routes>
          <Route path="/view" element={<View />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
