import React from "react";
import Navbar from "./layouts/Navbar";
import Content from "./layouts/Content";
import Footer from "./layouts/Footer";
import { CardContextProvider } from "./Reducer/context";

function App() {
  return (
    <div className="App">
      <Navbar />
      <CardContextProvider>
        <Content /> 
      </CardContextProvider> 
      <Footer />
    </div>
  );
}

export default App;
