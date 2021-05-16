import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import '../assets/css/main.css';
import 'normalize.css';

const Layout = ({children}) => {
    return (
        <>
            <Navbar/>
            {children}
            <Footer/>
        </>
    )
}

export default Layout;
