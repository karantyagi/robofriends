// import React, { Component } from 'react';
import React from 'react';
import logo from './logo.svg';
import './Hello.css';
import './App.css'

// class Hello extends Component {
// //     render() {
// //         return (
// //             <div>
// //                 <header className="tc">
// //                     <br/>
// //                     <img src={logo} className="App-logo" alt="logo" />
// //                 </header>
// //                 <h1 className="f2 tc"> Building a simple react app - ROBO FRIENDS. </h1>
// //                 <hr/>
// //                 <h1 className={'f3 tc'}> Properties for Hello component</h1>
// //                 <h3 className={'tc'}> this.props.msg : {this.props.msg}</h3>
// //             </div>
// //         );
// //     }
// // }

        // Specifying a function instaed of a class

const Hello = (props) =>
    {
        return (
            <div>
                <header className="App-header tc">
                    <img src={logo} className="App-logo" alt="logo" />
                </header>
                <h1 className="f2 tc"> Building a simple react app - ROBO FRIENDS. </h1>
                <hr/>
                <h1 className={'f3 tc'}> Properties for Hello component</h1>
                <h3 className={'tc'}> this.props.msg : {props.msg}</h3>
            </div>
        );
    }


export default Hello;
