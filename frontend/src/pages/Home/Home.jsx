import React from 'react';
import Announcement from '../../components/Announcement/Announcement';
import Categories from '../../components/Categories/Categories';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar';
import News from '../../components/News/News';
import Products from '../../components/Products/Products';
import Slider from '../../components/Slider/Slider';

const Home = () => {
  return <div>
    <Announcement/>
    <NavBar/>
    <Slider/>
    <Categories/>
    <Products/>
    <News/>
    <Footer/>
  </div>;
};

export default Home;
