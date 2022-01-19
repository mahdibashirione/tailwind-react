import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Landing from './components/Landing/Landing';
import AmazingProduct from './components/AmazingProduct/AmazingProduct';


class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <Landing />
        <AmazingProduct />
      </>
    )
  }
}

export default App;