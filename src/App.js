

import React,{useEffect,useState,Component} from 'react';
import  Navbar from "./components/Navbar"
import "./App.css"



import News from "./components/News"
import Student from "./components/Student"





import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

export default class App extends Component {
  
 
  render() {
    
         
    return(
      <div>
    
    <div>
        <Router>
        <Navbar/>
    
          
        <Routes>
              <Route path='/' element={<News  pageSize={12} country='us' category='general' />}></Route>
            <Route path='/business' element={<News  pageSize={12} country='us' category='business' />}></Route>
            <Route path='/entertainment' element={<News  pageSize={12} country='us' category='entertainment' />}></Route>
            <Route path='/health' element={<News  pageSize={12} country='us' category='health' />}></Route>
            <Route path='/science' element={<News  pageSize={12} country='us' category='science' />}></Route>
            <Route path='/sports' element={<News  pageSize={12} country='us' category='sports' />}></Route>
            <Route path='/technology' element={<News  pageSize={12} country='us' category='technology' />}></Route>
          </Routes>
        </Router>
      </div>
    
    
    
    
    
    
    </div>
    )
    
  }
  
 
}







