import Product from "./components/Product/Product";
import React, { Component, useState } from "react";
import Counter from "./components/Counter/Counter";
import HooksArray from "./components/Hook/HookArray";
import ProductList from "./components/ProductList/ProductList";
import Navbar from "./components/Navbar/Navbar";

class App extends Component {

  state = {

    productData: [
      { name: 'ساعت هوشمند', price: '2.500.000', quantity: 1, id: 1 },
      { name: 'کتاب فروشندگی', price: '500.000', quantity: 1, id: 2 },
      { name: 'موبایل اپل', price: '25.500.000', quantity: 1, id: 3 },
    ]

  }

  removeHandler = (id) => {
    const filterProduct = this.state.productData.filter(p => p.id !== id)
    this.setState({ productData: filterProduct })
  }

  incrementHandler = (id) => {
    const index = this.state.productData.findIndex(p => p.id === id)

    const product = { ...this.state.productData[index] }
    product.quantity++;

    const products = [...this.state.productData]
    products[index] = product

    this.setState({ productData: products })
  }

  decrementHandler = (id) => {

    const index = this.state.productData.findIndex(p => p.id === id)

    const product = { ...this.state.productData[index] }

    if (product.quantity > 1) {
      product.quantity--;

      const products = [...this.state.productData]
      products[index] = product

      this.setState({ productData: products })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevState)
  }

  render() {
    return (
      <div className="container mx-auto">
        <Navbar totalItem={this.state.productData.length} />
        <div className="flex flex-col items-center justify-center gap-y-4 p-4">
          <h1 className="font-sans font-bold text-2xl text-slate-800 select-none" >Product List</h1>
          <ProductList
            remove={this.removeHandler}
            increment={this.incrementHandler}
            decrement={this.decrementHandler}
            product={this.state.productData}
          />
        </div >
      </div>
    )
  }
}

//const App = () => {

//  const [productData, setProductData] = useState([
//    { name: 'ساعت هوشمند', price: '2.500.000' },
//    { name: 'کتاب فروشندگی', price: '500.000' },
//    { name: 'موبایل s22 ultra', price: '25.500.000' },
//  ])

//  const clickHandler = () => {
//    setProductData(
//      [
//        { name: 'ساعت هوشمند', price: '2.500.000' },
//        { name: 'کتاب فروشندگی', price: '500.000' },
//        { name: 'موبایل اپل', price: '30.000.000' },
//      ]
//    )
//  }

//  return (
//    <div className="flex flex-col items-center justify-center gap-y-4 p-4">
//      <h1 className="font-sans font-bold text-2xl text-slate-800" >Product List</h1>
//      {productData.map(item => {
//        return <Product name={item.name} price={item.price} />
//      })}
//      <button onClick={clickHandler} className="bg-purple-500 hover:bg-purple-700 text-white py-2 px-8 rounded-md hover:ring ring-purple-500 ring-offset-4 ring-offset-purple-200 transition-all duration-300 ">click</button>
//    </div >
//  )
//}


export default App;