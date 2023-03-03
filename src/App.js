import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AnimatedRoutes from './components/animateRoutes'
import Header from './components/header';
import Footer from './components/footer';



class App extends Component {
  state = {
    navAndFooterStyle: {
      opacity: 0,
    }
  };

  componentDidMount() {
    let navAndFooterIn = {
      navAndFooterStyle: {
        opacity: 1,
      }
    }
   
    setTimeout(() => {
      Object.keys(navAndFooterIn).forEach(key => {
        this.setState({
          [key]: navAndFooterIn[key]
        })
      })
    }, 3000)
  };



  render() {
    return (
        <Router>
          <Header style={this.state.navAndFooterStyle} />
          <AnimatedRoutes />
          <Footer style={this.state.navAndFooterStyle} />
        </Router>
    );
  }
}
export default App;
