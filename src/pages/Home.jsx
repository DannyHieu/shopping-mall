import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../assets/css/Home.css'

function Home(props) {
    return (
        <div className='container'>
            <Header />
            <Footer />
        </div>
    );
}

export default Home;