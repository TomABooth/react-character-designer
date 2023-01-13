import './App.css';
import React from 'react';
import Header from './Components/Header/header';
import Main from './Components/Main/main';
import Footer from './Components/Footer/footer';

export default function App() {
  return (
    <div className="app">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
