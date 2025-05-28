import React from 'react'
import Header from './componets/Header/Hearder'
import Footer from './componets/Footer/Footer'
import { Outlet } from 'react-router-dom'
function Layout() {
    return (
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}

export default Layout
