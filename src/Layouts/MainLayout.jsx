import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Shared/Navbar';
import Footer from '../pages/Footer';
 

const MainLayout = () => {
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
           <div className='w-11/12 mx-auto'>
           <Outlet></Outlet> 
           </div>
             
           <footer className=''>
                <Footer></Footer>
            </footer>
             
        </div>
    );
};

export default MainLayout;