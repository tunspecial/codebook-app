import { Routes, Route } from "react-router-dom"
import { HomePage } from "../pages/Home/HomePage"
import { ProductsList } from "../pages/Products/ProductsList"
import { ProductDetail } from "../pages/ProductDetail"
import { CartPage, Login, OrderPage, Register, DashBoardPage } from "../pages"
import { ProtectedRoutes } from "./ProtectedRoutes"
import { PageNotFound } from "../pages/PageNotFound"


export const AllRoute = () => {


    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>

                <Route path="products" element={<ProductsList />}></Route>
                <Route path="products/:id" element={<ProductDetail />}></Route>
                
                <Route path="login" element={<Login />}></Route>
                <Route path="register" element={<Register />}></Route>

                <Route path="cart" element=
                    {<ProtectedRoutes>
                        <CartPage />
                    </ProtectedRoutes>}>
                </Route>

                <Route path="order-summary" element=
                    {<ProtectedRoutes>
                        <OrderPage />
                    </ProtectedRoutes>}>
                </Route>

                <Route path="dashBoard" element=
                    {<ProtectedRoutes>
                        <DashBoardPage />
                    </ProtectedRoutes>}>
                </Route>

                <Route path="*" element={<PageNotFound />}></Route>

            </Routes>
        </>
    )
}
