import React from "react"
import {BrowserRouter, Route, Routes}  from "react-router-dom"
import ProductPage from "../pages/productPage/ProductPage"
import ProductsListPage from "../pages/productsListPage/ProductsListPage"
import ErrorPage from "../pages/errorPage/ErrorPage"
import HomePage from "../pages/HomePage/HomePage"
import CartPage from "../pages/cartPage/CartPage"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route exact path="/product" element={<ProductPage />} />
                <Route exact path='/list' element={<ProductsListPage/>}/>
                <Route exact path='/cart' element={<CartPage/>}/>
                <Route path="*" element={<ErrorPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router