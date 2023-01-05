import React from "react";
import Header from "./components/Header";
import "./scss/app.scss";


import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import { SearchContext } from "./context/Context";




// console.log(SearchContext.Provider);

const App = () => {

  const [searchValue, setSearchValue] = React.useState('')
  // console.log(searchValue);

  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ setSearchValue, searchValue }} >
        <Header
        //  setSearchValue={setSearchValue} searchValue={searchValue} 
        />
        <div className="content">
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div >
        </div >
      </SearchContext.Provider>
    </div >
  );
}

export default App;


