import React from 'react';
import ReactDOM from 'react-dom';
import {Container} from 'react-bootstrap';
import Header from './components/header';
import { Global, css} from '@emotion/core';
import NavBar from "./components/navigation";
import Jumbotron from "react-bootstrap/Jumbotron";
import Main from "./components/main";
import Banner from "./components/banner";
import Footer from "./components/Footer";
import ErrorBoundary from "./components/ErrorBoundary";

class App extends React.Component {
    render() {
        return (
            <div>
                <Global styles={css`
                html,body{
                margin:0;
                padding-top:25px;
                width:100vw;
                overflow-x:hidden;
                font-family: Montserrat,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;
                font-size:16px;     
                box-sizing:border-box;   
                }
                h1{
                font-size:2.5rem;
                font-weight:500;
                line-height:1.4;
                }    
                .center-align{
                display:flex;
                justify-content:center;
                align-items:center;
                }          
                Link, a{
                    font-family: Montserrat,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;
                text-decoration:none;
                text-transform:uppercase;
                color:black;
                font-size:0.75rem;
                }
               .navItemActive{
               color:#d96528;}
               .aviStuff{
               width:100vw;
                display:flex;
                justify-content:center;
                align-items:center;
                height:40px;            
               color:white;
               background:black;
               font-size:1rem;
               }
                `} />
           <div>
               <Header />
               <NavBar />
               <ErrorBoundary>
               <Main />
               </ErrorBoundary>
               <Banner />
               <Footer />
                <div className="aviStuff">
                    Demo built by avi@aravindh.me
                </div>
           </div>
            </div>
        );
    }
}

export default  App;