import React, { useState } from "react";
import './App.css';
import Home from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SigninPage from "./pages/signin";
import MatchmakePage from "./pages/matchmake";
import SignupPage from "./pages/signup";
import SearchPage from "./pages/search";
import ContactPage from "./pages/contact";
import ServicePage from "./pages/services";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import CheckoutPage from "./pages/checkout";
import UserProfilePage from "./pages/userprofile";
import Chat from "./pages/chat";
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';



function App() {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  };

  return (
    <Router>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signin" component={SigninPage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/matchmake" component={MatchmakePage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/searchprofile" component={SearchPage} />
        <Route path="/service" component={ServicePage} />
        <Route path="/checkout" component={CheckoutPage} />
        <Route path="/userprofile" component={UserProfilePage} />
        <Route path="/chat" component={Chat} />
        <Route>
        </Route>

      </Switch>

    </Router>
  );
}

export default App;

