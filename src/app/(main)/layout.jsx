import Footer from '@/components/Navbar/Footer';
import Navbar from '@/components/Navbar/Navbar';
import React from 'react';

const MainLayout = ({children}) => {
    return (
        <div>
            <Navbar/>
            {children}

            <Footer/>
            
        </div>
    );
};

export default MainLayout;