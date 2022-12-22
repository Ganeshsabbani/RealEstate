import React from "react";
import Main from "./Components/Main";
import Filter from "./Components/Filter";
import { list } from "./Components/List";
import { useState} from 'react';
import SearchBar from "./Components/SearchBar";
import Header from "./Components/Header";

function App() {
  const[products,setProducts]=useState([...list])
  const[filter,setFilter]=useState([...list])
  return (
    <>
      <div >
        <Header />
        <SearchBar />
        <Filter products={products} setProducts={setProducts} filter={filter} setFilter={setFilter} />
        <Main products={products} setProducts={setProducts} filter={filter} setFilter={setFilter}/>
      </div>
    </>
  );
}

export default App;
