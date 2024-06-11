import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';

const Home = () => {
    return (
        <>
            <Header />
            <Navbar />
            <div className="home-container bg-black min-h-[65vh] w-screen">
                home
            </div>
        </>

    )
}

export default Home;