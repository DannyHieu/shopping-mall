import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../assets/css/Home.css'
import HomeContainer from '../components/HomeContainer';

function Home(props) {
    return (
        <div className='container'>
            <Header />
            <HomeContainer />
            <div id='line' />
            <Footer />
        </div>
    );
}

export default Home;