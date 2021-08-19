import React from 'react'
import { ToastContainer } from 'react-toastify';
import './App.css';
import Navbar from './components/Navbar';
import { Route } from "react-router-dom";
import Home from "./components/Home";
import AddPost from "./components/AddPost";
import EditContact from "./components/EditContact";




function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Route exact path="/" component={() => <Home />} />
       <Route exact path="/add" component={() => <AddPost />} />
      <Route exact path="/edit/:id" component={() => <EditContact />} /> 
    </div>
  );
}

export default App;
