import { NavLink, Outlet } from 'react-router-dom'
import React, { Component } from 'react';
import './reset.css'
import './AkiraExpanded.otf'
import './Layout.css';

const Layout = () => {
  return (
    <>
      <header>
        <div className="container">
          <nav>
            <div className="logo">
              LOGO
            </div>
            <ul>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/photos/">Photos</NavLink></li>
              <li><NavLink to="/contact/">Contact</NavLink></li>
            </ul>
          </nav>
          <div className="header-center">
            <div className="header-container">
              <h2>Best place for Quality Images</h2>
              <LayoutForm />
            </div>
          </div>
        </div>
      </header>
      <div className="pageBody">
        <Outlet/>
      </div>
      <footer>
        <h1>FOOTER</h1>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <h1>FOOTER</h1>
      </footer>
    </>
  );
}
 
export default Layout;

class LayoutForm extends Component {
  render() { 
    return (
      <form>
        <input type="text" name="searchInput" placeholder='Looking for specific photo?' />
        <button>
          <span className="material-icons-outlined">
            search
          </span>
        </button>
      </form>
    );
  }
}
 