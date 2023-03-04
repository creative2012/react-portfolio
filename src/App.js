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


    let location = this.getBaseUrl()
    console.log(location)
    //check if user has loaded first time into the landing page - if so play delayed fade animation for nav and footer
    if(window.location.href === location[0]){
    setTimeout(() => {
      Object.keys(navAndFooterIn).forEach(key => {
        this.setState({
          [key]: navAndFooterIn[key]
        })
      })
    }, 3000);
  }
  //if user loaded first time directly to another page just show nav and footer straight away
  else {
    this.setState({
      navAndFooterStyle: {
        opacity: 1,
      }
    })

  }

  };

  getBaseUrl() {
    var re = new RegExp(/^.*\//);
    return re.exec(window.location.href);
}


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
