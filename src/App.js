import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from './routes/index';
import Footer from './components/Footer';
import Header from './components/Header';
import GlobalStyles from './components/GlobalStyles';
function App() {
  return (
    <>
    <GlobalStyles/>
      <Router>
        <Header />
        <Routes/>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
