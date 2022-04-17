import Product from "./components/Product/Product";
import React, { Component, useState } from "react";
import Counter from "./components/Counter/Counter"
//class App extends Component {
//  state = {
//    productData: [
//      { name: 'ساعت هوشمند', price: '2.500.000' },
//      { name: 'کتاب فروشندگی', price: '500.000' },
//      { name: 'موبایل اپل', price: '25.500.000' },
//    ]
//  }

//  clickHandler = () => {
//    this.setState({
//      productData: [
//        { name: 'ساعت هوشمند', price: '2.200.000' },
//        { name: 'کتاب فروشندگی', price: '325.000' },
//        { name: 'موبایل اپل', price: '25.700.000' },
//      ]
//    })
//  }

//  render() {
//    return (
//      <div className="flex flex-col items-center justify-center gap-y-4 p-4">
//        <h1 className="font-sans font-bold text-2xl text-slate-800" >Product List</h1>
//        {this.state.productData.map(item => {
//          return <Product name={item.name} price={item.price} />
//        })}
//        <button onClick={this.clickHandler} className="bg-purple-500 hover:bg-purple-700 text-white py-2 px-8 rounded-md hover:ring ring-purple-500 ring-offset-4 ring-offset-purple-200 transition-all duration-300 ">click</button>
//      </div >
//    )
//  }
//}

const App = () => {

  return (
    <Counter />
  )

  //const [productData, setProductData] = useState([
  //  { name: 'ساعت هوشمند', price: '2.500.000' },
  //  { name: 'کتاب فروشندگی', price: '500.000' },
  //  { name: 'موبایل s22 ultra', price: '25.500.000' },
  //])

  //const clickHandler = () => {
  //  setProductData(
  //    [
  //      { name: 'ساعت هوشمند', price: '2.500.000' },
  //      { name: 'کتاب فروشندگی', price: '500.000' },
  //      { name: 'موبایل اپل', price: '30.000.000' },
  //    ]
  //  )
  //}

  //return (
  //  <div className="flex flex-col items-center justify-center gap-y-4 p-4">
  //    <h1 className="font-sans font-bold text-2xl text-slate-800" >Product List</h1>
  //    {productData.map(item => {
  //      return <Product name={item.name} price={item.price} />
  //    })}
  //    <button onClick={clickHandler} className="bg-purple-500 hover:bg-purple-700 text-white py-2 px-8 rounded-md hover:ring ring-purple-500 ring-offset-4 ring-offset-purple-200 transition-all duration-300 ">click</button>
  //  </div >
  //)
}


export default App;