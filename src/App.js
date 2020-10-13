import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from './components/NavTabs';
import About from './pages/About';
import Discover from './pages/Discover';
import Search from './pages/Search';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/discover" component={Discover} />
        <Route exact path="/search" component={Search} />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
