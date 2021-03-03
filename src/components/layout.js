import React from 'react';

import Header from './navbar'
import Footer from './footer'

import './layout.css'

const layout = ({ children }) => {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default layout