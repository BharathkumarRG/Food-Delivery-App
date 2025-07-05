import React from "react";
import Navbar from "./components/Navbar.jsx/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";

function App (){
    return(
        // <>
        // {/* <div className="div1">
        //     Enter the content
        // </div>
        // <div className="div2">
        //     Enter the content
        //     <a href="">APP</a>
        // </div> */}
        
        // </>
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/cart" element={<Cart />} />
                <Route path="/order" element={<PlaceOrder />} />
            </Routes>
        </div>
    );
}

export default App;