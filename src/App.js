import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Home from "./components/Home/Home";
import ListNews from "./components/ListNews/ListNews";
import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <GlobalProvider>
      <Header/>
        <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/form" element={<Form/>}/>
        <Route path="/list" element={<ListNews/>}/>
       </Routes>
       <Footer/>
       </GlobalProvider>
      </BrowserRouter>
            
    </div>
  );
}

export default App;
